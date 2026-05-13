import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-neon hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="group-hover:animate-pulse" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Chat with me!
      </span>
    </a>
  );
};

export default WhatsAppButton;