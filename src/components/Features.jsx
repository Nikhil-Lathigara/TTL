import React from 'react';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import FeatureCard from './common/FeatureCard';

const FEATURES = [
  {
    emoji: '🏆',
    title: 'Premium Quality',
    description: 'Highest quality ingredients sourced from trusted suppliers worldwide',
  },
  {
    emoji: '🔬',
    title: 'Scientifically Proven',
    description: 'Backed by veterinary research and clinical studies',
  },
  {
    emoji: '🌿',
    title: 'Natural Ingredients',
    description: 'Made with 100% natural and organic components',
  },
  {
    emoji: '🚚',
    title: 'Fast Delivery',
    description: 'Quick and reliable shipping to your doorstep',
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Container className="relative z-10">
        <SectionHeader 
          title="Why Choose"
          highlight="TTL Supplements"
          description="We're committed to providing the best care for your horses"
          align="center"
          ghostText="FEATURES"
          className="[&_h2]:text-white [&_p]:text-gray-300"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              emoji={feature.emoji}
              title={feature.title}
              description={feature.description}
              variant="dark"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;

