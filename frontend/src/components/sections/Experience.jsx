import React from 'react';
import { motion } from 'framer-motion';
import { Container, Section, SectionHeading, Card, Badge } from '../ui';
import { fadeUp, staggerContainer, staggerItem } from '../../lib/animations';

export function Experience({ profile }) {
  return (
    <Section id="experience" variant="surface">
      <Container>
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="Where I've worked and what I've built."
            description="Building production-grade AI/ML applications and full-stack systems."
          />
        </motion.div>

        <motion.div {...staggerContainer} className="space-y-6 max-w-4xl mx-auto">
          {profile.experience.map((exp, _index) => (
            <Card
              key={exp.id}
              variant="interactive"
              padding="lg"
              {...staggerItem}
              className="relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <div className="pl-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="primary" size="sm">
                        {exp.role}
                      </Badge>
                      <Badge variant="outline" size="sm">
                        {exp.company}
                      </Badge>
                      <Badge variant="outline" size="sm" dot dotColor="text-text-muted">
                        {exp.period}
                      </Badge>
                      <Badge variant="outline" size="sm" dot dotColor="text-secondary">
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-12 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.586 7 2.586v6.75z" />
                        </svg>
                        {exp.location}
                      </Badge>
                    </div>
                    <p className="text-text-secondary mb-5">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map(tech => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {[
                        'Developed TripMate AI: Multi-agent travel planning system with LangGraph',
                        'Built HR Policy RAG Assistant: End-to-end RAG pipeline with FAISS',
                        'Implemented AI Guardrails and Human-in-the-Loop workflows',
                        'Containerized applications with Docker for production deployment',
                        'Integrated external APIs: Tavily, AviationStack via MCP',
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-text-secondary text-body-sm"
                        >
                          <svg
                            className="w-4 h-4 text-primary flex-shrink-0"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
