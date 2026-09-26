import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network } from 'lucide-react';
import {
  Container,
  Section,
  SectionHeading,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Button,
} from '../ui';
import { fadeUp, staggerContainer, staggerItem } from '../../lib/animations';

const projectIcons = {
  'TripMate AI': Brain,
  'HR Policy RAG Assistant': Network,
};

export function Projects({ profile }) {
  return (
    <Section id="projects" variant="default">
      <Container>
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="PROJECTS"
            title="Selected work and side projects."
            description="Production-ready AI/ML applications and full-stack systems."
          />
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {profile.projects.map((project, _index) => {
            const ProjectIcon = projectIcons[project.title] || Brain;
            return (
              <Card
                key={project.id}
                variant="interactive"
                padding="lg"
                {...staggerItem}
                className="h-full flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <ProjectIcon className="w-6 h-6 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <CardTitle className="mb-1">{project.title}</CardTitle>
                          {project.featured && (
                            <Badge variant="primary" size="sm" dot dotColor="text-warning">
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-0">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-5">
                  <div>
                    <h4 className="text-body-sm font-semibold text-text-primary mb-3">
                      Key Highlights
                    </h4>
                    <div className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-text-secondary text-body-sm"
                        >
                          <svg
                            className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="text-body-sm font-semibold text-text-primary mb-3">
                      Architecture
                    </h4>
                    <p className="text-text-secondary text-body-sm">{project.architecture}</p>
                  </div>

                  <div>
                    <h4 className="text-body-sm font-semibold text-text-primary mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-body-sm font-medium bg-surface-elevated/50 border border-border rounded-lg text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        as="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.552.653 1.653.06 2.874.117 3.176.77.84 1.235 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </Button>
                    )}
                    {project.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        as="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live`}
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live
                      </Button>
                    )}
                    <span className="flex-1" />
                    <button className="text-text-muted hover:text-text-primary text-body-sm font-medium flex items-center gap-1">
                      Details
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
