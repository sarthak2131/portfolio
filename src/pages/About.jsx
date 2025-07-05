import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiUser, FiCode, FiBook, FiAward } from 'react-icons/fi';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const stats = [
    { icon: <FiCode />, value: '3', label: 'Major Projects' },
    { icon: <FiAward />, value: '3', label: 'Achievements' },
    { icon: <FiUser />, value: '1', label: 'Certification' },
    { icon: <FiBook />, value: '7.21', label: 'Current CGPA' },
  ];

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
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div>
              <motion.h1
                className="text-3xl md:text-4xl font-bold mb-6 text-center"
                variants={itemVariants}
              >
                About Me
              </motion.h1>
              <motion.p
                className="text-gray-400 mb-4 text-center"
                variants={itemVariants}
              >
                Hello! I'm Sarthak Baderiya, currently pursuing Integrated MCA at Acropolis Institute of Technology and Research, Indore. I am passionate about full-stack web development and have hands-on experience with the MERN stack and modern web technologies.
              </motion.p>
              <motion.p
                className="text-gray-400 mb-4 text-center"
                variants={itemVariants}
              >
                My academic journey includes a Senior Secondary School Certificate (10+2) and High School Certificate (10th) from the Madhya Pradesh Board of Secondary Education, both with 76.6%. My current CGPA is 7.21.
              </motion.p>
              <motion.p
                className="text-gray-400 mb-6 text-center"
                variants={itemVariants}
              >
                I am skilled in C, C++, JavaScript, React.js, Node.js, Express, MongoDB, Tailwind CSS, Git, GitHub, Netlify, Postman, and Visual Studio Code. I am always eager to learn new technologies and contribute to impactful projects.
              </motion.p>
              <motion.div className="text-center" variants={itemVariants}>
                <motion.a
                  href="#"
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  Download Resume <FiDownload />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary text-3xl mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Education Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Education</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FiCode className="text-primary" /> IT Skills
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'Languages & Frameworks', value: 'C, C++, JavaScript, React.js, Node.js, Express, MongoDB, Tailwind CSS' },
                  { name: 'Version Control & Deployment', value: 'Git, GitHub, Netlify' },
                  { name: 'API Testing & Tools', value: 'Postman, Visual Studio Code' },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-right">{skill.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FiBook className="text-primary" /> Education
              </h3>
              <div className="space-y-8">
                {[
                  {
                    degree: 'Integrated MCA',
                    institution: 'Acropolis Institute of Technology and Research, Indore',
                    year: '2021–2026',
                    description: 'Current CGPA: 7.21'
                  },
                  {
                    degree: 'Senior Secondary School Certificate (10+2)',
                    institution: 'Madhya Pradesh Board of Secondary Education',
                    year: '2021',
                    description: '76.6%'
                  },
                  {
                    degree: 'High School Certificate (10th)',
                    institution: 'Madhya Pradesh Board of Secondary Education',
                    year: '2019',
                    description: '76.6%'
                  }
                ].map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-[#1a1a1a]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p className="text-primary-light mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
                    <p className="text-gray-400">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Achievements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FiAward className="text-primary" /> Certifications
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>MERN Fullstack Development Certification (React.js Intermediate)</span>
                    <span className="text-right">CodeBetter</span>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FiAward className="text-primary" /> Achievements
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Winner of Web Development 101 Workshop</span>
                    <span className="text-right">Techotsav, 2025</span>
                  </div>
                  <p className="text-gray-400">Learned web development skills by winning the Web Development 101 workshop at Techotsav.</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Git Collab Participant</span>
                    <span className="text-right">Techotsav, 2025</span>
                  </div>
                  <p className="text-gray-400">Participated in the Git Collab event, gaining proficiency in Git and GitHub.</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Hall Booking Software Development (Team Contribution)</span>
                    <span className="text-right">Acropolis Institute of Technology and Research</span>
                  </div>
                  <p className="text-gray-400">Contributed as a team member in the Hall Booking Software project for the college and received appreciation.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default About;