import React from 'react';
import { Heart, ArrowRight, ExternalLink, AlertTriangle, Users, Activity, HelpCircle } from 'lucide-react';

interface ColombiaEmergencyBannerProps {
  onNavigate: (page: string, sectionId?: string, postId?: string) => void;
}

const ColombiaEmergencyBanner: React.FC<ColombiaEmergencyBannerProps> = ({ onNavigate }) => {
  return (
    <section className="relative z-20 py-12 md:py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white border-y border-red-900/40 overflow-hidden">
      {/* Background subtle atmospheric glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-crimson/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-supernova/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-red-600/40 shadow-2xl backdrop-blur-md">
          
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-brand-crimson text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-md animate-pulse">
                  <AlertTriangle size={14} className="text-brand-supernova" />
                  Urgent Disaster Relief
                </span>
                <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                  Official Humanitarian Appeal
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
                Standing with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-supernova via-yellow-300 to-amber-400">Colombia</span> After the Devastating Earthquake
              </h2>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                As a native Colombian born to a Colombian mother, this tragedy touches my heart deeply. Hundreds of communities have suffered catastrophic damage. Our Wirral & international community is coming together to support life-saving efforts on the ground.
              </p>

              {/* Key Disaster Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-brand-crimson block">+300</span>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Fatalities</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-brand-supernova block">4,187</span>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Injured</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 block">143</span>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Missing</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 text-center">
                  <span className="text-2xl sm:text-3xl font-black text-blue-400 block">+120k</span>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">Families</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('blog', undefined, 'colombia-earthquake-emergency')}
                  className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <span>Read Full Appeal & Report</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-brand-crimson" />
                </button>

                <a
                  href="https://www.cruzrojacolombiana.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-crimson hover:bg-red-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
                >
                  <Heart size={18} className="fill-current text-white" />
                  <span>Donate to Cruz Roja</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Right Image / Card Column */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => onNavigate('blog', undefined, 'colombia-earthquake-emergency')}
                className="group relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 cursor-pointer bg-gray-800"
              >
                <img
                  src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/terremoto_colombia_04.png"
                  alt="Earthquake in Colombia - Emergency Appeal"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-brand-supernova text-xs font-bold uppercase tracking-wider mb-1">
                    Special Blog Dispatch 🇨🇴
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-brand-supernova transition-colors mb-2">
                    How We Can Support Colombian Families from the UK
                  </h3>
                  <div className="flex items-center text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    Click to open complete article <ArrowRight size={16} className="ml-1.5" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ColombiaEmergencyBanner;
