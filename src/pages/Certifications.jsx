import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiDownload, FiExternalLink } from 'react-icons/fi';
import codeBetterCert from '../assets/certificates/codeBetter.jpg';
import hallbookCert from '../assets/certificates/hallbookweb.jpg';
import web101Cert from '../assets/certificates/web101.jpg';
import gitcollabCert from '../assets/certificates/gitcollab.jpg';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'MERN Fullstack Development Certification (React.js Intermediate)',
      issuer: 'CodeBetter',
      date: '2025',
      description: 'Comprehensive certification covering React.js, Node.js, Express.js, and MongoDB integration for full-stack development.',
      image: codeBetterCert,
      downloadUrl: '#',
      verifyUrl: '#',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Full-Stack Development']
    },
    {
      id: 2,
      title: 'Online Hall Booking System Development',
      issuer: 'Acropolis Group of Institutions',
      date: '2023',
      description: 'Certificate of Appreciation awarded for team contribution in developing an online hall booking system to streamline hall management within the institution.',
      image: hallbookCert,
      downloadUrl: '#',
      verifyUrl: '#',
      skills: [
        'Web Development',
        "React",
        "Javascript"
      ]
    },
    {
      id: 3,
      title: 'Web Dev 101 Workshop Organization',
      issuer: 'Acropolis Institute of Technology & Research (IT & ECE Dept)',
      date: 'May 13–16, 2023',
      description: 'Organized and participated in the Web Dev 101 workshop, gaining hands-on experience with HTML, CSS, JavaScript, and Git/GitHub.',
      image: web101Cert,
      downloadUrl: '#',
      verifyUrl: '#',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Git',
        'GitHub',
        'Web Development Fundamentals'
      ]
    },
    {
      id: 4,
      title: 'Git & GitHub Collaboration Session',
      issuer: 'Acropolis Institute of Technology & Research (IT & ECE Dept)',
      date: 'May 8–9, 2023',
      description: 'Participated in the Web Dev 101 workshop under the IT & ECE Department and learned GitHub.',
      image: gitcollabCert,
      downloadUrl: '#',
      verifyUrl: '#',
      skills: [
        'GitHub Basics',
        'Version Control with GitHub',
        'Collaborative Coding using GitHub',
        'Pull Requests & Code Review on GitHub'
      ]
      
    }
  ];

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

  const [modalImage, setModalImage] = useState(null);

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
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">Certifications</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Professional certifications and achievements that validate my skills and expertise in web development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Certificate Image */}
                <div className="relative h-40 sm:h-64 bg-gradient-to-br from-primary/20 to-primary/10">
                  {cert.image ? (
                    <a href={cert.image} target="_blank" rel="noopener noreferrer">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="object-contain w-full h-40 sm:h-64 mx-auto rounded-lg shadow-lg border border-gray-800 bg-black/30 max-w-full"
                      />
                    </a>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <FiAward className="text-primary text-6xl mx-auto mb-4" />
                        <p className="text-gray-400">Certificate Image</p>
                        <p className="text-sm text-gray-500 mt-2">No image available</p>
                      </div>
                    </div>
                  )}
                  {/* Overlay with action buttons */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                    <button
                      className="bg-primary text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/80 transition-colors text-xs sm:text-sm"
                      onClick={() => setModalImage(cert.image)}
                    >
                      <FiAward size={16} />
                      Preview
                    </button>
                    <button className="bg-white text-black px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors text-xs sm:text-sm">
                      <FiExternalLink size={16} />
                      Verify
                    </button>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:justify-between mb-3 sm:mb-4 gap-2 sm:gap-0">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1">{cert.title}</h3>
                      <p className="text-primary-light mb-1 text-sm sm:text-base">{cert.issuer}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{cert.date}</p>
                    </div>
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <FiAward className="text-primary text-xl" />
                    </div>
                  </div>

                  <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-base">{cert.description}</p>

                  {/* Skills */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs bg-[#252525] text-gray-300 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href={cert.downloadUrl}
                      className="btn btn-primary flex items-center gap-2 text-xs sm:text-sm"
                    >
                      <FiDownload size={16} />
                      Download Certificate
                    </a>
                    <a
                      href={cert.verifyUrl}
                      className="btn btn-outline flex items-center gap-2 text-xs sm:text-sm"
                    >
                      <FiExternalLink size={16} />
                      Verify Online
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-16 bg-[#0a0a0a] rounded-lg p-4 sm:p-8"
          >
            <div className="text-center">
              <FiAward className="text-primary text-3xl sm:text-4xl mx-auto mb-2 sm:mb-4" />
              <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">Why Certifications Matter</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-base">
                Certifications validate my technical skills and demonstrate my commitment to continuous learning. 
                They provide industry-recognized proof of my expertise in modern web development technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for big image */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-2 sm:px-0" onClick={() => setModalImage(null)}>
          <div className="relative max-w-3xl w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img src={modalImage} alt="Certificate Large" className="max-h-[70vh] sm:max-h-[80vh] max-w-full rounded-lg shadow-2xl" />
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

export default Certifications; 