import { useState, useEffect, useCallback, memo } from 'react';
import { 
  Maximize2, X, ChevronLeft, ChevronRight, ArrowRight, 
  Facebook, Twitter, Instagram, Linkedin, Youtube 
} from 'lucide-react';
import Container from './common/Container';

// Constants
const IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80',
    title: 'Training Excellence',
    category: 'Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1598632640487-6ea4a4e8b963?w=800&q=80',
    title: 'Natural Beauty',
    category: 'Performance'
  },
  {
    url: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&q=80',
    title: 'Peak Performance',
    category: 'Health'
  },
  {
    url: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80',
    title: 'Healthy Living',
    category: 'Supplements'
  },
  {
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    title: 'Strong & Vital',
    category: 'Vitality'
  },
];

const SOCIAL_LINKS = [
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Linkedin, label: 'Linkedin', href: '#' },
  { Icon: Youtube, label: 'Youtube', href: '#' },
];

// Subcomponents
const GalleryImage = memo(({ image, index, onClick, className = '' }) => (
  <div
    onClick={() => onClick(index)}
    className={`group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg bg-white transition-all duration-500 hover:shadow-2xl cursor-pointer ${className}`}
  >
    <img
      src={image.url}
      alt={image.title}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
      <span className="text-[#E63946] text-[10px] md:text-xs font-semibold tracking-wider uppercase mb-1">
        {image.category}
      </span>
      <h3 className="text-white text-sm md:text-lg font-bold">
        {image.title}
      </h3>
    </div>
    <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#E63946]">
      <Maximize2 className="w-4 h-4 text-white" />
    </div>
  </div>
));

GalleryImage.displayName = 'GalleryImage';

const SocialLinks = memo(() => (
  <div className="flex gap-6 pt-4">
    {SOCIAL_LINKS.map(({ Icon, label, href }) => (
      <a
        key={label}
        href={href}
        className="text-gray-800 hover:text-[#E63946] transition-colors"
        aria-label={label}
      >
        <Icon className="w-7 h-7" />
      </a>
    ))}
  </div>
));

SocialLinks.displayName = 'SocialLinks';

const NewsletterForm = memo(({ email, setEmail, onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-6 max-w-lg">
    <div className="relative group">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Type your email"
        required
        className="w-full px-6 py-4 md:py-5 border-2 border-gray-200 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#E63946] transition-all duration-300 text-lg shadow-sm"
      />
    </div>
    <button
      type="submit"
      className="group flex items-center gap-3 bg-[#E63946] hover:bg-[#D62839] text-white px-8 md:px-10 py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 shadow-lg shadow-red-200"
    >
      Subscribe Now
      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
    </button>
  </form>
));

NewsletterForm.displayName = 'NewsletterForm';

const Lightbox = memo(({ image, onClose, onNext, onPrev }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-[110] bg-white/10 rounded-full"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      <button 
        className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-all p-4 z-[110] bg-white/5 rounded-full hover:bg-white/10"
        onClick={onPrev}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <button 
        className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-all p-4 z-[110] bg-white/5 rounded-full hover:bg-white/10"
        onClick={onNext}
        aria-label="Next image"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <div className="relative max-w-5xl max-h-[90vh] mx-4 flex flex-col items-center">
        <img 
          src={image.url} 
          alt={image.title}
          className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="mt-8 text-center text-white">
          <span className="text-[#E63946] text-sm font-bold tracking-[0.2em] uppercase mb-2 block">
            {image.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold">
            {image.title}
          </h3>
        </div>
      </div>
    </div>
  );
});

Lightbox.displayName = 'Lightbox';

// Main Component
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState('');

  const openLightbox = useCallback((index) => {
    setCurrentIndex(index);
    setSelectedImage(IMAGES[index]);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback((e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % IMAGES.length;
    setCurrentIndex(newIndex);
    setSelectedImage(IMAGES[newIndex]);
  }, [currentIndex]);

  const prevImage = useCallback((e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    setCurrentIndex(newIndex);
    setSelectedImage(IMAGES[newIndex]);
  }, [currentIndex]);

  const handleSubscribe = useCallback((e) => {
    e.preventDefault();
    // TODO: Implement actual subscription logic
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  }, [email]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeLightbox, nextImage, prevImage]);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden" id="gallery">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]">
              <GalleryImage 
                image={IMAGES[0]} 
                index={0} 
                onClick={openLightbox}
                className="row-span-2"
              />
              <GalleryImage image={IMAGES[1]} index={1} onClick={openLightbox} />
              <GalleryImage image={IMAGES[2]} index={2} onClick={openLightbox} />
              <GalleryImage image={IMAGES[3]} index={3} onClick={openLightbox} />
              <GalleryImage image={IMAGES[4]} index={4} onClick={openLightbox} />
            </div>
          </div>

          {/* Newsletter Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#E63946] leading-tight tracking-tight">
                Stay Ahead of the Pack
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-medium">
                Sign up for tips, offers, and more
              </p>
            </div>

            <NewsletterForm 
              email={email}
              setEmail={setEmail}
              onSubmit={handleSubscribe}
            />

            <SocialLinks />
          </div>
        </div>
      </Container>

      <Lightbox 
        image={selectedImage}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
};

export default Gallery;
