import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import SkillsShowcase from '../components/SkillsShowcase';
import learnifyImg from '../assets/certificates/learnify.png';
import enagarPalikaImg from '../assets/certificates/enagarPalika.png';
import hallbookwebImg from '../assets/certificates/hallbookweb.jpg';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-8 sm:pb-12 md:pb-20">
        <div className="container mx-auto px-2 sm:px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <motion.p
                className="text-primary-light mb-2 sm:mb-4 code-font text-base sm:text-lg"
                variants={itemVariants}
              >
                Hello, my name is
              </motion.p>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4"
                variants={itemVariants}
              >
                Sarthak Baderiya
              </motion.h1>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-400 mb-4 sm:mb-6"
                variants={itemVariants}
              >
                I build things for the web.
              </motion.h2>
              <motion.p
                className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg"
                variants={itemVariants}
              >
                I'm a <span className="highlight">full-stack developer</span> specializing in building exceptional digital experiences. Currently pursuing Integrated MCA at Acropolis Institute, I'm focused on building accessible, human-centered products using the MERN stack.
              </motion.p>
              <motion.div className="flex flex-wrap gap-3 sm:gap-4" variants={itemVariants}>
                <Link to="/projects" className="btn btn-primary flex items-center gap-2 text-sm sm:text-base">
                  View My Work <FiArrowRight />
                </Link>
                <a href="#" className="btn btn-outline flex items-center gap-2 text-sm sm:text-base">
                  Download CV <FiDownload />
                </a>
              </motion.div>
              <motion.div
                className="flex gap-4 sm:gap-6 mt-6 sm:mt-8"
                variants={itemVariants}
              >
                <a
                  href="https://github.com/sarthak-baderiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/sarthak2131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
              </motion.div>
            </div>
            <motion.div
              className="relative mt-8 md:mt-0"
              variants={itemVariants}
            >
              <div className="relative z-10 bg-dark-light p-3 sm:p-4 rounded-lg border border-gray-800 shadow-xl">
                <div className="flex items-center gap-2 mb-2 sm:mb-4 border-b border-gray-800 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-400 text-xs sm:text-sm ml-2 code-font">developer.js</span>
                </div>
                <pre className="text-xs sm:text-sm code-font text-gray-300 overflow-x-auto">
                  <code>
{`const developer = {
  name: 'Sarthak Baderiya',
  title: 'Full-Stack Developer',
  education: 'Integrated MCA (CGPA: 7.21)',
  skills: ['React.js', 'Node.js', 'MongoDB', 'Express'],
  passion: 'Building beautiful web experiences',
  
  contact() {
    return 'Let\\'s build something amazing together!';
  }
};

// Currently working on new projects...
developer.createImpact();`}
                  </code>
                </pre>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-lg -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">My Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              These are the technologies I work with to build modern, responsive, and scalable web applications.
            </p>
          </motion.div>
          <SkillsShowcase />
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 sm:mb-12 gap-4 md:gap-0">
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
            <Link to="/projects" className="text-primary-light hover:text-primary flex items-center gap-2 group text-sm sm:text-base">
              View All Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'E-Nagarpalika',
                description: 'Digital Municipal Services Platform with role-based dashboards and real-time notifications.',
                technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
                image: enagarPalikaImg
              },
              {
                title: 'Learnify',
                description: 'Online Learning Platform for students, instructors, and admins.',
                technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
                image: learnifyImg
              },
              {
                title: 'Hall Booking Software',
                description: 'Team contribution project for college hall management system.',
                technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
                image: hallbookwebImg
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-40 sm:h-48 bg-gray-800 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain h-full w-full max-w-full rounded-t-md"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <FiGithub size={18} />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <FiArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-[#1a1a1a] text-gray-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;