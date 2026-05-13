import React from 'react';
import { Instagram } from 'lucide-react';
import { LOGO_URL, SOCIAL_LINKS } from '../constants';

const TikTokIcon = ({ size = 20, className = "" }) => (
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

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-4 border-brand-supernova">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
           <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
             <img src={LOGO_URL} alt="Logo" className="h-8 w-auto brightness-0 invert" />
             <span className="font-bold text-xl tracking-tight">Español con Claudia</span>
           </div>
           <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-4">
           {/* Socials */}
           <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-brand-supernova transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-brand-supernova transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
                aria-label="TikTok"
              >
                <TikTokIcon size={20} />
              </a>
           </div>

           {/* Legal */}
           <div className="flex space-x-6 text-sm">
             <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
             <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;