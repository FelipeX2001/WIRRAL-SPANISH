import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Calendar } from 'lucide-react';
import { LOGO_URL, NAV_ITEMS, SOCIAL_LINKS, WHATSAPP_URL } from '../constants';
import DonationBanner from './DonationBanner';

interface NavbarProps {
  onNavigate: (page: string, sectionId?: string) => void;
  currentPage: string;
}

// Custom TikTok Icon since it's not in standard Lucide set in the same way
const TikTokIcon = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent, item: { label: string; href: string }) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (item.label === "About Me") {
      onNavigate('about');
    } else if (item.label === "Contact") {
      onNavigate('contact');
    } else if (item.label === "Group Lessons") {
      onNavigate('group');
    } else if (item.label === "Individual Lessons") {
      onNavigate('individual');
    } else if (item.label === "Blog") {
      onNavigate('blog');
    } else {
      // Extract section ID from href (e.g., "#services" -> "services")
      const sectionId = item.href.replace('#', '');
      onNavigate('home', sectionId);
    }
  };

  const isActive = (itemLabel: string) => {
    if (currentPage === 'about' && itemLabel === 'About Me') return true;
    if (currentPage === 'contact' && itemLabel === 'Contact') return true;
    if (currentPage === 'individual' && itemLabel === 'Individual Lessons') return true;
    if (currentPage === 'group' && itemLabel === 'Group Lessons') return true;
    if (currentPage === 'blog' && itemLabel === 'Blog') return true;
    if (currentPage === 'home' && itemLabel === 'Home' && window.scrollY < 100) return true;
    return false;
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40">
        <nav 
          className={`w-full transition-all duration-300 bg-white ${
            isScrolled ? 'shadow-md py-2' : 'py-3 md:py-4 shadow-xs'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center">
              {/* Logo Area */}
              <a 
                href="#home" 
                onClick={(e) => handleLinkClick(e, { label: 'Home', href: '#home' })} 
                className="flex-shrink-0 group"
              >
                <img src={LOGO_URL} alt="Español con Claudia" className="h-11 md:h-16 w-auto object-contain transition-transform group-hover:scale-105" />
              </a>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center space-x-8">
                <div className="flex space-x-8">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item)}
                      className={`font-semibold transition-colors relative group text-sm uppercase tracking-wider ${
                        isActive(item.label) 
                          ? 'text-brand-crimson' 
                          : 'text-brand-navBlue hover:text-brand-crimson'
                      }`}
                    >
                      {item.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-crimson transition-all duration-300 ${
                         isActive(item.label) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </a>
                  ))}
                </div>
                
                {/* Social Icons Desktop */}
                <div className="flex items-center space-x-3 ml-6 border-l border-gray-200 pl-6">
                  <a 
                    href={SOCIAL_LINKS.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-brand-navBlue/5 p-2 rounded-full hover:bg-brand-navBlue hover:text-white text-brand-navBlue transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href={SOCIAL_LINKS.tiktok} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-brand-navBlue/5 p-2 rounded-full hover:bg-brand-navBlue hover:text-white text-brand-navBlue transition-all duration-300"
                    aria-label="TikTok"
                  >
                    <TikTokIcon size={18} />
                  </a>
                  <a href="tel:+447809735716" className="bg-brand-crimson p-2 rounded-full hover:bg-red-600 text-white transition-all shadow-md hover:scale-110 hover:rotate-12">
                    <Phone size={18} />
                  </a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-4">
                 <a href="tel:+447809735716" className="bg-brand-crimson p-2 rounded-full text-white shadow-md hover:scale-105 transition-transform">
                    <Phone size={20} />
                  </a>
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-brand-navBlue hover:text-brand-crimson transition-colors focus:outline-none p-1"
                  aria-label="Open Menu"
                >
                  <Menu size={32} />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Sliding Emergency Donation Banner */}
        <DonationBanner />
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-[300px] sm:w-[350px] bg-white shadow-2xl transform transition-transform duration-300 ease-out lg:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
           <img src={LOGO_URL} alt="Logo" className="h-10 w-auto" />
           <button 
             onClick={() => setIsOpen(false)}
             className="text-gray-500 hover:text-brand-crimson transition-colors bg-gray-50 p-2 rounded-full hover:bg-gray-100"
             aria-label="Close Menu"
           >
             <X size={24} />
           </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex-1 overflow-y-auto py-8 px-6">
          <nav className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item)}
                className={`group flex items-center justify-between text-xl font-bold transition-colors border-b border-gray-50 pb-2 ${
                   isActive(item.label)
                   ? 'text-brand-crimson' 
                   : 'text-brand-navBlue hover:text-brand-crimson'
                }`}
              >
                <span>{item.label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-supernova">
                  →
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-12">
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Social Connect</h3>
             <div className="flex space-x-4">
                <a 
                  href={SOCIAL_LINKS.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-brand-navBlue text-white p-3 rounded-xl shadow-lg hover:bg-brand-resolutionBlue transition-transform hover:-translate-y-1"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href={SOCIAL_LINKS.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-brand-navBlue text-white p-3 rounded-xl shadow-lg hover:bg-brand-resolutionBlue transition-transform hover:-translate-y-1"
                >
                  <TikTokIcon size={20} />
                </a>
             </div>
          </div>
        </div>
        
        {/* Sidebar Footer */}
         <div className="p-6 bg-gray-50 border-t border-gray-100">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-brand-crimson text-white font-bold py-4 rounded-xl shadow-neon hover:bg-red-600 transition-all hover:shadow-lg space-x-2"
            >
               <Calendar size={20} />
               <span>Book a Lesson</span>
            </a>
         </div>
      </div>
    </>
  );
};

export default Navbar;