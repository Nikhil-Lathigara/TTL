import React from 'react';
import { Package, Truck, Headphones, ArrowRight } from 'lucide-react';
import Container from './common/Container';
import Button from './common/Button';
import FeatureCard from './common/FeatureCard';

const FEATURE_ITEMS = [
  {
    icon: Package,
    title: 'Returns Policy',
    description: "We've never had a return. That's how confident we are.",
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Guaranteed next-day shipping across New Zealand and Australia',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Contact us for personalised recommendations',
  },
];

const Subscribe = () => {
  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <section className="relative h-125 md:h-150 lg:h-175 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/banner1.jpg"
            alt="Horse racing action"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="relative h-full flex items-center">
          <Container>
            <div className="max-w-2xl animate-fade-in-up">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Race-ready performance <span className="text-[#E63946]">starts now</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                TTL racehorse supplements are uniquely formulated in the United States — so you can access the stamina and health they need to push the limits for the win.
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-white/90 mb-10 border-l-4 border-[#E63946] pl-6">
                100% drug-free, so you can confidently train
              </h2>
              <Button size="lg" showArrow={true}>
                Get Started Today
              </Button>
            </div>
          </Container>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURE_ITEMS.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant="light"
                className="hover:border-[#E63946]/30"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Subscribe and Save Section */}
      <section className="bg-pink-50 py-20 md:py-28 relative overflow-hidden">

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-2xl md:text-5xl font-black mb-6 leading-tight">
                <span className="text-[#E63946]">Subscribe</span>
                <span className="text-gray-900"> & Save</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Never run out of your essentials. Join our club and get exclusive benefits.
              </p>

              {/* Benefits List */}
              <div className="space-y-5 mb-12">
                {[
                  'Save Upto 20% on every order',
                  'From as little as $0.70 a day',
                  'Pause or cancel anytime'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center justify-center lg:justify-start group">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm group-hover:bg-[#E63946] transition-colors">
                      <div className="w-2 h-2 bg-[#E63946] rounded-full group-hover:bg-white transition-colors"></div>
                    </div>
                    <span className="text-lg text-gray-800 font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button variant="secondary" size="md">
                Shop Now
              </Button>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative group">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80"
                  alt="Product stack"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative Backgrounds */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#E63946] rounded-full -z-10 opacity-10 animate-pulse"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#E63946] rounded-[2.5rem] -z-10 opacity-5"></div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Subscribe;
