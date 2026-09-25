import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, ArrowRight, CheckCircle, Brain, Network } from 'lucide-react';
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
  BadgeGroup,
  Button,
} from '../ui';
import { fadeUp, staggerContainer, staggerItem } from '../../lib/animations';
import profileData from '../../data/profile.json';

const projectIcons = {
  'TripMate AI': Brain,
  'HR Policy RAG Assistant': Network,
};

export function Projects() {
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
          {profileData.projects.map((project, _index) => {
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
                          <CheckCircle
                            className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
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
                    <BadgeGroup>
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </BadgeGroup>
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
                        <GitBranch className="w-4 h-4" aria-hidden="true" />
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
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        Live
                      </Button>
                    )}
                    <span className="flex-1" />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-text-muted hover:text-text-primary"
                    >
                      Details
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
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
