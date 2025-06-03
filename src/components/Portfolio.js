"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  GithubIcon, 
  LinkedinIcon, 
  MailIcon, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react'; // Icons

import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'; // Example icons
import { DiMysql, DiLaravel, DiJavascript1, DiCss3, DiHtml5 } from 'react-icons/di';
import { SiNextdotjs, SiPhp } from 'react-icons/si';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home'); // Track active section
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
  const [showDetails, setShowDetails] = useState(false); // Toggle for "About Me" section
  const [activeSkill, setActiveSkill] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  const projects = [
    {
      title: "PickMeUp Admin",
      description: "A Capstone project built with React.js as Front end meanwhile built with a Laravel Backend",
      tags: ["React", "Tailwind CSS", "Laravel", "MySQL"],
      image: "/PickMeUpAdmin.png" // Using the title to create image path
    },
    {
      title: "PickMeUp Mobile",
      description: "A react native motor taxi ride hailing app for riders and passengers",
      tags: ["React Native", "PHP", "Laravel", "MySQL"],
      image: "/PickMeUpMobile.png"
    },
    {
      title: "Uthangs",
      description: "A store Debt Management System Application",
      tags: ["ReactNative", "PHP", "Laravel", "MySQL"],
      image: "/Uthangs.png"
    },
    {
      title: "Uthangs Website",
      description: "An older version of the store Debt Management System Application",
      tags: ["HTML", "JavaScript", "PHP", "MySQL"],
      image: "/UthangsWebsite.png"
    },
    {
      title: "Bussiness Website",
      description: "An online ordering system for Nor's Kan anan (Front End Only)",
      tags: ["HTML", "JavaScript", "CSS"],
      image: "/BussinessWebsite.png"
    },
    {
      title: "JavaScript To Do List",
      description: "A simple javascript project",
      tags: ["HTML", "JavaScript", "CSS"],
      image: "/JavaScriptToDoList.png"
    },
  ];

  // const skills = [
  //   "React", "React Native", "NextJS", "JavaScript", "HTML/CSS", "Node.js", "Laravel", "PHP", "Git", "MySQL"
  // ];

  const skills = [
    { name: "React", icon: <FaReact className="w-6 h-6 text-sky-200" />, details: "A JavaScript library for building user interfaces." },
    { name: "React Native", icon: <FaReact className="w-6 h-6 text-sky-200" />, details: "A framework for building native mobile apps using React." },
    { name: "NextJS", icon: <SiNextdotjs className="w-6 h-6 text-sky-200" />, details: "A React framework for server-side rendering and static site generation." },
    { name: "JavaScript", icon: <DiJavascript1 className="w-6 h-6 text-sky-200" />, details: "A high-level programming language used for web development." },
    { name: "HTML/CSS", icon: <DiHtml5 className="w-6 h-6 text-sky-200" />, details: "Languages for creating and styling web pages." },
    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-sky-200" />, details: "A runtime environment for executing JavaScript server-side." },
    { name: "Laravel", icon: <DiLaravel className="w-6 h-6 text-sky-200" />, details: "A PHP framework for web application development." },
    { name: "PHP", icon: <SiPhp className="w-6 h-6 text-sky-200" />, details: "A popular general-purpose scripting language for web development." },
    { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-sky-200" />, details: "A version control system for tracking changes in code." },
    { name: "MySQL", icon: <DiMysql className="w-6 h-6 text-sky-200" />, details: "A relational database management system." }
  ];

  const handleSkillClick = (skillIndex) => {
    // If the clicked skill is already active, close it; otherwise, open it.
    setActiveSkill(activeSkill === skillIndex ? null : skillIndex);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 text-sky-300 text-xl font-bold">
              My Portfolio
            </div>
            <div className="hidden md:flex space-x-4">
              <button 
                onClick={() => setActiveSection('home')} 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'home' ? 'bg-gray-700 text-sky-300' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveSection('projects')} 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'projects' ? 'bg-gray-700 text-sky-300' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveSection('skills')} 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'skills' ? 'bg-gray-700 text-sky-300' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Skills
              </button>
              {/* <button 
                onClick={() => setActiveSection('contact')} 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'contact' ? 'bg-gray-700 text-sky-300' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Contact
              </button> */}
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-300 hover:text-sky-300 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => { setActiveSection('home'); setIsMenuOpen(false); }} 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === 'home' ? 'bg-gray-700 text-sky-300' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => { setActiveSection('projects'); setIsMenuOpen(false); }} 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === 'projects' ? 'bg-gray-700 text-sky-300' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => { setActiveSection('skills'); setIsMenuOpen(false); }} 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === 'skills' ? 'bg-gray-700 text-sky-300' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Skills
              </button>
              {/* <button 
                onClick={() => { setActiveSection('contact'); setIsMenuOpen(false); }} 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === 'contact' ? 'bg-gray-700 text-sky-300' : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Contact
              </button> */}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
            <div className="text-center">
              <img 
                src="/prof2.jpg" 
                alt="Profile" 
                className="mx-auto rounded-full mb-8 shadow-lg border-2 border-sky-300" 
                width="150" 
                height="150"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-sky-200 mb-4">
                Mark Jundy P. Juaton
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Web Developer | Full Stack Developer
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <a 
                  href="https://github.com/Jundy25" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-sky-300"
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mark-jundy-juaton-2aa3b531b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-sky-300"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:markjundyjuaton01@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-sky-300"
                >
                  <MailIcon className="w-6 h-6" />
                </a>
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sky-300 hover:text-sky-400 transition-colors"
              >
                {showDetails ? <ChevronUp className="w-6 h-6 mx-auto" /> : <ChevronDown className="w-6 h-6 mx-auto" />}
              </button>
            </div>

            {/* Animated Details Section */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={showDetails ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden mt-4 text-gray-300 bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl"
            >
              <h2 className="text-2xl font-bold text-sky-200 mb-4">About Me</h2>
              <p>
                I am a passionate Full Stack Developer / Backend Developer with experience in database design and developing 
                web and mobile applications. I specialize in React, Node.js, Laravel Framework and database management.
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>6+ years of experience in web development</li>
                <li>Strong skills in React, React Native, and Laravel Backend</li>
                <li>Proficient in designing scalable databases and API integrations</li>
              </ul>
            </motion.div>
          </section>
        )}

        {/* Placeholder for Other Sections */}
        {activeSection === 'projects' && (
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-sky-200">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
                >
                  <div 
                    className="relative h-48 w-full cursor-pointer overflow-hidden group"
                    onClick={() => setSelectedImage(project.image)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        // e.target.src = "/api/placeholder/400/200";
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to view
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-sky-200">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-sky-900 text-sky-200 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Modal */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleBackdropClick}
                  className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                >
                  <div className="relative max-w-7xl w-full">
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 text-white hover:text-sky-300 transition-colors"
                    >
                      <X className="w-8 h-8" />
                    </button>
                    <motion.img
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.95 }}
                      src={selectedImage}
                      alt="Project Preview"
                      className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/800/600";
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}
        {activeSection === 'skills' && (
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-sky-200">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-700"
          >
            <div className="flex items-center justify-center mb-4 cursor-pointer" onClick={() => handleSkillClick(index)}>
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-sky-200">{skill.name}</h3>

            {/* Dropdown for skill details */}
            {activeSkill === index && (
              <div className="mt-4 p-4 bg-gray-700 rounded-md text-gray-300 shadow-md">
                <p>{skill.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
          </section>
        )}
        {activeSection === 'contact' && (
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-sky-200">Contact Me</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-300 focus:border-sky-300 focus:ring-sky-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-300 focus:border-sky-300 focus:ring-sky-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-300 focus:border-sky-300 focus:ring-sky-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Portfolio;
