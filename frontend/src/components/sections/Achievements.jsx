import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Calendar, MapPin, ExternalLink } from 'lucide-react';
import {
  Container,
  Section,
  SectionHeading,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Button,
} from '../ui';
import { fadeUp, staggerContainer, staggerItem } from '../../lib/animations';
import profileData from '../../data/profile.json';

const achievementIcons = {
  trophy: Trophy,
  award: Award,
  star: Star,
};

export function Achievements() {
  return (
    <Section id="achievements" variant="surface">
      <Container>
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="ACHIEVEMENTS"
            title="Recognition & Accomplishments."
            description="Highlights from competitions, hackathons, and professional milestones."
          />
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {profileData.achievements.map((achievement, _index) => {
            const Icon = achievementIcons[achievement.icon] || Trophy;
            return (
              <Card
                key={achievement.id}
                variant="interactive"
                padding="lg"
                {...staggerItem}
                className="h-full flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-warning to-primary" />
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-warning" aria-hidden="true" />
                        </div>
                        <div>
                          <CardTitle className="mb-1">{achievement.title}</CardTitle>
                          <div className="flex items-center gap-2 text-text-muted text-body-sm">
                            <Calendar className="w-3 h-3" aria-hidden="true" />
                            <span>{achievement.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-text-secondary mb-4">{achievement.description}</p>
                  <div className="flex items-center gap-2 text-text-muted text-body-sm">
                    <MapPin className="w-3 h-3" aria-hidden="true" />
                    <span>{achievement.organization}</span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-text-muted hover:text-text-primary w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </motion.div>

        <motion.div {...fadeUp} className="mt-16 text-center">
          <Card variant="flat" padding="lg" className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-warning" aria-hidden="true" />
              <h3 className="text-heading-md font-bold text-text-primary">
                Always Learning, Always Building
              </h3>
            </div>
            <p className="text-text-secondary">
              Currently exploring advanced topics in AI/ML: Agentic workflows, LLM evaluation, MLOps
              pipelines, and distributed training. Open to collaborations and challenging projects
              that push the boundaries of what&apos;s possible with AI.
            </p>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
