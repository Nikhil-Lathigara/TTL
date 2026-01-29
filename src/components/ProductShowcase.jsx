import { Headset, Info, Package, TruckIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ProductShowcase = ({ reverse = false, title, subtitle, description, buttonText = "Get Race Ready", imageSrc }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Package size={20} className="sm:w-6 sm:h-6" />,
      title: 'Quality Products',
    },
    {
      icon: <TruckIcon size={20} className="sm:w-6 sm:h-6" />,
      title: 'Fast Delivery',
    },
    {
      icon: <Headset size={20} className="sm:w-6 sm:h-6" />,
      title: '24/7 Support',
    },
    {
      icon: <Info size={20} className="sm:w-6 sm:h-6" />,
      title: 'Expert Advice',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      

      {/* Feature Cards */}
      <div className="relative z-10 -mt-32 mb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-pink-100 border border-pink-100 rounded-2xl sm:rounded-full p-3 sm:p-2 shadow-lg flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-[#E63946] flex-shrink-0 bg-white rounded-full p-2.5 sm:p-3 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-gray-900 text-xs sm:text-sm font-medium text-center sm:text-left sm:pr-2 leading-tight">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* First Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse lg:flex' : ''}`}>
          
          {/* Content */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700 delay-100`}>
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h2>
            )}
            
            {subtitle && (
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">{subtitle.normal}</span>
                {subtitle.highlight && (
                  <>
                    <br />
                    <span className="text-[#E63946] relative inline-block">
                      {subtitle.highlight}
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-pink-100 -z-10"></span>
                    </span>
                  </>
                )}
              </h3>
            )}
            
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              {description || "From joint health to muscle strength, our products keep your horse fit, fast, and ready to win. With advanced formulations trusted by top trainers, you can push past the competition and achieve the results you've been aiming for."}
            </p>
            
            <button className="bg-gradient-to-r from-[#E63946] to-[#d62839] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2 group">
              {buttonText}
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Image */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700 delay-300`}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E63946]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src={imageSrc || "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80"}
                alt={title || subtitle?.normal || "Horse racing"}
                className="w-full h-[350px] sm:h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-16 md:mt-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Image */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700 delay-100 order-2 lg:order-1`}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tl from-[#E63946]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src={imageSrc || "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80"}
                alt={title || subtitle?.normal || "Horse racing"}
                className="w-full h-[350px] sm:h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700 delay-300 order-1 lg:order-2`}>
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h2>
            )}
            
            {subtitle && (
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">{subtitle.normal}</span>
                {subtitle.highlight && (
                  <>
                    <br />
                    <span className="text-[#E63946] relative inline-block">
                      {subtitle.highlight}
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-pink-100 -z-10"></span>
                    </span>
                  </>
                )}
              </h3>
            )}
            
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              {description || "From joint health to muscle strength, our products keep your horse fit, fast, and ready to win. With advanced formulations trusted by top trainers, you can push past the competition and achieve the results you've been aiming for."}
            </p>
            
            <button className="bg-gradient-to-r from-[#E63946] to-[#d62839] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2 group">
              {buttonText}
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;