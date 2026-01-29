import { memo } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// Constants
const QUICK_LINKS = [
  { name: 'Shop', href: '#shop' },
  { name: 'About', href: '#about' },
  { name: 'Bundles', href: '#bundles' },
  { name: 'Contact', href: '#contact' },
];

const CONTACT_INFO = [
  {
    icon: Mail,
    text: 'contact@company.com',
    type: 'email'
  },
  {
    icon: Phone,
    text: '(414) 687 - 5892',
    type: 'phone'
  },
  {
    icon: MapPin,
    text: '794 Mcallister St San Francisco, 94102',
    type: 'address'
  },
];

// Subcomponents
const ContactItem = memo(({ icon: Icon, text, type }) => (
  <li className="flex items-start gap-4 group">
    <div className={`text-white mt-0.5 flex-shrink-0 ${type === 'phone' ? 'transform rotate-[10deg]' : ''}`}>
      <Icon className="w-6 h-6" />
    </div>
    <span className="text-gray-300 text-base leading-relaxed">
      {text}
    </span>
  </li>
));

ContactItem.displayName = 'ContactItem';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Brand & Trust Section */}
          <div className="">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src="/footer.png" 
                  alt="Drug Free Badge" 
                  className="w-40 sm:w-48 lg:w-56 h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-2 leading-tight">
                  <span className="text-[#E33B32]">Trust</span> in Every Scoop
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-snug">
                  Non-swabbale formulas for your peace of mind
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-extrabold mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#E33B32] transition-colors duration-300 text-base font-medium inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-extrabold mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-5">
              {CONTACT_INFO.map((contact, index) => (
                <ContactItem
                  key={index}
                  icon={contact.icon}
                  text={contact.text}
                  type={contact.type}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-medium">
            Copyright © 2024 The Trainer Locker
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-gray-400">
            <span>All Rights Reserved</span>
            <span className="hidden sm:inline">|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms and Conditions
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;