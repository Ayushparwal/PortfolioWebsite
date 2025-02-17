import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Speech Emotion Detection",
      description: "This project analyzes human speech to detect emotions such as happiness, sadness, anger, and neutrality using advanced Natural Language Processing (NLP) and audio feature extraction techniques. By leveraging MFCC (Mel-Frequency Cepstral Coefficients) for speech signal processing and machine learning models built with Python, the system can classify emotions in real-time or from recorded audio inputs. This is useful for sentiment analysis, call center monitoring, mental health assessment, and interactive AI applications.",
      tags: ["Python", "NLP", "MFCC", "Speech Recognition", "Deep Learning"],
      image: "./pexels-thirdman-8924333.jpg"
    },
    {
      title: "Smoke Prediction",
      description: "This project utilizes machine learning models to predict smoke levels based on environmental factors such as temperature, humidity, wind speed, various health factors and air quality metrics. By leveraging advanced algorithms like XGBoost, the system can detect potential fire hazards and assess air pollution levels in real-time. Built with Streamlit for an interactive UI, the model provides accurate predictions, making it useful for environmental monitoring, disaster prevention, and industrial safety applications.",
      tags: ["Machine Learning", "XGBoost", "Streamlit", "Air Quality", "Environmental Monitoring"],
      image: "https://www.pexels.com/photo/air-pollution-1151776/"
    },
    {
      title: "MazeSolver",
      description: "This project implements a pathfinding algorithm to navigate mazes efficiently. Using the Hill Climbing algorithm, it iteratively searches for the optimal path by evaluating neighboring moves based on heuristic values. Built with Python and PyTorch, the solver intelligently explores the maze to find a better path while avoiding local optima. It can be applied to robotics, AI-driven navigation, and game development.",
      tags: ["Python", "PyTorch", "Hill Climbing", "Pathfinding", "AI", "Tkinter"],
      image: "https://www.pexels.com/photo/gray-concrete-stairs-1014198/"
    },
    {
      title: "Plant Disease Classification",
      description: "This project leverages deep learning and pre-trained models to classify plant diseases from leaf images. By analyzing visual patterns, the model can identify diseases early, helping farmers and agricultural experts take preventive actions. Built using Python, Streamlit for an interactive UI, and LangChain for enhanced retrieval-based insights, the system ensures accurate and real-time classification. The solution can be deployed on the cloud for scalability, making it useful for smart agriculture applications.",
      tags: ["Deep Learning", "Pre-trained Models", "LangChain", "Streamlit", "Python", "Agriculture AI"],
      image: "https://www.pexels.com/photo/photo-of-leaf-under-magnification-1467784/"
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
            <img 
              src={`${project.image}?auto=format&fit=crop&w=800&q=80`}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
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
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                  Code
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
