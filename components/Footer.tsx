'use client';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { contact_info } from './assets/contact-info';

export default function Foote() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
            >
              Peter Dobi
            </motion.button>
            <p className="text-foreground/60 mt-2 leading-relaxed">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'Tech Stack', 'Projects', 'About', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(
                        `#${item.toLowerCase().replace(' ', '-')}`,
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-foreground/70 hover:text-primary smooth-transition"
                  >
                    {item}
                  </button>
                ),
              )}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              {contact_info.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground smooth-transition"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm flex items-center">
              © {currentYear} Peter Dobi. Made with{' '}
              <Heart
                className="h-4 w-4 mx-1 text-red-500"
                fill="currentColor"
              />
              and lots of coffee.
            </p>

            <p className="text-foreground/60 text-sm mt-4 md:mt-0">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
