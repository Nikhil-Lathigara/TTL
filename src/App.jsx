import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import HeroProductSection from './components/Heroproductsection';
import TestimonialCarousel from './components/TestimonialCarousel';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="">
        <ProductShowcase 
          title={
            <>
              Uniquely formulated<br />
              for horse trainers<br />
              <span className="text-[#E63946]">Who Want to Win</span>
            </>
          }
          description="From joint health to muscle strength, our products keep your horse fit, fast, and ready to win. With advanced formulations trusted by top trainers, you can push past the competition and achieve the results you've been aiming for."
          imageSrc="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80"
        />
      <ProductGrid />
      <HeroProductSection/>
      <TestimonialCarousel/>
      <Subscribe/>
      <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;

