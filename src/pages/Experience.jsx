import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Acropolis Institute of Technology and Research, Indore',
      position: 'Integrated MCA Student',
      period: '2021 - 2026',
      location: 'Indore, Madhya Pradesh',
      description: [
        'Currently pursuing Integrated MCA with a CGPA of 7.21',
        'Specialized in full-stack web development using MERN stack',
        'Active participation in college technical events and workshops',
        'Contributed to team projects and received appreciation for Hall Booking Software',
        'Developed strong foundation in C, C++, JavaScript, React.js, Node.js, Express, MongoDB'
      ]
    },
    {
      company: 'Techotsav 2025',
      position: 'Web Development Workshop Winner',
      period: '2025',
      location: 'College Technical Event',
      description: [
        'Won the Web Development 101 Workshop at Techotsav',
        'Learned advanced web development skills and best practices',
        'Participated in Git Collab event gaining proficiency in Git and GitHub',
        'Enhanced practical knowledge of modern web technologies',
        'Demonstrated strong problem-solving and technical skills'
      ]
    },
    {
      company: 'CodeBetter',
      position: 'MERN Fullstack Development Certification',
      period: '2025',
      location: 'Online Certification',
      description: [
        'Completed MERN Fullstack Development Certification (React.js Intermediate)',
        'Mastered React.js, Node.js, Express.js, and MongoDB integration',
        'Developed comprehensive understanding of full-stack development',
        'Gained hands-on experience with modern web development tools',
        'Acquired skills in building scalable web applications'
      ]
    }
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Academic & Project Experience</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My academic journey and project experiences, showcasing my growth as a developer and my achievements in various technical events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
            {/* Tabs */}
            <div className="lg:col-span-3">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 mb-6 lg:mb-0 pb-2 lg:pb-0">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`whitespace-nowrap px-4 py-3 rounded-md text-left transition-colors duration-300 ${
                      activeTab === index
                        ? 'bg-primary text-white'
                        : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#252525]'
                    }`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1a1a1a] rounded-lg p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold mb-1">
                  {experiences[activeTab].position}
                </h2>
                <h3 className="text-primary-light text-lg mb-4">
                  {experiences[activeTab].company}
                </h3>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <FiCalendar />
                    <span>{experiences[activeTab].period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin />
                    <span>{experiences[activeTab].location}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {experiences[activeTab].description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Timeline</h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:translate-x-[-0.5px]"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? 'left-0 md:-left-3' : 'left-0 md:-left-3'
                } w-6 h-6 bg-primary rounded-full z-10 transform md:translate-x(${index % 2 === 0 ? '0' : '0'})`}></div>
                
                {/* Content Card */}
                <div className="bg-[#1a1a1a] p-6 rounded-lg ml-8 md:ml-0">
                  <div className="flex items-center gap-2 mb-2">
                    <FiAward className="text-primary" />
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                  </div>
                  <p className="text-primary-light mb-2">{exp.position}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <FiCalendar />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-400">{exp.description[0]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Experience;