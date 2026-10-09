import React, { useState } from 'react';
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

const RESUME_URL = '/resume.pdf';
const RESUME_DOWNLOAD_NAME = 'Pramod_Kumar_Mahato_Resume.pdf';
const RESUME_PREVIEW_URL = '/resume.pdf#toolbar=0&navpanes=0&scrollbar=0';

export function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    setDownloadError(false);
    try {
      const response = await fetch(RESUME_URL);
      if (!response.ok) {
        throw new Error('Failed to download resume');
      }
      const contentType = response.headers.get('content-type');
      if (contentType && !contentType.includes('application/pdf')) {
        throw new Error('Resume response is not a PDF');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = RESUME_DOWNLOAD_NAME;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch {
      setDownloadError(true);
    } finally {
      setIsDownloading(false);
    }
  };

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
              <div className="flex items-start gap-4 mb-4">
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
                <div className="flex-1 min-w-0">
                  <CardTitle className="mb-1">Pramod Kumar Mahato - Resume</CardTitle>
                  <CardDescription>
                    AI / Machine Learning Engineer | Full Stack Developer
                  </CardDescription>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleDownload}
                    disabled={isDownloading}
                  >
                    <svg
                      className={`w-4 h-4 mr-2 ${isDownloading ? 'animate-spin' : ''}`}
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
                    {isDownloading ? 'Downloading...' : downloadError ? 'Download Failed' : 'Download Resume'}
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="pt-4 border-t border-border">
                <h4 className="text-body-sm font-semibold text-text-primary mb-4">PDF Preview</h4>
                <div className="rounded-lg border border-border overflow-hidden bg-surface-elevated">
                  <iframe
                    src={RESUME_PREVIEW_URL}
                    title="Pramod Kumar Mahato Resume"
                    className="w-full"
                    style={{ height: '600px' }}
                  />
                </div>
                <p className="mt-3 text-body-sm text-text-muted">
                  If the preview doesn&apos;t load,{' '}
                  <a
                    href={RESUME_URL}
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
