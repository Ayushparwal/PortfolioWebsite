import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { FaKaggle } from "react-icons/fa";
import { SiHuggingface, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Ayushparwal' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-parwal-797a79255/' },
    { icon: FaKaggle, label: 'Kaggle', href: "https://www.kaggle.com/ayushparwal" },
    { icon: SiHuggingface, label: 'HuggingFace', href: "https://huggingface.co/ayushparwal2004" },
    { icon: SiLeetcode, label: 'Leetcode', href: "https://leetcode.com/u/ayushparwal22/" },
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
        Get in Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-gray-400 mb-8">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50"
              >
                <link.icon className="w-6 h-6" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-400">
        <p>
          You can message me at{' '}
          <a href="mailto:ayushparwal777@gmail.com" className="text-purple-500 hover:text-white">
            ayushparwal777@gmail.com
          </a>{' '}
          for any query.
        </p>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </motion.div>
  );
};
