import { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import Container from './common/Container';
import Button from './common/Button';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gradient-to-b from-black/90 to-bg-transparent py-2' : 'bg-transparent py-4'}`}>
      {/* Top Banner */}
      {!scrolled && (
        <div className="bg-[#E63946] text-white py-2.5 px-4 text-center text-xs md:text-sm absolute top-0 left-0 w-full animate-slide-down">
          <span className="font-bold tracking-wider">🔓 UNLOCK THE PRE-RACE PASTE</span> Find the sprint to the finish! | <span className="underline">FREE with a 2 pack</span>
        </div>
      )}

      <Container className={!scrolled ? 'mt-10' : ''}>
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Left Side */}
          <a href="/" className="flex items-center group z-10">
            <img 
              src="/logo.png" 
              alt="TTL Logo" 
              className={`transition-all duration-500 ${scrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'} w-auto`}
            /> 
          </a>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-[#E63946] relative group ${scrolled ? 'text-white' : 'text-white'}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E63946] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Icon */}
            <button 
              className={`transition-all duration-300 hover:text-[#E63946] ${scrolled ? 'text-white' : 'text-white'}`}
              aria-label="Search"
            >
              <Search size={22} strokeWidth={2} />
            </button>

            {/* Cart Icon */}
            <button 
              className={`transition-all duration-300 hover:text-[#E63946] relative ${scrolled ? 'text-white' : 'text-white'}`}
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={22} strokeWidth={2} />
              {/* Cart Badge */}
              <span className="absolute -top-2 -right-2 bg-[#E63946] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Profile Icon */}
            <button 
              className={`transition-all duration-300 hover:text-[#E63946] ${scrolled ? 'text-white' : 'text-white'}`}
              aria-label="Profile"
            >
              <User size={22} strokeWidth={2} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-black text-white hover:text-[#E63946] transition-all duration-300 transform"
              style={{ transitionDelay: `${index * 50}ms`, transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)' }}
            >
              {link.label}
            </a>
          ))}
          
          {/* Mobile Icons */}
          <div className="flex items-center gap-8 pt-8">
            <button className="text-white hover:text-[#E63946] transition-colors">
              <Search size={28} />
            </button>
            <button className="text-white hover:text-[#E63946] transition-colors relative">
              <ShoppingCart size={28} />
              <span className="absolute -top-2 -right-2 bg-[#E63946] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="text-white hover:text-[#E63946] transition-colors">
              <User size={28} />
            </button>
          </div>

          <div className="pt-4">
            <Button size="lg" onClick={() => setIsMenuOpen(false)}>
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;