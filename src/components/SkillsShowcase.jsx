import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, 
  FaGitAlt, FaNpm, FaDatabase
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiGithub, SiNetlify
} from 'react-icons/si';
import { 
  SiC, SiCplusplus, SiPostman
} from 'react-icons/si';

const SkillsShowcase = () => {
  const skills = [
    { name: 'C', icon: <SiC />, color: '#A8B9CC' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
    { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'VS Code', icon: <span className="text-4xl font-bold">VS</span>, color: '#007ACC' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'npm', icon: <FaNpm />, color: '#CB3837' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <div 
            className="text-4xl mb-2 p-4 bg-[#1a1a1a] rounded-lg hover:bg-[#252525] transition-colors duration-300"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </div>
          <span className="text-sm text-gray-400">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsShowcase;