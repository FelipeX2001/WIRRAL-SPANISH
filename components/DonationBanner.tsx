import React from 'react';
import { Heart, ExternalLink, AlertCircle } from 'lucide-react';

const DonationBanner: React.FC = () => {
  const donationUrl = "https://www.cruzrojacolombiana.org/";

  const messageItems = [
    {
      badge: "EMERGENCY APPEAL",
      text: "Support victims of the earthquake in Colombia — Provide urgent food, medical aid & shelter via Cruz Roja Colombiana (Colombian Red Cross).",
      cta: "Click anywhere to donate now"
    },
    {
      badge: "STAND WITH COLOMBIA",
      text: "Thousands of families have been affected. Your generosity delivers immediate on-the-ground humanitarian relief.",
      cta: "Donate directly here"
    },
    {
      badge: "OFFICIAL RELIEF FUND",
      text: "Every contribution saves lives and brings hope to communities in crisis. 100% official donation channel.",
      cta: "Make an impact today"
    }
  ];

  return (
    <a
      href={donationUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Donate to the Colombian Red Cross for earthquake victims"
      className="block w-full bg-gradient-to-r from-red-700 via-brand-crimson to-red-700 text-white overflow-hidden shadow-inner py-2 sm:py-2.5 transition-all hover:brightness-110 cursor-pointer border-b border-red-800/40 relative z-30 group"
    >
      <div className="relative flex items-center overflow-hidden">
        {/* Continuous scrolling marquee from right to left */}
        <div className="animate-marquee flex items-center shrink-0 space-x-8 sm:space-x-12 select-none">
          {/* First sequence */}
          {messageItems.map((item, idx) => (
            <div key={`msg-1-${idx}`} className="flex items-center space-x-3 text-xs sm:text-sm font-medium tracking-wide">
              <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full font-bold uppercase text-[10px] sm:text-xs tracking-wider border border-white/30">
                <AlertCircle size={13} className="text-brand-supernova" />
                <span>{item.badge}</span>
              </span>
              <span>🇨🇴 {item.text}</span>
              <span className="font-bold underline decoration-brand-supernova decoration-2 underline-offset-2 flex items-center gap-1 text-brand-supernova group-hover:text-white transition-colors">
                <Heart size={13} className="fill-current text-white" />
                {item.cta}
                <ExternalLink size={13} />
              </span>
              <span className="text-white/40 font-bold px-2">•</span>
            </div>
          ))}

          {/* Duplicated sequence for infinite seamless loop */}
          {messageItems.map((item, idx) => (
            <div key={`msg-2-${idx}`} className="flex items-center space-x-3 text-xs sm:text-sm font-medium tracking-wide">
              <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full font-bold uppercase text-[10px] sm:text-xs tracking-wider border border-white/30">
                <AlertCircle size={13} className="text-brand-supernova" />
                <span>{item.badge}</span>
              </span>
              <span>🇨🇴 {item.text}</span>
              <span className="font-bold underline decoration-brand-supernova decoration-2 underline-offset-2 flex items-center gap-1 text-brand-supernova group-hover:text-white transition-colors">
                <Heart size={13} className="fill-current text-white" />
                {item.cta}
                <ExternalLink size={13} />
              </span>
              <span className="text-white/40 font-bold px-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default DonationBanner;
