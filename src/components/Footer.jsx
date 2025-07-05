import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0a0a] py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">
              <span className="gradient-text">Dev</span>Portfolio
            </h3>
            <p className="text-gray-400 text-sm">Building the web, one project at a time.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FiGithub size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FiLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FiMail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} MERN Developer Portfolio. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Designed & Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;