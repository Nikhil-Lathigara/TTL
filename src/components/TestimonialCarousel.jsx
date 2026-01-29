import React, { useMemo, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';
import useCarousel from '../hooks/useCarousel';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'James Morgan',
    role: 'Contributed to a Horse Racing',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    testimonial: 'As The Trainer Locker, I focus on building trust and communication between horse and rider, With over 15 years of experience.',
    horseImage: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80',
    badge: 'Trainer'
  },
  {
    id: 2,
    name: 'James Morgan',
    role: 'Professional Horse UN-LOCK-ing',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    testimonial: 'As The Trainer Locker, I focus on building trust and communication between horse and rider, With over 15 years of experience.',
    horseImage: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&q=80',
    badge: 'Trainer'
  },
  {
    id: 3,
    name: 'James Morgan',
    role: 'Senior Horse Handler (8+ Yrs)',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    testimonial: 'As The Trainer Locker, I focus on building trust and communication between horse and rider, With over 15 years of experience.',
    horseImage: 'https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?w=600&q=80',
    badge: 'Trainer'
  },
  {
    id: 4,
    name: 'James Morgan',
    role: 'Senior Horse Handler (8+ Yrs)',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    testimonial: 'As The Trainer Locker, I focus on building trust and communication between horse and rider, With over 15 years of experience.',
    horseImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    badge: 'Trainer'
  },
  {
    id: 5,
    name: 'Sarah Williams',
    role: 'Equestrian Performance Coach',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    testimonial: 'As The Trainer Locker, I focus on building trust and communication between horse and rider, With over 15 years of experience.',
    horseImage: 'https://images.unsplash.com/photo-1589751436113-c7a2e6170190?w=600&q=80',
    badge: 'Trainer'
  },
];

const TestimonialCard = memo(({ testimonial, index }) => (
  <div
    className="animate-fade-in-up bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group"
    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
  >
    <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gray-100">
      <div className="absolute top-3 left-3 bg-[#E63946]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10 shadow-md">
        {testimonial.badge}
      </div>
      <img
        src={testimonial.horseImage}
        alt="Horse training"
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div className="p-4 sm:p-5">
      <p className="text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-4 min-h-[3rem] sm:min-h-[4rem]">
        {testimonial.testimonial}
      </p>

      <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-gray-100">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-gray-900 text-xs sm:text-sm truncate">
            {testimonial.name}
          </h4>
          <p className="text-[10px] sm:text-xs text-gray-500 line-clamp-2">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  </div>
));

TestimonialCard.displayName = 'TestimonialCard';

const TestimonialCarousel = () => {
  const { width } = useWindowSize();

  const itemsPerPage = useMemo(() => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 4;
  }, [width]);

  const {
    currentSlide,
    totalSlides,
    nextSlide,
    prevSlide,
    goToSlide,
    setIsAutoPlaying
  } = useCarousel(TESTIMONIALS.length, itemsPerPage, 10000);

  const visibleTestimonials = useMemo(() => 
    TESTIMONIALS.slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage),
    [currentSlide, itemsPerPage]
  );

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <Container>
        <SectionHeader 
          title="Trusted by"
          highlight="trainers"
          description="Outstanding the competition means energy, stamina, and recovery can be the 1% difference between first and second place. Combat fatigue, muscle stiffness, and cramping with TTL's top-selling products, formulated for optimal performance and endurance."
          align={width < 1024 ? 'center' : 'left'}
        />

        <div className="relative px-2 sm:px-4 md:px-0">
          {totalSlides > 1 && (
            <div className="hidden md:block">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 disabled:opacity-30 border border-gray-100 transition-all font-bold"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 disabled:opacity-30 border border-gray-100 transition-all font-bold"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index} 
              />
            ))}
          </div>

          {totalSlides > 1 && (
            <>
              <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full hover:scale-125 ${
                      currentSlide === index
                        ? 'bg-[#E63946] w-8 sm:w-10 h-2 sm:h-2.5'
                        : 'bg-gray-300 w-2 sm:w-2.5 h-2 sm:h-2.5 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex md:hidden justify-center gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-30 border border-gray-100 transition-all"
                  aria-label="Previous testimonials"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-30 border border-gray-100 transition-all"
                  aria-label="Next testimonials"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialCarousel;
