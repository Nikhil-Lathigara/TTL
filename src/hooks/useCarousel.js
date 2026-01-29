import { useState, useEffect, useCallback } from 'react';

const useCarousel = (totalItems, itemsPerPage, autoPlayInterval = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSlides = Math.ceil(totalItems / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;
    
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides, nextSlide, autoPlayInterval]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [itemsPerPage]);

  return {
    currentSlide,
    totalSlides,
    nextSlide,
    prevSlide,
    goToSlide,
    setIsAutoPlaying,
    isAutoPlaying
  };
};

export default useCarousel;
