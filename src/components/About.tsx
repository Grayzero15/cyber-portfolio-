import React from 'react';
import { Award, BookOpen, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Certifications', value: '12+' },
    { icon: BookOpen, label: 'Years Experience', value: '8+' },
    { icon: Users, label: 'Clients Secured', value: '50+' },
    { icon: Zap, label: 'Threats Mitigated', value: '1000+' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate cybersecurity professional dedicated to building secure digital environments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                With over 8 years in cybersecurity, I've evolved from a curious developer 
                into a seasoned security architect. My journey began with ethical hacking 
                challenges and has led me to protect enterprise-level infrastructures.
              </p>
              <p>
                I specialize in penetration testing, vulnerability assessments, and incident 
                response. My approach combines technical expertise with strategic thinking 
                to deliver comprehensive security solutions.
              </p>
              <p>
                Currently certified in CISSP, CEH, OSCP, and multiple cloud security 
                frameworks. I believe in continuous learning and staying ahead of 
                evolving threat landscapes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card-blue p-6 text-center transform hover:scale-105 hover:cyber-glow transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;