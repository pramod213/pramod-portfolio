import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Target, CheckCircle } from 'lucide-react';
import {
  Container,
  Section,
  SectionHeading,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
} from '../ui';
import { fadeUp, staggerContainer, staggerItem } from '../../lib/animations';

const infoItems = [
  { icon: MapPin, label: 'Location', value: 'Noida, India' },
  { icon: GraduationCap, label: 'Education', value: 'B.Tech CSE, Roorkee Institute of Technology' },
  { icon: Briefcase, label: 'Experience', value: 'Full Stack Developer Intern' },
  { icon: Target, label: 'Primary Focus', value: 'AI/ML Engineering & Full Stack Development' },
];

export function About({ profile }) {
  return (
    <Section id="about" variant="surface">
      <Container>
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="ABOUT"
            title="Building intelligent systems that solve real problems."
            description={profile.bio}
          />
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card variant="interactive" padding="lg" {...staggerItem}>
            <CardHeader>
              <CardTitle>Background</CardTitle>
              <CardDescription>
                Full-stack developer with a focus on AI/ML systems and scalable architectures.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-4 text-text-secondary">
                <p>
                  AI/ML Engineer specializing in building production-ready intelligent systems.
                  Expertise in LangChain, LangGraph, RAG pipelines, Multi-Agent Systems, and
                  FastAPI.
                </p>
                <p>
                  Passionate about bridging the gap between AI research and real-world applications
                  through robust engineering practices.
                </p>
                <p>
                  Currently exploring: Large Language Models, Agentic Workflows, MLOps, and
                  distributed AI systems.
                </p>
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                {[
                  'Clean, typed, and tested code',
                  'Performance-first architecture',
                  'User-centric product thinking',
                  'Continuous learning & sharing',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle
                      className="w-5 h-5 text-primary flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-body-base">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card variant="interactive" padding="lg" {...staggerItem}>
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
              <CardDescription>Key information at a glance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {infoItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-surface-elevated/50 rounded-lg border border-border/50"
                  >
                    <item.icon
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-meta text-text-muted uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-body-sm font-medium text-text-primary">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="text-body-sm font-semibold text-text-primary mb-3">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'LangChain',
                    'LangGraph',
                    'RAG',
                    'Multi-Agent Systems',
                    'FastAPI',
                    'Python',
                    'PostgreSQL',
                    'Docker',
                  ].map(skill => (
                    <Badge key={skill} variant="outline" size="sm" dot dotColor="text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
