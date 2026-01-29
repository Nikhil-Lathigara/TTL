import React from 'react';
import Container from './common/Container';
import Button from './common/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-20000ms scale-110 animate-subtle-zoom"
        style={{ backgroundImage: "url('/hero.gif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-64 pb-20">
        <Container>
          <div className="max-w-3xl animate-fade-in-up">
            <p className="text-white  text-sm sm:text-base mb-4 tracking-[0.3em] font-bold uppercase">
              Microseconds Matter
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
              Win your horserace<br />
              with TTL supplements
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
              Scientifically formulated racehorse supplements from the home of champions. Access the stamina and health they need to push the limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="md" 
                className="px-10"
              >
                Discover
              </Button>
            </div>
          </div>
        </Container>
      </div>

    </section>
  );
};

export default Hero;

