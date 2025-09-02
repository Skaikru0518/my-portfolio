'use client';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Code2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { skills } from './assets/skillset';
import { stats } from './assets/stats';
import { career } from './assets/career';
import { Badge } from './ui/badge';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <User className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold leading-relaxed">
              About Me
            </h2>
          </div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A closer look at the developer behind the projects
          </p>
        </motion.div>

        {/* Left column / Profile card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <Avatar className="h-40 w-40 border-4 border-primary/20 shadow-lg">
                <AvatarImage src={'/me.jpg'} alt="Dobi Peter" />
                <AvatarFallback className="text-2xl font-bold bg-primary/20 text-primary">
                  DP
                </AvatarFallback>
              </Avatar>

              <div className="text-center sm:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Peter Dobi
                </h3>
                <p className="text-primary text-lg font-medium mb-4">
                  Full-Stack Developer
                </p>

                {/* Quick facts */}
                <div className="space-y-2 text-foreground/70">
                  <div className="flex items-center justify-center sm:justify-start">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>Hungary</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>Available for hiring</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start">
                    <Code2 className="h-4 w-4 mr-2 text-primary" />
                    <span>Driven by curiosity and creativity</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About text */}
            <div className="text-foreground/80 leading-relaxed space-y-4">
              <p>
                I&apos;m Peter, a motivated full-stack developer with 1.5 years
                of daily professional experience. I focus on building modern,
                scalable web and desktop applications with clean, user-friendly
                interfaces and robust back-end systems.
              </p>
              <p>
                I began coding out of curiosity, fascinated by how websites and
                applications work behind the scenes. Over time, this passion
                developed into a career where I combine problem-solving skills
                with creativity to deliver practical and impactful solutions.
              </p>
              <p>
                Beyond coding, I enjoy exploring new technologies, contributing
                to open-source projects, and continuously challenging myself to
                grow as a developer. Outside of work, I like reading,
                discovering new ideas, and relaxing with a good coffee.
              </p>
            </div>
            {/* numbers */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6">
                By the numbers
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center bg-card/50 rounded-lg p-6 border border-border/50 navy-shadow hover:scale-105 hover:shadow-lg hover:shadow-primary/20 smooth-transition"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground/70">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column left empty for now (skills, stats, etc.) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Skills & Expertise
              </h4>

              {/* skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge className="bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 smooth-transition ">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* carreer */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6">
                Education
              </h4>
              <div className="space-y-2">
                {career.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="bg-card/50 border border-border/50 rounded-lg p-4 navy-shadow hover:scale-[1.02] smooth-transition">
                      <span className="text-sm text-primary font-semibold">
                        {item.year}
                      </span>
                      <h5 className="text-lg font-bold text-foreground/70 mt-1">
                        {item.title}
                      </h5>
                      <p className="text-sm text-foreground/70">{item.place}</p>
                      <p className="mt-2 text-foreground/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
