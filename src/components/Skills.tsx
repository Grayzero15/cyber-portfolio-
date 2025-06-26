import React from 'react';
import { Shield, Lock, Code, Server, Eye, AlertTriangle, Database, Network } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Pentesting & Red Team',
      icon: Eye,
      skills: ['Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'Kali Linux', 'Social Engineering'],
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Security Architecture',
      icon: Shield,
      skills: ['Zero Trust', 'SIEM/SOAR', 'IAM', 'Network Security', 'Cloud Security', 'Risk Assessment'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Development & Automation',
      icon: Code,
      skills: ['Python', 'JavaScript', 'PowerShell', 'Bash', 'Docker', 'CI/CD Security'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Incident Response',
      icon: AlertTriangle,
      skills: ['Digital Forensics', 'Malware Analysis', 'Threat Hunting', 'DFIR', 'Memory Analysis', 'Log Analysis'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Infrastructure Security',
      icon: Server,
      skills: ['AWS Security', 'Azure Security', 'Kubernetes', 'Infrastructure as Code', 'DevSecOps', 'Compliance'],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Cryptography & Privacy',
      icon: Lock,
      skills: ['PKI', 'Encryption', 'Digital Signatures', 'Blockchain Security', 'Privacy Engineering', 'GDPR'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Core Competencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cybersecurity expertise across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 hover:cyber-glow transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-sm bg-white/50 rounded-lg px-3 py-2 text-gray-700 font-medium hover:bg-blue-100/50 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;