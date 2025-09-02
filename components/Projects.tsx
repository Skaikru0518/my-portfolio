'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { project_desc } from './assets/project_desc';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Folder className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured projects
            </h2>
          </div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills and passion for
            development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {project_desc.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card border-border navy-shadow hover:shadow-glow smooth-transition overflow-hidden">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary smooth-transition">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={'outline'}
                        className="text-xs border-border/50 text-foreground/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant={'outline'}
                      size={'sm'}
                      className="flex-1 border-primary/50 text-primary hover:bg-primary dark:hover:text-white/70 light:hover:text-black smooth-transition"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferer"
                        className="flex items-center justify-center"
                      >
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                    <Button
                      asChild
                      size={'sm'}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground dark:hover:text-white/70 light:hover:text-black smooth-transition"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
