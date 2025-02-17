import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Speech Emotion Detection",
      description: "This project analyzes human speech to detect emotions such as happiness, sadness, anger, and neutrality using advanced Natural Language Processing (NLP) and audio feature extraction techniques.",
      tags: ["Python", "NLP", "MFCC", "Speech Recognition", "Deep Learning"],
      codeLink: "https://github.com/Ayushparwal/Speech-Emotion-Detection" 
    },
    {
      title: "Smoke Prediction",
      description: "This project utilizes machine learning models to predict smoke levels based on environmental factors such as temperature, humidity, wind speed, various health factors and air quality metrics.",
      tags: ["Machine Learning", "XGBoost", "Streamlit", "Air Quality", "Environmental Monitoring"],
      codeLink: "https://github.com/Ayushparwal/Smoker-Prediction-app" 
    },
    {
      title: "MazeSolver",
      description: "This project implements a pathfinding algorithm to navigate mazes efficiently using the Hill Climbing algorithm.",
      tags: ["Python", "PyTorch", "Hill Climbing", "Pathfinding", "AI", "Tkinter"],
      codeLink: "https://github.com/Ayushparwal/MazeSolver"
    },
    {
      title: "Plant Disease Classification",
      description: "This project leverages deep learning and pre-trained models to classify plant diseases from leaf images.",
      tags: ["Deep Learning", "Pre-trained Models", "LangChain", "Streamlit", "Python", "Agriculture AI"],
      codeLink: "https://github.com/Ayushparwal/Plant-disease-Classification-using-pretrained-models"
    }
  ];

  return (
    <motion.div
      className="min-h-screen p-8 pt-16 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="text-4xl font-bold mb-8 text-gradient"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {/* Removed Image Section */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                    Code
                  </button>
                </a>
                {/* <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  Demo
                </button> */}
              </div>
              <div className="mt-2 text-sm text-gray-400">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  {project.codeLink}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
