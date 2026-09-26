import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown, Code, Zap, Brain, Network } from 'lucide-react';
import { Container, Section, Button } from '../ui';
import { fadeUp } from '../../lib/animations';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const techStack = [
  { name: 'LangChain', icon: Network, color: 'text-primary' },
  { name: 'RAG Pipelines', icon: Brain, color: 'text-warning' },
  { name: 'Multi-Agent Systems', icon: Zap, color: 'text-secondary' },
  { name: 'FastAPI', icon: Code, color: 'text-success' },
];

export function Hero({ profile }) {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setCurrentTechIndex(prev => (prev + 1) % techStack.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const CurrentTechIcon = techStack[currentTechIndex].icon;
  const currentTechColor = techStack[currentTechIndex].color;
  const currentTechName = techStack[currentTechIndex].name;

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
            <span className="inline-block text-meta font-medium uppercase tracking-wider text-primary mb-6">
              AI / ML ENGINEER
            </span>

            <motion.h1
              className="text-heading-xl font-bold text-text-primary mb-6 leading-tight"
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
              className="text-heading-sm font-medium text-text-secondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {profile.name}
            </motion.p>

            <motion.p
              className="text-body-lg text-text-secondary mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {profile.bio}
            </motion.p>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-elevated/50 border border-border/50 backdrop-blur-sm">
                <motion.span
                  key={currentTechIndex}
                  className="flex items-center gap-2 text-body-sm font-medium text-text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <CurrentTechIcon className={`w-4 h-4 ${currentTechColor}`} aria-hidden="true" />
                  {currentTechName}
                </motion.span>
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
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
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
