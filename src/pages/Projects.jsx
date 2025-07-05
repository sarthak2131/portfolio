import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Nagarpalika - Digital Municipal Services Platform',
      description: 'A digital platform to manage municipal services like application submission, tracking, and updates. Includes user authentication and role-based dashboards for Citizen, CMO, Nodal Officer, and Commissioner, with real-time notifications. Role: Full-stack Developer',
      image: null,
      tags: ['featured', 'fullstack'],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Learnify - Online Learning Platform',
      description: 'An online learning platform for students, instructors, and admins. Role: Full-stack Developer',
      image: null,
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
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work. Each project is a unique piece of development that solves a specific problem.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {['all', 'featured', 'fullstack', 'frontend'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md transition-colors duration-300 ${
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                    <div className="h-48 bg-gray-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <span className="text-white font-medium">Project Image</span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-[#1a1a1a] to-[#252525] flex items-center justify-center">
                      <FiFolder className="text-primary text-6xl opacity-50" />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="flex gap-3">
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
                    <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
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
    </motion.div>
  );
};

export default Projects;