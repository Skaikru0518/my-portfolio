'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import heroBackground from '@/components/assets/hero-background.jpg';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function update() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    update();

    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return size;
}

export default function Hero() {
  const { width, height } = useWindowSize();
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(59, 130, 246, 0.1) 100%), url(${heroBackground.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      id="home"
    >
      {/* animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * width,
              y: Math.random() * height,
            }}
            animate={{
              x: Math.random() * width,
              y: Math.random() * height,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block dark:text-foreground light:text-white/80 mb-2">
                Hi, I'm
              </span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Peter Dobi
              </span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl dark:text-foreground/80 light:text-white/60 font-light">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="block"
              >
                Full-Stack Developer
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="block text-primary/90"
              >
                Building digital experiences that matter
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-lg md:text-xl dark:text-foreground/70 light:text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about creating scalable web applications with modern
            technologies. Specializing in React, Next.js, Node.js, Nest.js and
            Mysql
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToProjects}
              size={'lg'}
              className="group bg-primary hover:bg-primary/90 hover:text-white text-primary-foreground px-8 py-6 text-lg font-medium smoot-transition glow-effect hover:cursor-pointer"
            >
              View my work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 smooth-transition" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant={'outline'}
              size={'lg'}
              className="group border-primary/50 dark:text-primary light:text-white/80 hover:bg-primary hover:text-white px-8 py-6 text-lg font-medium smooth-transition hover:cursor-pointer"
            >
              Get in touch
              <Mail className="mr-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center dark:text-foreground/50 light:text-white/60"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
