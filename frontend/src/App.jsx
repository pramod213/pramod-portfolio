import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { usePortfolio } from './hooks/usePortfolio';

function PortfolioContent({ profile }) {
  return (
    <main>
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills profile={profile} />
      <Experience profile={profile} />
      <Projects profile={profile} />
      <Achievements profile={profile} />
      <Contact profile={profile} />
    </main>
  );
}

function App() {
  const { profile, loading, error } = usePortfolio();

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-text-primary flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-text-secondary">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error && !profile) {
    return (
      <div className="min-h-screen bg-background text-text-primary flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-error mb-4">Failed to load portfolio</p>
          <p className="text-text-muted">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      {profile && <PortfolioContent profile={profile} />}
      <Footer profile={profile} />
    </div>
  );
}

export default App;
