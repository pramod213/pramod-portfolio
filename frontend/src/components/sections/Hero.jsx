import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown, Code, Brain, Network, FlaskConical, Bot } from 'lucide-react';
import { Container, Section, Button, Badge } from '../ui';
import { fadeUp } from '../../lib/animations';

const techStack = [
  { name: 'LangChain', icon: Network, color: 'text-primary', category: 'AI/ML' },
  { name: 'RAG Pipelines', icon: Brain, color: 'text-warning', category: 'AI/ML' },
  { name: 'Multi-Agent Systems', icon: Bot, color: 'text-secondary', category: 'AI/ML' },
  { name: 'FastAPI', icon: Code, color: 'text-success', category: 'Backend' },
  { name: 'LangGraph', icon: Network, color: 'text-primary', category: 'AI/ML' },
  { name: 'Python', icon: FlaskConical, color: 'text-success', category: 'Backend' },
];

export function Hero({ profile }) {
  return (
    <Section id="hero" size="lg" variant="default">
      <Container>
        <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <motion.div
            {...fadeUp}
            className="relative text-center max-w-4xl mx-auto z-10"
            style={{ transitionDelay: '0.1s' }}
          >
            <span className="inline-block text-meta font-medium uppercase tracking-wider text-primary mb-4">
              AI / ML Engineer &bull; Full Stack Developer
            </span>

            <motion.h1
              className="text-heading-xl font-bold text-text-primary mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building Intelligent Systems{' '}
              <span className="relative">
                <span className="relative z-10">for the Real World.</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-10" />
              </span>
            </motion.h1>

            <motion.p
              className="text-heading-sm font-medium text-text-secondary mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {profile.name}
            </motion.p>

            <motion.p
              className="text-body-lg text-text-secondary mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {profile.bio}
            </motion.p>

            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-2">
                {techStack.map((tech, _idx) => (
                  <Badge
                    key={tech.name}
                    variant="outline"
                    size="sm"
                    dot
                    dotColor={tech.color}
                    className="gap-1.5"
                  >
                    <tech.icon className={`w-3 h-3 ${tech.color}`} aria-hidden="true" />
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button size="lg" as="a" href="#projects">
                View Projects
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button variant="outline" size="lg" as="a" href="#contact">
                Contact Me
              </Button>
              {profile.resume && (
                <Button
                  variant="ghost"
                  size="lg"
                  as="a"
                  href={profile.resume.url}
                  download={profile.resume.downloadName}
                >
                  Download Resume
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </Button>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 text-text-muted" aria-hidden="true" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
