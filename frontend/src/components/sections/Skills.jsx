import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Brain, Server, Database, Cloud, Monitor, Wrench } from 'lucide-react';
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
  BadgeGroup,
} from '../ui';
import { fadeUp, staggerContainer, staggerItem } from '../../lib/animations';
import profileData from '../../data/profile.json';

const categoryIcons = {
  'AI / LLM Engineering': Brain,
  'Backend & APIs': Server,
  'Data & Storage': Database,
  'Cloud & DevOps': Cloud,
  Frontend: Monitor,
  'Tools & Architecture': Wrench,
};

const categoryOrder = [
  'AI / LLM Engineering',
  'Backend & APIs',
  'Data & Storage',
  'Cloud & DevOps',
  'Frontend',
  'Tools & Architecture',
];

export function Skills() {
  const skillsByCategory = useMemo(() => {
    const grouped = profileData.skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});

    return categoryOrder.filter(cat => grouped[cat]).map(cat => [cat, grouped[cat]]);
  }, []);

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
          {skillsByCategory.map(([category, skills], _index) => {
            const Icon = categoryIcons[category] || Wrench;
            return (
              <Card key={category} variant="interactive" padding="lg" {...staggerItem}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <CardTitle className="mb-0">{category}</CardTitle>
                      <CardDescription className="mt-0">
                        {skills.length} technologies
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <BadgeGroup>
                    {skills
                      .sort((a, b) => b.level - a.level)
                      .map(skill => (
                        <Badge
                          key={skill.name}
                          variant="outline"
                          size="sm"
                          dot
                          dotColor={`hsl(${skill.level * 30} 70% 50%)`}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                  </BadgeGroup>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
