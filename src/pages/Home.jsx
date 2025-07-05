import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import SkillsShowcase from '../components/SkillsShowcase';

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
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <motion.p
                className="text-primary-light mb-4 code-font"
                variants={itemVariants}
              >
                Hello, my name is
              </motion.p>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4"
                variants={itemVariants}
              >
                Sarthak Baderiya
              </motion.h1>
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-gray-400 mb-6"
                variants={itemVariants}
              >
                I build things for the web.
              </motion.h2>
              <motion.p
                className="text-gray-400 text-lg mb-8 max-w-lg"
                variants={itemVariants}
              >
                I'm a <span className="highlight">full-stack developer</span> specializing in building exceptional digital experiences. Currently pursuing Integrated MCA at Acropolis Institute, I'm focused on building accessible, human-centered products using the MERN stack.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                <Link to="/projects" className="btn btn-primary flex items-center gap-2">
                  View My Work <FiArrowRight />
                </Link>
                <a href="#" className="btn btn-outline flex items-center gap-2">
                  Download CV <FiDownload />
                </a>
              </motion.div>
              <motion.div
                className="flex gap-6 mt-8"
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
              className="relative"
              variants={itemVariants}
            >
              <div className="relative z-10 bg-dark-light p-4 rounded-lg border border-gray-800 shadow-xl">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-400 text-sm ml-2 code-font">developer.js</span>
                </div>
                <pre className="text-sm code-font text-gray-300 overflow-x-auto">
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
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">My Tech Stack</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These are the technologies I work with to build modern, responsive, and scalable web applications.
            </p>
          </motion.div>
          <SkillsShowcase />
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link to="/projects" className="text-primary-light hover:text-primary flex items-center gap-2 group">
              View All Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Nagarpalika',
                description: 'Digital Municipal Services Platform with role-based dashboards and real-time notifications.',
                technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js']
              },
              {
                title: 'Learnify',
                description: 'Online Learning Platform for students, instructors, and admins.',
                technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS']
              },
              {
                title: 'Hall Booking Software',
                description: 'Team contribution project for college hall management system.',
                technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
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
                <div className="h-48 bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <span className="text-white font-medium">Project Image</span>
                  </div>
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