import React, { useState, useEffect, useCallback, memo } from 'react';
import { Instagram, Linkedin, Briefcase, Home, Briefcase as Works, User, Mail, Menu, X, ChevronLeft, ChevronRight, X as Close, Play, Phone, Globe, Clock } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import VideoLightbox from './components/VideoLightbox';
import About from './components/About';
import Portfolio from './components/Portfolio';

const SECTIONS = {
  HOME: 'home',
  WORKS: 'works',
  ABOUT: 'about',
  CONTACT: 'contact'
} as const;

type Section = typeof SECTIONS[keyof typeof SECTIONS];

const navigationLinks = [
  { href: '#home', icon: <Home />, label: 'Home', id: SECTIONS.HOME },
  { href: '#works', icon: <Works />, label: 'Works', id: SECTIONS.WORKS },
  { href: '#about', icon: <User />, label: 'About', id: SECTIONS.ABOUT },
  { href: '#contact', icon: <Mail />, label: 'Contact', id: SECTIONS.CONTACT }
] as const;

const socialLinks = [
  { href: 'https://www.instagram.com/omarayesh02?igsh=OHhsc2xrb2lycDhn#' target="_blank", icon: <Instagram />, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/omar-ayesh-1948ab255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank", icon: <Linkedin />, label: 'LinkedIn' },
  { href: 'https://www.upwork.com/freelancers/~01fe6efd780f08fa79' target="_blank", icon: <Briefcase />, label: 'Upwork' }
] as const;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeSection, setActiveSection] = useState<Section>(SECTIONS.HOME);

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 1024;
    setIsMobile(mobile);
    if (!mobile) setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'contact':
        return (
          <div className="w-full h-full flex flex-col overflow-y-auto">
            <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-[clamp(2rem,3.815rem,5vw)]">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-[clamp(2rem,5vw,3.236rem)] font-bold mb-8 text-white">
                  Let's <span className="text-amber-400">Connect</span>
                </h2>

                <div className="space-y-12">
                  {/* Contact Information */}
                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                    <div className="space-y-6">
                      <a 
                        href="mailto:omar@oajo.art" 
                        className="flex items-center gap-4 text-white/90 hover:text-amber-400 transition-colors group touch-manipulation"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                          <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Email</p>
                          <p className="font-medium">omar@oajo.art</p>
                        </div>
                      </a>

                      <a 
                        href="tel:+962792704673" 
                        className="flex items-center gap-4 text-white/90 hover:text-amber-400 transition-colors group touch-manipulation"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                          <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Phone</p>
                          <p className="font-medium">+962 7 9270 4673</p>
                        </div>
                      </a>

                      <a 
                        href="https://www.oajo.art" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-4 text-white/90 hover:text-amber-400 transition-colors group touch-manipulation"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                          <Globe className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Website</p>
                          <p className="font-medium">www.oajo.art</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 text-white/90">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Time Zone</p>
                          <p className="font-medium">Amman, Jordan (GMT+3)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Profiles */}
                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="text-xl font-semibold text-white mb-6">Social Profiles</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <a 
                        href="https://www.linkedin.com/in/omar-ayesh-1948ab255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="glass-card border-0 p-6 rounded-xl hover:scale-[1.02] transition-all group touch-manipulation"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400/20 mb-4">
                          <Linkedin className="w-6 h-6 text-white/90 group-hover:text-amber-400" />
                        </div>
                        <h4 className="text-white font-medium">LinkedIn</h4>
                        <p className="text-white/60 text-sm">Professional Network</p>
                      </a>
                      
                      <a 
                        href="https://www.instagram.com/omarayesh02?igsh=OHhsc2xrb2lycDhn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="glass-card border-0 p-6 rounded-xl hover:scale-[1.02] transition-all group touch-manipulation"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400/20 mb-4">
                          <Instagram className="w-6 h-6 text-white/90 group-hover:text-amber-400" />
                        </div>
                        <h4 className="text-white font-medium">Instagram</h4>
                        <p className="text-white/60 text-sm">Visual Portfolio</p>
                      </a>
                    </div>
                  </div>

                  {/* Contact Preferences */}
                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Preferences</h3>
                    <p className="text-white/80 mb-6">
                      The best way to reach me is via email. I typically respond within 24 hours during business days. For urgent matters, feel free to call during business hours.
                    </p>
                    <div className="mt-6 p-6 glass-card border-0 rounded-xl bg-white/5">
                      <h4 className="text-lg font-medium text-white mb-3">Current Location</h4>
                      <p className="text-white/80">Amman, Jordan</p>
                      <p className="text-white/60 text-sm">GMT+3 Time Zone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'works':
        return <Portfolio />;
      default:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-[clamp(2rem,3.815rem,5vw)]">
            <div className="w-full max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm">Available for freelance work</span>
              </div>
              
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] mb-6">
                <span className="text-white">Creative</span>
                <br />
                <span className="text-amber-400">Digital Designer</span>
                <br />
                <span className="text-white/80">Based in Jordan</span>
              </h1>
              
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                Transforming ideas into exceptional digital experiences through creative design and innovative solutions. Specializing in branding, web design, and motion graphics.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={() => setActiveSection('works')}
                  className="glass-button text-white hover:text-white"
                >
                  View Portfolio
                </button>
                
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="glass-button bg-amber-400/20 hover:bg-amber-400/30 text-amber-400"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 touch-manipulation active:scale-95 transition-transform"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      <nav className={`
        fixed z-40 bg-white/10 backdrop-blur-md border border-white/20
        lg:top-[4.236%] lg:bottom-[4.236%] lg:left-4 lg:w-[200px] lg:rounded-[3rem] lg:p-6 lg:flex lg:flex-col
        ${isMenuOpen ? 'inset-0' : '-left-full lg:left-4'}
        top-0 bottom-0 w-[min(280px,80vw)] p-8
        transition-all duration-300 ease-in-out
        shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.3)]
      `}>
        <div className="text-center mb-[2.618rem]">
          <div className="w-[min(5.854rem,15vw)] h-[min(5.854rem,15vw)] mx-auto flex items-center justify-center mb-4">
            <img 
              src="https://raw.githubusercontent.com/OmarAyesh2/svg/87a90a9deabf15789ade206f7e0e6e58d0ac0f29/logo.svg"
              alt="Omar Ayesh Logo"
              className="w-full h-full"
            />
          </div>
          <h2 className="text-white text-[min(1.382rem,4vw)] font-bold tracking-wide mt-4">Omar Ayesh</h2>
        </div>

        <div className="space-y-[1.236rem] flex-grow">
          {navigationLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(link.id);
                if (isMobile) setIsMenuOpen(false);
              }}
            >
              <div className="w-full flex items-center gap-[0.618rem] px-[1.236rem]">
                {React.cloneElement(link.icon, { 
                  className: 'nav-icon',
                  'aria-hidden': 'true'
                })}
                <span className="text-[min(1rem,3.5vw)] lg:text-base">{link.label}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="space-y-[0.618rem] mt-auto">
          {socialLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="social-link"
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              <div className="w-full flex items-center gap-[0.618rem] px-[1.236rem]">
                {React.cloneElement(link.icon, { 
                  className: 'social-icon',
                  'aria-hidden': 'true'
                })}
                <span className="text-[min(0.875rem,3vw)] lg:text-sm">{link.label}</span>
              </div>
            </a>
          ))}
        </div>
      </nav>

      <main className="min-h-screen w-full flex items-center justify-center lg:pl-[225px]">
        <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-6">
          <div className="glass-card w-full h-[91.528vh] lg:h-[91.528vh] rounded-[2rem] lg:rounded-[3rem] flex flex-col lg:flex-row items-center relative overflow-hidden">
            {renderContent()}
          </div>
        </div>
      </main>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden animate-fadeIn"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default App;