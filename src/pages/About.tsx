import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Cloud, Code, Users, Settings, GitBranch } from 'lucide-react';  

export const About = () => {
  const skills = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Expertise in developing and training machine learning models with focus in NLP and Autoregressive Models'
    },
    {
      icon: Cpu,
      title: 'AI Model Optimization',
      description: 'Specialized in optimizing and fine-tuning large language models (LLMs) for domain-specific tasks, leveraging expertise from real-world applications in NLP and deep learning.'
    },
    {
      icon: Database,
      title: 'Minimal Backend',
      description: 'Connecting frontend applications with backend using Python frameworks like FastAPI, Django, and Flask for hosting AI models and building scalable APIs.'
    },
    {
      icon: Cloud,  
      title: 'Cloud Computing',
      description: 'Utilizing cloud platforms like AWS, GCP, and Azure for scalable and distributed machine learning model deployment and management.'
    },
    {
      icon: Code,  
      title: 'Full Stack Development',
      description: 'Experience in building end-to-end applications with a focus on frontend development using React and backend development with Python frameworks.'
    },
    {
      icon: Users, 
      title: 'Collaborative Projects',
      description: 'Strong experience in working with cross-functional teams to deliver machine learning solutions and AI-driven products in an agile environment.'
    },
    {
      icon: Settings,  
      title: 'Model Deployment & Maintenance',
      description: 'Managing lifecycle of deployed AI models, ensuring continuous training and integration with cloud and on-premise systems.'
    },
    {
      icon: GitBranch,  
      title: 'Version Control & CI/CD',
      description: 'Proficient with Git, GitHub, and implementing CI/CD pipelines for smooth deployment of machine learning models and applications.'
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
        About Me
      </motion.h2>

      <motion.p 
        className="text-xl text-gray-400 mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I'm a passionate AI & ML developer focused on creating innovative solutions that bridge the gap between cutting-edge AI technology and real-world applications. With expertise in both AI development and Model Building, I bring a unique perspective to every project in Data Science.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <skill.icon className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
