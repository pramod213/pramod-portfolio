import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Section,
  SectionHeading,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui';
import { fadeUp } from '../../lib/animations';

export function Resume() {
  return (
    <Section id="resume" variant="surface">
      <Container>
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="RESUME"
            title="Resume"
            description="View my latest resume for a detailed overview of my AI/ML engineering experience, technical skills, projects, education, and achievements."
          />
        </motion.div>

        <motion.div {...fadeUp} className="max-w-4xl mx-auto">
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-7 h-7 text-primary"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="16" y2="17" />
                    <polyline points="10 13 14 13 14 17 10 17 10 21 14 21 14 25 10 25" />
                  </svg>
                </div>
                <div>
                  <CardTitle className="mb-1">Pramod Kumar Mahato - Resume</CardTitle>
                  <CardDescription>
                    AI / Machine Learning Engineer | Full Stack Developer
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  as="a"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
                  View Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  as="a"
                  href="/resume.pdf"
                  download="Pramod_Kumar_Mahato_Resume.pdf"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-body-sm font-semibold text-text-primary mb-4">PDF Preview</h4>
                <div className="rounded-lg border border-border overflow-hidden bg-surface-elevated">
                  <iframe
                    src="/resume.pdf"
                    title="Pramod Kumar Mahato Resume"
                    className="w-full"
                    style={{ height: '600px' }}
                  />
                </div>
                <p className="mt-3 text-body-sm text-text-muted">
                  If the preview doesn&apos;t load,{' '}
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover underline"
                  >
                    Open Resume in New Tab
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
