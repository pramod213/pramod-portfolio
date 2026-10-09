import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Target, Brain, Code, Database, ChevronRight, Network, FlaskConical } from 'lucide-react';
import {
  Container,
  Section,
  Badge,
  BadgeGroup,
} from '../ui';
import { fadeUp, staggerContainer, staggerItem } from '../../lib/animations';

const capabilityCards = [
  {
    number: '01',
    icon: Brain,
    title: 'AI/ML Engineering',
    description: 'Building intelligent solutions with LLMs, RAG and multi-agent systems.',
    accentColor: 'text-primary',
    accentBg: 'bg-primary/10',
    accentBorder: 'border-primary/20',
  },
  {
    number: '02',
    icon: Code,
    title: 'Full Stack Development',
    description: 'Developing modern web applications with React, FastAPI and scalable backend systems.',
    accentColor: 'text-secondary',
    accentBg: 'bg-secondary/10',
    accentBorder: 'border-secondary/20',
  },
  {
    number: '03',
    icon: Database,
    title: 'RAG & Agents',
    description: 'Designing retrieval-augmented systems and agentic AI workflows for real-world use cases.',
    accentColor: 'text-warning',
    accentBg: 'bg-warning/10',
    accentBorder: 'border-warning/20',
  },
];

const techStack = [
  { name: 'Python', icon: FlaskConical, color: 'text-warning' },
  { name: 'FastAPI', icon: Code, color: 'text-secondary' },
  { name: 'LangChain', icon: Network, color: 'text-primary' },
  { name: 'RAG', icon: Brain, color: 'text-primary' },
  { name: 'React', icon: Code, color: 'text-secondary' },
  { name: 'JavaScript', icon: Code, color: 'text-warning' },
  { name: 'SQL', icon: Database, color: 'text-secondary' },
  { name: 'Multi-Agent Systems', icon: Network, color: 'text-primary' },
  { name: 'LangGraph', icon: Network, color: 'text-primary' },
];

const stats = [
  { icon: Briefcase, value: '6+', label: 'Projects Completed' },
  { icon: GraduationCap, value: '8.2/10', label: 'CGPA (B.Tech CSE)' },
  { icon: Target, value: '100%', label: 'Problem Solving Mindset' },
];

export function About({ _profile }) {
  return (
    <Section id="about" variant="surface">
      <Container>
        <motion.div
          className="relative mx-auto max-w-[90rem] rounded-2xl bg-surface/50 bg-gradient-to-br from-surface/50 via-transparent to-transparent p-6 md:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" aria-hidden="true" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <motion.div {...fadeUp} className="relative flex-shrink-0 w-full md:w-72 lg:w-88">
              <div className="relative flex flex-col gap-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/about-profile.jpg"
                    alt="Portrait of Pramod Kumar Mahato"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-20" />
                </div>

                <div className="pt-4 w-full">
                  <div className="bg-surface/95 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-body-sm font-medium text-text-primary">Open to Opportunities</p>
                        <p className="text-body-xs text-text-muted">Available for new projects</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-success flex-shrink-0" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="bg-surface/95 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-body-sm font-medium text-text-primary">Noida, India</p>
                        <p className="text-body-xs text-text-muted">Open to Relocate</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-success flex-shrink-0" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  {stats.map((stat) => (
                    <div key={stat.value} className="text-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                        <stat.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="text-heading-md font-bold text-text-primary">{stat.value}</div>
                      <div className="text-body-xs text-text-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="flex-1 min-w-0 space-y-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="space-y-2">
                <span className="inline-block text-meta font-medium uppercase tracking-wider text-primary">ABOUT ME</span>
                <h2 className="text-heading-xl md:text-heading-2xl font-bold text-text-primary leading-tight">
                  Hi, I&apos;m <span className="relative z-10">Pramod Kumar</span>
                </h2>
              </div>
            </div>

              <p className="text-body-lg text-text-secondary leading-relaxed max-w-xl">
                AI / Machine Learning Engineer | Full Stack Developer
              </p>

              <p className="text-body-base text-text-secondary leading-relaxed max-w-2xl">
                I&apos;m an AI/ML Engineer and Full Stack Developer passionate about building intelligent, real-world applications. 
                I work with Python, FastAPI, LangChain, RAG and multi-agent systems, along with modern web technologies, 
                to turn ideas into practical, scalable and production-ready solutions. 
                I enjoy learning, solving challenging problems and creating solutions that deliver real value.
              </p>

              <div className="pt-4 border-t border-border/50">
                <h3 className="text-heading-sm font-semibold text-text-primary mb-6">Core Capabilities</h3>
                <motion.div
                  {...staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {capabilityCards.map((card) => (
                    <motion.div
                      key={card.number}
                      {...staggerItem}
                      className={`relative rounded-2xl bg-surface-elevated/50 border ${card.accentBorder} p-4 hover:border-primary/30 transition-colors duration-300 min-h-[260px]`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-heading-lg font-bold text-text-muted/30">{card.number}</span>
                        <div className={`w-12 h-12 rounded-xl ${card.accentBg} flex items-center justify-center`}>
                          <card.icon className={`w-6 h-6 ${card.accentColor}`} aria-hidden="true" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-heading-sm font-semibold text-text-primary">{card.title}</h4>
                        <p className="text-body-sm text-text-secondary leading-relaxed">{card.description}</p>
                      </div>
                      <div className="absolute bottom-6 right-6">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="pt-8 border-t border-border/50">
                <motion.div {...fadeUp}>
                  <h3 className="text-heading-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">KEY TECHNOLOGIES</h3>
                  <BadgeGroup className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
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
                  </BadgeGroup>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}