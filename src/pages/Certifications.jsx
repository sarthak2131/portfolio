import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiDownload, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'MERN Fullstack Development Certification (React.js Intermediate)',
      issuer: 'CodeBetter',
      date: '2025',
      description: 'Comprehensive certification covering React.js, Node.js, Express.js, and MongoDB integration for full-stack development.',
      image: '/certificate-placeholder.jpg', // You can replace with actual certificate image
      downloadUrl: '#',
      verifyUrl: '#',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Full-Stack Development']
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
            <h1 className="text-4xl font-bold mb-4">Certifications</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my skills and expertise in web development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Certificate Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <FiAward className="text-primary text-6xl mx-auto mb-4" />
                      <p className="text-gray-400">Certificate Image</p>
                      <p className="text-sm text-gray-500 mt-2">Click to view full certificate</p>
                    </div>
                  </div>
                  {/* Overlay with action buttons */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/80 transition-colors">
                      <FiDownload size={16} />
                      Download
                    </button>
                    <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                      <FiExternalLink size={16} />
                      Verify
                    </button>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-primary-light mb-1">{cert.issuer}</p>
                      <p className="text-sm text-gray-400">{cert.date}</p>
                    </div>
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <FiAward className="text-primary text-xl" />
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{cert.description}</p>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Skills Covered:</h4>
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
                  <div className="flex gap-3">
                    <a
                      href={cert.downloadUrl}
                      className="btn btn-primary flex items-center gap-2 text-sm"
                    >
                      <FiDownload size={16} />
                      Download Certificate
                    </a>
                    <a
                      href={cert.verifyUrl}
                      className="btn btn-outline flex items-center gap-2 text-sm"
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
            className="mt-16 bg-[#0a0a0a] rounded-lg p-8"
          >
            <div className="text-center">
              <FiAward className="text-primary text-4xl mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Why Certifications Matter</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Certifications validate my technical skills and demonstrate my commitment to continuous learning. 
                They provide industry-recognized proof of my expertise in modern web development technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Certifications; 