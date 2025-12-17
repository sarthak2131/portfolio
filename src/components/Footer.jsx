import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-6 px-2 sm:px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-base sm:text-lg font-semibold text-white">Sarthak Baderiya</span>
          <span className="text-gray-400 text-xs sm:text-sm">Full-Stack Developer & Lifelong Learner</span>
        </div>
        <div className="flex gap-3 sm:gap-4 mt-4 md:mt-0 justify-center">
          <a href="https://github.com/sarthak2131" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sarthak-baderiya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-600 text-xs mt-4">
        © {currentYear} Sarthak Baderiya. Built with React & Vite.
      </div>
    </footer>
  );
};

export default Footer;