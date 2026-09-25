import React from 'react';
import { Mail, GitBranch, ExternalLink } from 'lucide-react';
import { Container } from '../ui';
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
  { href: `mailto:${profileData.email}`, icon: Mail, label: 'Email', external: false },
  { href: profileData.github, icon: GitBranch, label: 'GitHub', external: true },
  { href: profileData.linkedin, icon: LinkedInIcon, label: 'LinkedIn', external: true },
];

const footerNavItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="max-w-xs">
            <h3 className="text-heading-sm font-bold text-text-primary mb-4">
              Pramod Kumar Mahato
            </h3>
            <p className="text-text-secondary text-body-sm mb-6 leading-relaxed">
              AI/ML Engineer building production-ready intelligent systems. Specializing in
              LangChain, LangGraph, RAG pipelines, and Multi-Agent Systems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-text-muted hover:text-text-primary transition-colors duration-fast"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-body-base font-semibold text-text-primary mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {footerNavItems.map(item => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-text-secondary hover:text-text-primary transition-colors duration-fast text-body-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-body-base font-semibold text-text-primary mb-4">Connect</h4>
            <p className="text-text-secondary text-body-sm mb-4">
              Open to opportunities in AI/ML Engineering and Full Stack Development.
            </p>
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors duration-fast text-body-sm font-medium"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              {profileData.email}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-text-muted text-body-sm">
            &copy; {currentYear} Pramod Kumar Mahato. Built with React, TailwindCSS, and Framer
            Motion.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/pramodkmahato"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors duration-fast text-body-sm"
              aria-label="GitHub Repository"
            >
              <GitBranch className="w-4 h-4" aria-hidden="true" />
              <span>Source Code</span>
            </a>
            <a
              href="https://linkedin.com/in/pramodkmahato"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors duration-fast text-body-sm"
              aria-label="LinkedIn Profile"
            >
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
