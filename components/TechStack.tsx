'use client';
import { motion } from 'framer-motion';
import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { Code } from 'lucide-react';

const technologies = [
  // { name: 'React', icon: SiReact, color: '#61DBFB' },
  { name: 'Vite', icon: SiVite, color_dark: '#F0DB4F', color_light: '#FFFFF' },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color_dark: '#FFFFFF',
    color_light: '#6b06de',
  },
  {
    name: 'Tailwind',
    icon: SiTailwindcss,
    color_dark: '#38BDF8',
    color_light: '#FFFFF',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color_dark: '#68A063',
    color_light: '#FFFFF',
  },
  {
    name: 'Express',
    icon: SiExpress,
    color_dark: '#FFFFFF',
    color_light: '#FFFFF',
  },
  {
    name: 'NestJS',
    icon: SiNestjs,
    color_dark: '#E0234E',
    color_light: '#FFFFF',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color_dark: '#3178C6',
    color_light: '#FFFFF',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    color_dark: '#4479A1',
    color_light: '#FFFFF',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color_dark: '#47A248',
    color_light: '#FFFFF',
  },
  {
    name: '.NET C#',
    icon: TbBrandCSharp,
    color_dark: '#FFFFFF',
    color_light: '#000000',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Code className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tech Stack
            </h2>
          </div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Technologies I use to build robust and scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-6"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group"
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-card border border-border rounded-xl p-6 text-center navy-shadow hover:shadow-glow smooth-transition">
                <div className="flex justify-center mb-4">
                  <tech.icon
                    className={`h-12 w-12 group-hover:scale-110 smooth-transition dark:${tech.color_dark} light:${tech.color_light}`}
                  />
                </div>
                <h3 className="text-sm font-medium text-foreground/90 group-hover:text-primary smooth-transition">
                  {tech.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-foreground/60 italic">
            Always learning new technologies...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
