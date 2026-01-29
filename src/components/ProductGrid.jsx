import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './common/ProductCard';
import useWindowSize from '../hooks/useWindowSize';
import useCarousel from '../hooks/useCarousel';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';

const PRODUCTS = [
  {
    id: 1,
    name: 'UN-LOCK+',
    description: 'Hormone-supporting muscle formula for endurance, fatigue a...',
    price: 149.00,
    pricePerDay: '$0.75 per day',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80',
    supports: ['Endurance', 'Recovery'],
    colors: ['#E63946', '#FFB4A2'],
    borderColor: '#E63946'
  },
  {
    id: 2,
    name: 'Flexify-HA',
    description: 'Joint support formula for cartilage, flexibility and joint health',
    price: 149.00,
    pricePerDay: '$0.75 per day',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&q=80',
    supports: ['Joint Health'],
    colors: ['#4A90E2', '#B4D7FF'],
    borderColor: '#4A90E2'
  },
  {
    id: 3,
    name: 'EPO-Equine',
    description: 'All-natural, blood builder optimises oxygen levels for peak performance',
    price: 149.00,
    pricePerDay: '$0.75 per day',
    image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=400&q=80',
    supports: ['Oxygen Levels'],
    colors: ['#E63946', '#FFB4A2'],
    borderColor: '#E63946'
  },
  {
    id: 4,
    name: 'Bleeder Shield',
    description: 'One-of-a-kind respiratory formula, Now comes in a powder',
    price: 149.00,
    pricePerDay: '$0.75 per day',
    image: 'https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?w=400&q=80',
    supports: ['Lungs Support'],
    colors: ['#E63946', '#FFB4A2'],
    borderColor: '#E63946'
  },
  {
    id: 5,
    name: 'EQ-Renew',
    description: 'Natural recovery formula on optimal healing',
    price: 149.00,
    pricePerDay: '$0.75 per day',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=400&q=80',
    supports: ['Recovery'],
    colors: ['#52B788', '#B7E4C7'],
    borderColor: '#52B788'
  },
];

const ProductGrid = () => {
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
  } = useCarousel(PRODUCTS.length, itemsPerPage);

  const visibleProducts = useMemo(() => 
    PRODUCTS.slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage),
    [currentSlide, itemsPerPage]
  );

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <Container>
        <SectionHeader 
          title="Our"
          highlight="Core"
          description="Keep your horse race-ready with our all-natural, performance-enhancing solutions."
          align={width < 1024 ? 'center' : 'left'}
          ghostText="Products"
        />

        <div className="relative px-2 sm:px-4 md:px-0">
          {totalSlides > 1 && (
            <div className="hidden md:block">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 disabled:opacity-30 border border-gray-100 transition-all"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 bg-white rounded-full p-2 lg:p-3 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 disabled:opacity-30 border border-gray-100 transition-all"
                aria-label="Next products"
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                className="transition-transform duration-300 ease-out hover:-translate-y-2 sm:hover:-translate-y-4"
              >
                <ProductCard product={product} index={index} />
              </div>
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
                  aria-label="Previous products"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-30 border border-gray-100 transition-all"
                  aria-label="Next products"
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

export default ProductGrid;
