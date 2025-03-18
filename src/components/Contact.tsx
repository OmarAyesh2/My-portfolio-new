import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center fade-in">
        <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
          Get In Touch
        </h2>
        
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to new opportunities and interesting projects.
          Feel free to reach out if you'd like to collaborate!
        </p>
        
        <div className="flex justify-center gap-8 mb-12">
          <a
            href="mailto:your.email@example.com"
            className="p-4 bg-gray-900 rounded-full hover:bg-amber-500 transition-colors duration-300 group"
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-gray-900" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-900 rounded-full hover:bg-amber-500 transition-colors duration-300 group"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-gray-900" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-900 rounded-full hover:bg-amber-500 transition-colors duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-gray-900" />
          </a>
        </div>
        
        <form className="max-w-lg mx-auto space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-gray-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-gray-300"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-gray-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;