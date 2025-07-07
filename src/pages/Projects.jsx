import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import learnifyImg from '../assets/certificates/learnify.png';
import enagarPalikaImg from '../assets/certificates/enagarPalika.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [modalImage, setModalImage] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'E-Nagarpalika - Digital Municipal Services Platform',
      description: 'A digital platform to manage municipal services like application submission, tracking, and updates. Includes user authentication and role-based dashboards for Citizen, CMO, Nodal Officer, and Commissioner, with real-time notifications. Role: Full-stack Developer',
      image: enagarPalikaImg,
      tags: ['featured', 'fullstack'],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Learnify - Online Learning Platform',
      description: 'An online learning platform for students, instructors, and admins. Role: Full-stack Developer',
      image: learnifyImg,
      tags: ['featured', 'fullstack'],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Hall Booking Software Development (Team Contribution)',
      description: 'Contributed as a team member in the Hall Booking Software project for the college and received appreciation.',
      image: null,
      tags: ['frontend'],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: '#',
      demo: '#',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">My Projects</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              A collection of my recent work. Each project is a unique piece of development that solves a specific problem.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {['all', 'featured', 'fullstack', 'frontend'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-3 sm:px-4 py-2 rounded-md transition-colors duration-300 text-sm sm:text-base ${
                    filter === category
                      ? 'bg-primary text-white'
                      : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#252525]'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="card h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  {project.image ? (
                    <div className="h-40 sm:h-48 bg-gray-800 relative overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => setModalImage(project.image)}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-contain h-full w-full max-w-full rounded-t-md transition-transform duration-200 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-40 sm:h-48 bg-gradient-to-br from-[#1a1a1a] to-[#252525] flex items-center justify-center">
                      <FiFolder className="text-primary text-6xl opacity-50" />
                    </div>
                  )}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-2 sm:gap-0">
                      <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                      <div className="flex gap-2 sm:gap-3">
                        <a 
                          href={project.github} 
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="View GitHub Repository"
                        >
                          <FiGithub size={18} />
                        </a>
                        <a 
                          href={project.demo} 
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="View Live Demo"
                        >
                          <FiExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-3 sm:mb-4 flex-1 text-sm sm:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-[#1a1a1a] text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      {/* Modal for big image */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-2 sm:px-0" onClick={() => setModalImage(null)}>
          <div className="relative max-w-3xl w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img src={modalImage} alt="Project Large" className="max-h-[70vh] sm:max-h-[80vh] max-w-full rounded-lg shadow-2xl" />
            <button onClick={() => setModalImage(null)} className="absolute top-2 right-2 text-white bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-90 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;