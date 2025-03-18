import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900"></div>
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Full Stack Developer & UI/UX Designer
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Crafting beautiful, functional digital experiences with a passion for clean code and innovative solutions.
        </p>
        <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
          View My Work
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-amber-400" />
      </div>
    </section>
  );
};

export default Hero;