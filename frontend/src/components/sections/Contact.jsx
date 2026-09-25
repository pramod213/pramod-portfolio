import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GitBranch, Send, ExternalLink, MessageSquare } from 'lucide-react';
import {
  Container,
  Section,
  SectionHeading,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Badge,
} from '../ui';
import { fadeUp, staggerContainer, staggerItem } from '../../lib/animations';
import profileData from '../../data/profile.json';

function LinkedInIcon({ className, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-12 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.586 7 2.586v6.75z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: `mailto:${profileData.email}`,
    icon: Mail,
    label: 'Email',
    color: 'text-primary',
    description: 'Best for project inquiries',
    external: false,
  },
  {
    href: profileData.github,
    icon: GitBranch,
    label: 'GitHub',
    color: 'text-text-secondary',
    description: 'View my code & projects',
    external: true,
  },
  {
    href: profileData.linkedin,
    icon: LinkedInIcon,
    label: 'LinkedIn',
    color: 'text-text-secondary',
    description: 'Professional updates',
    external: true,
  },
].filter(link => link.href);

export function Contact() {
  return (
    <Section id="contact" variant="default">
      <Container>
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="CONTACT"
            title="Let's build something intelligent."
            description="Have a project in mind or just want to say hello? I'd love to hear from you."
          />
        </motion.div>

        <motion.div {...staggerContainer} className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card variant="elevated" padding="lg" {...staggerItem}>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>
                I&apos;m always open to discussing new projects, AI/ML opportunities, or just
                connecting with fellow engineers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {socialLinks.map((link, _index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-border hover:border-primary-hover hover:bg-primary/5 transition-all duration-fast group"
                    aria-label={link.label}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10 ${link.color} group-hover:bg-primary group-hover:text-white transition-colors`}
                    >
                      <link.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-text-primary">{link.label}</p>
                      <p className="text-body-sm text-text-muted truncate">{link.description}</p>
                    </div>
                    {link.external && (
                      <ExternalLink
                        className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-body-sm font-semibold text-text-primary mb-3">
                  Or send a quick message
                </h4>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-body-sm font-medium text-text-primary mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-text-primary placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-body-sm font-medium text-text-primary mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-text-primary placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-body-sm font-medium text-text-primary mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Project inquiry, collaboration, etc."
                      className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-text-primary placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-body-sm font-medium text-text-primary mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell me about your project or idea..."
                      className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-text-primary placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Button type="submit" disabled className="opacity-50 cursor-not-allowed">
                      <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                      Send Message
                    </Button>
                    <Badge variant="outline" size="sm" className="text-text-muted">
                      API integration coming in Phase 4
                    </Badge>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>

          <Card variant="interactive" padding="lg" {...staggerItem} className="h-full">
            <CardHeader>
              <CardTitle>Availability</CardTitle>
              <CardDescription>Current status and preferred ways to collaborate.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Open to Opportunities</p>
                  <p className="text-body-sm text-text-secondary">
                    Full-time AI/ML Engineering roles
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-body-sm font-semibold text-text-primary">Interested In</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'AI/ML Engineering',
                    'RAG & LLM Applications',
                    'Multi-Agent Systems',
                    'FastAPI Backend Development',
                    'MLOps & Model Deployment',
                    'Technical Consulting',
                  ].map(item => (
                    <Badge key={item} variant="outline" size="sm" dot dotColor="text-primary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-body-sm font-semibold text-text-primary">Preferred Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Python',
                    'FastAPI',
                    'LangChain',
                    'LangGraph',
                    'PostgreSQL',
                    'Docker',
                    'Groq',
                    'FAISS',
                  ].map(tech => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-body-sm font-semibold text-text-primary mb-3">Response Time</h4>
                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-success" aria-hidden="true" />
                  <span className="text-body-sm">Typically responds within 24-48 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
