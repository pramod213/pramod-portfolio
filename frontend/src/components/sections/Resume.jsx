import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, FileText } from 'lucide-react';
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
                  <FileText className="w-7 h-7 text-primary" aria-hidden="true" />
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
                  <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                  View Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  as="a"
                  href="/resume.pdf"
                  download="Pramod_Kumar_Mahato_Resume.pdf"
                >
                  <Download className="w-4 h-4 mr-2" aria-hidden="true" />
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
                    sandbox="allow-scripts allow-same-origin"
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
