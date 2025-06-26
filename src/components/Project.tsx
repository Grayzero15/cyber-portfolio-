import React from 'react';
import { ExternalLink, Github, Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Enterprise Security Assessment Platform',
      description: 'Automated vulnerability scanning and reporting system for enterprise networks. Built with Python and React, featuring real-time threat intelligence integration.',
      tags: ['Python', 'React', 'PostgreSQL', 'Docker', 'NMAP'],
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      link: '#',
      github: '#',
    },
    {
      title: 'Threat Intelligence Dashboard',
      description: 'Real-time threat monitoring and analysis platform that aggregates data from multiple sources to provide actionable security insights.',
      tags: ['TypeScript', 'Node.js', 'MongoDB', 'D3.js', 'WebSocket'],
      icon: Eye,
      color: 'from-purple-500 to-indigo-500',
      link: '#',
      github: '#',
    },
    {
      title: 'Incident Response Automation',
      description: 'SOAR platform that automates incident response workflows, reducing response time from hours to minutes through intelligent playbooks.',
      tags: ['Python', 'Flask', 'Redis', 'Celery', 'REST API'],
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500',
      link: '#',
      github: '#',
    },
    {
      title: 'Secure Code Review Tool',
      description: 'Static analysis tool for identifying security vulnerabilities in source code with IDE integrations and CI/CD pipeline support.',
      tags: ['Go', 'AST', 'Docker', 'Jenkins', 'SAST'],
      icon: Lock,
      color: 'from-green-500 to-teal-500',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Security solutions and tools that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 hover:cyber-glow transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="flex items-center text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;