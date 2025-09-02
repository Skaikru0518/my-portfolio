'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const item of navItems) {
        const section = document.querySelector(item.href) as HTMLElement;
        if (section) {
          if (
            section.offsetTop <= scrollPos &&
            section.offsetTop + section.offsetHeight > scrollPos
          ) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  const scrollToSection = (href: string) => {
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'dark:bg-background/80 light:bg-blue-500/10 backdrop-blur-xl navy-shadow'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => {
                  // ha home-ban vagyunk → light módban fehér, különben fekete
                  const isAfterHome = activeSection !== 'home';

                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`
                        px-3 py-3 text-sm font-medium smooth-transition relative group hover:cursor-pointer
                        dark:text-foreground/80
                        ${
                          isAfterHome
                            ? 'light:text-black'
                            : 'light:text-white/60'
                        }
                        hover:text-primary
                      `}
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full smooth-transition" />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Right controls */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="w-9 h-9 p-0 hover:bg-muted smooth-transition hover:cursor-pointer"
                >
                  {isDarkMode ? (
                    <Sun className="h-4 w-4 text-yellow-500" />
                  ) : (
                    <Moon className="h-4 w-4 text-primary" />
                  )}
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-9 h-9 p-0 hover:cursor-pointer"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left smooth-transition hover:cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
