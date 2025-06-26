import React from 'react';
import { ArrowDown, Shield, Lock, Code, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50"
    >
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 glass-card-blue rounded-full animate-float">
          <div className="w-full h-full flex items-center justify-center">
            <Shield className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="absolute top-32 right-20 w-12 h-12 glass-card rounded-full animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full flex items-center justify-center">
            <Lock className="h-6 w-6 text-cyan-500" />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 w-20 h-20 glass-card-blue rounded-full animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full flex items-center justify-center">
            <Code className="h-10 w-10 text-blue-600" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 w-14 h-14 glass-card rounded-full animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-full h-full flex items-center justify-center">
            <Terminal className="h-7 w-7 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto cyber-glow">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              Alex Morgan
            </h1>
            <div className="text-lg md:text-xl text-gray-600 mb-6 font-medium">
              <span className="border-r-2 border-blue-500 animate-pulse pr-2">
                Cybersecurity Professional
              </span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protecting digital assets through advanced threat detection, ethical hacking, 
            and comprehensive security solutions. Specialized in penetration testing, 
            incident response, and security architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass-card-blue text-blue-700 rounded-lg font-semibold hover:bg-blue-500/20 transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-blue-600" />
      </div>
    </section>
  );
};

export default Hero;