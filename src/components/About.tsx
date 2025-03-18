import React from 'react';
import { Code, Monitor, Briefcase, Palette, Lightbulb, Zap, Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-[clamp(2rem,3.815rem,5vw)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[clamp(2rem,5vw,3.236rem)] font-bold mb-8 text-white">
            About <span className="text-amber-400">Me</span>
          </h2>

          <div className="space-y-12">
            {/* Introduction */}
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-white/80 text-lg leading-relaxed">
                As a passionate digital designer with over 8 years of experience, I specialize in creating immersive visual experiences that bridge the gap between aesthetics and functionality. My journey in design has been driven by a deep fascination with how visual elements can transform ideas into compelling digital narratives.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mt-4">
                Based in Amman, Jordan, I've had the privilege of working with clients worldwide, bringing a unique Middle Eastern perspective to global design challenges. My approach combines traditional artistic principles with cutting-edge digital techniques, creating designs that are both culturally resonant and technologically advanced.
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-2xl space-y-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                  <Code className="text-amber-400" />
                  Design Expertise
                </h3>
                <div className="space-y-4">
                  {[
                    { name: 'Motion Design', level: 95 },
                    { name: 'Visual Development', level: 92 },
                    { name: 'UI/UX Design', level: 90 },
                    { name: '3D Visualization', level: 88 }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white/90">{skill.name}</span>
                        <span className="text-amber-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl space-y-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                  <Monitor className="text-amber-400" />
                  Creative Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Photoshop',
                    'Illustrator',
                    'After Effects',
                    'Premiere Pro',
                    'Adobe XD',
                    'Light Room',
                    'Blender',
                    'CSP'
                  ].map((tool) => (
                    <div 
                      key={tool}
                      className="glass-card border-0 p-3 rounded-lg text-white/80 hover:text-amber-400 transition-colors text-sm flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <Briefcase className="text-amber-400" />
                Professional Journey
              </h3>
              <div className="space-y-8">
                {[
                  {
                    role: 'Graphic Designer',
                    company: 'Telescope Agency',
                    period: 'Jan, 2023 - Present',
                    description: 'Working as UI/UX designer and CGI artist, creating engaging digital experiences and visual content.'
                  },
                  {
                    role: 'Field Training',
                    company: 'INNOVANJI',
                    period: 'Oct, 2021 - Feb, 2022',
                    description: 'Gained hands-on experience in social media design and 3D modeling, contributing to various client projects.'
                  },
                  {
                    role: 'Freelance Graphic Designer',
                    company: 'Upwork & Freelancer.com',
                    period: 'Sep, 2019 - Present',
                    description: 'Successfully delivered diverse design projects through leading freelance platforms, building a strong client portfolio.'
                  }
                ].map((exp, index) => (
                  <div key={index} className="relative pl-6 pb-8 last:pb-0">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400" />
                    </div>
                    <h4 className="text-white font-medium">{exp.role}</h4>
                    <p className="text-amber-400/80 text-sm mb-1">{exp.company}</p>
                    <p className="text-white/60 text-sm mb-2">{exp.period}</p>
                    <p className="text-white/80">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Palette className="w-6 h-6" />,
                  title: 'Visual Development',
                  description: 'Creating compelling visual narratives through innovative design solutions.'
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'Motion Design',
                  description: 'Bringing stories to life through dynamic animation and visual effects.'
                },
                {
                  icon: <Monitor className="w-6 h-6" />,
                  title: '3D Visualization',
                  description: 'Crafting immersive 3D experiences and realistic product visualizations.'
                },
                {
                  icon: <Lightbulb className="w-6 h-6" />,
                  title: 'Creative Direction',
                  description: 'Guiding projects from concept to completion with strategic vision.'
                },
                {
                  icon: <Trophy className="w-6 h-6" />,
                  title: 'Brand Design',
                  description: 'Developing distinctive brand identities that capture audience attention.'
                },
                {
                  icon: <Code className="w-6 h-6" />,
                  title: 'Interactive Design',
                  description: 'Creating engaging user experiences across digital platforms.'
                }
              ].map((service, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                    {React.cloneElement(service.icon, { className: 'text-amber-400' })}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;