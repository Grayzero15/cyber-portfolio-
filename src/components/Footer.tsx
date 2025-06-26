import React from 'react';
import { Shield, Lock, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="relative">
              <Shield className="h-8 w-8 text-blue-400 animate-pulse-slow" />
              <Lock className="h-4 w-4 text-cyan-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Alex Morgan
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-300">
            <span>Built with</span>
            <span>for cybersecurity</span>
          </div>
          
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2025 Alex Morgan. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>Securing digital futures, one system at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;