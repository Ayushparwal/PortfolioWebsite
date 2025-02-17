import React, { useState } from "react";
import { motion } from "framer-motion";
import { RGBName } from "../components/RGBName";

import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";  
import { SiKaggle } from "react-icons/si";
import { SiLangchain, SiPandas, SiStreamlit, SiPytorch, SiTensorflow, SiScikitlearn, SiKeras,  
         SiNumpy, SiOpencv, SiFastapi, SiFlask, SiHuggingface,  
         SiOpenai, SiSpacy, SiJupyter, SiMlflow} from "react-icons/si";  
import { Sparkle, Terminal } from "lucide-react";


export const Home = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techStack = [
    { name: "Python", icon: FaPython },
    { name: "LangChain", icon: SiLangchain },
    { name: "Pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
    { name: "OpenCV", icon: SiOpencv },
    { name: "Scikit-Learn", icon: SiScikitlearn },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "Keras", icon: SiKeras },
    { name: "Transformers", icon: SiHuggingface },
    { name: "SpaCy", icon: SiSpacy },
    { name: "Hugging Face", icon: SiHuggingface },
    { name: "OpenAI API", icon: SiOpenai },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Flask", icon: SiFlask },
    { name: "Jupyter", icon: SiJupyter },

    { name: "Streamlit", icon: SiStreamlit },
    { name: "Kaggle", icon: SiKaggle },
    { name: "Github", icon: FaGithub },
    { name: "MLflow", icon: SiMlflow },
];


  return (
    <motion.div
      className="min-h-screen md:min-h-[120vh] flex flex-col items-center justify-center p-8 scroll-smooth overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Title Section */}
      <motion.div
        className="flex items-center gap-2 text-xl text-purple-400 mb-6 mt-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Terminal className="w-6 h-6" />
        <span>AI Developer</span>
        <Sparkle className="w-6 h-6" />
      </motion.div>

      <RGBName name="Ayush Parwal" />

      <motion.p
        className="mt-8 text-xl text-gray-400 max-w-2xl text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Transforming data into intelligent solutions with the power of Machine Learning and AI-driven innovation.🚀
      </motion.p>

      {/* Buttons */}
      <motion.div
  className="mt-12 flex gap-6"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.6 }}
>

</motion.div>


      {/* Tech Stack */}
      <motion.div
        className="mt-16 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-center mb-8 text-gradient">
          Tech Stack
        </h3>
        <motion.div
          className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
          whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.1)" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-50 pointer-events-none" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 relative">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center gap-2 group"
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
              >
                <tech.icon
                  className={`w-8 h-8 transition-all duration-300 ${
                    hoveredTech === null || hoveredTech === tech.name
                      ? "text-purple-400 scale-110"
                      : "text-gray-500 scale-90 opacity-50"
                  }`}
                />
                <span
                  className={`text-sm transition-all duration-300 ${
                    hoveredTech === null || hoveredTech === tech.name
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
