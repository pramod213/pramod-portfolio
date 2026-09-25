import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GitBranch, ExternalLink, ChevronDown } from 'lucide-react';
import profileData from './data/profile.json';
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
  CardFooter,
  Badge,
  BadgeGroup,
  ThemeToggle,
} from './components/ui';
import { fadeUp, staggerContainer, staggerItem } from './lib/animations';

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

function TwitterIcon({ className, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.24h-3.304l-7.124-8.179-8.389 9.239h-3.31l7.463-8.341-7.003-8.12h3.329l7.298 8.383 7.505-9.124z" />
    </svg>
  );
}

function Navigation() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Container>
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          <div className="flex-shrink-0">
            <span className="text-heading-sm font-bold text-text-primary">Portfolio</span>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors duration-fast text-body-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <Section id="hero" size="lg" variant="default">
      <Container>
        <motion.div
          {...fadeUp}
          className="text-center max-w-4xl mx-auto"
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="inline-block text-meta font-medium uppercase tracking-wider text-primary mb-6">
            AI/ML Engineer & Full Stack Developer
          </span>
          <motion.h1
            className="text-heading-xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I&apos;m <span className="text-primary">{profileData.name}</span>
          </motion.h1>
          <motion.p
            className="text-body-lg text-text-secondary mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {profileData.bio}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" as="a" href="#projects">
              View Projects
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg" as="a" href="#contact">
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        >
          <ChevronDown className="w-6 h-6 text-text-muted" aria-hidden="true" />
        </motion.div>
      </Container>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" variant="surface">
      <Container>
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="ABOUT"
            title="Building intelligent systems that solve real problems."
            description={profileData.bio}
          />
        </motion.div>

        <motion.div {...staggerContainer} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card variant="interactive" padding="lg" {...staggerItem}>
            <CardHeader>
              <CardTitle>Background</CardTitle>
              <CardDescription>
                Full-stack developer with a focus on AI/ML systems and scalable architectures.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-text-secondary">
              <p>
                With experience spanning frontend, backend, and ML infrastructure, I build
                end-to-end intelligent applications. From training pipelines to production APIs, I
                focus on maintainable code and measurable impact.
              </p>
              <p>
                Currently exploring: Large Language Models, RAG systems, MLOps, and distributed
                computing.
              </p>
            </CardContent>
          </Card>

          <Card variant="interactive" padding="lg" {...staggerItem}>
            <CardHeader>
              <CardTitle>Approach</CardTitle>
              <CardDescription>Principles that guide my work.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                'Clean, typed, and tested code',
                'Performance-first architecture',
                'User-centric product thinking',
                'Continuous learning & sharing',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-text-secondary">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-body-base">{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}

function Skills() {
  const skillsByCategory = profileData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = Object.entries(skillsByCategory);

  return (
    <Section id="skills" variant="default">
      <Container>
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="SKILLS"
            title="Technologies & tools I work with."
            description="Proficient in modern AI/ML stacks, cloud infrastructure, and full-stack development."
          />
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map(([category, skills], _index) => (
            <Card key={category} variant="interactive" padding="lg" {...staggerItem}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
                <CardDescription>{skills.length} technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <BadgeGroup>
                  {skills.map(skill => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      size="sm"
                      dot
                      dotColor={`hsl(${skill.category === 'Frontend' ? 240 : skill.category === 'Backend' ? 160 : 280} 70% 50%)`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </BadgeGroup>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" variant="surface">
      <Container>
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="Where I've worked and what I've built."
            description="Leading teams, architecting systems, and delivering impact across diverse domains."
          />
        </motion.div>

        <motion.div {...staggerContainer} className="space-y-6 max-w-4xl mx-auto">
          {profileData.experience.map((exp, _index) => (
            <Card key={exp.id} variant="interactive" padding="lg" {...staggerItem}>
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
                  </div>
                  <p className="text-text-secondary mb-4">{exp.description}</p>
                  <BadgeGroup>
                    {exp.technologies.map(tech => (
                      <Badge key={tech} variant="outline" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </BadgeGroup>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" variant="default">
      <Container>
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="PROJECTS"
            title="Selected work and side projects."
            description="From production systems to experimental research, here are some highlights."
          />
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {profileData.projects.map((project, _index) => (
            <Card
              key={project.id}
              variant="interactive"
              padding="lg"
              {...staggerItem}
              className="h-full flex flex-col"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 mb-4">
                <BadgeGroup className="mb-4">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </BadgeGroup>
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
                  {project.featured && (
                    <Badge variant="primary" size="sm" dot dotColor="text-warning">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

function Contact() {
  const socialLinks = [
    { href: `mailto:${profileData.email}`, icon: Mail, label: 'Email', color: 'text-primary' },
    { href: profileData.github, icon: GitBranch, label: 'GitHub', color: 'text-text-secondary' },
    {
      href: profileData.linkedin,
      icon: LinkedInIcon,
      label: 'LinkedIn',
      color: 'text-text-secondary',
    },
    {
      href: profileData.twitter,
      icon: TwitterIcon,
      label: 'Twitter',
      color: 'text-text-secondary',
    },
  ].filter(link => link.href);

  return (
    <Section id="contact" variant="surface">
      <Container>
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="CONTACT"
            title="Let's work together."
            description="Have a project in mind or just want to say hello? I'd love to hear from you."
          />
        </motion.div>

        <motion.div {...staggerContainer} className="max-w-xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {socialLinks.map((link, _index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary-hover hover:text-primary transition-all duration-fast ${link.color}`}
                aria-label={link.label}
                {...staggerItem}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <link.icon className="w-5 h-5" aria-hidden="true" />
                <span className="font-medium text-body-base">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <p className="text-text-muted text-body-sm">
            &copy; {new Date().getFullYear()} {profileData.name}. Built with React, TailwindCSS, and
            Framer Motion.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
