import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight, Star } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface HeroProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

const HERO_IMAGES = [
  {
    src: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/advanced_group_26_jul.jpeg",
    alt: "Advanced Spanish Group - Tapas & Wine"
  },
  {
    src: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/the_nook.jpeg",
    alt: "Spanish Dinner Night Out"
  },
  {
    src: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/liverpool_night_dinner%20(1).jpeg",
    alt: "Liverpool Night Dinner with Students"
  },
  {
    src: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/Tapas%20and%20wine_7_agosto.jpeg",
    alt: "Tapas and Wine with Students"
  }
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative pt-32 md:pt-36 pb-16 min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop" 
          alt="Madrid Spain Architecture" 
          className="w-full h-full object-cover"
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-catalinaBlue/90 via-brand-kleinBlue/80 to-brand-darkBlue/70 mix-blend-multiply"></div>
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-white space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-brand-supernova text-brand-darkBlue px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider shadow-neon-yellow transform -skew-x-6">
            <Star size={16} fill="currentColor" />
            <span>Interactive Lessons</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            Looking for Spanish lessons <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-supernova to-brand-turbo">anywhere in the World?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 font-light max-w-lg leading-relaxed">
            Learn Spanish with a native tutor. This course will lead you from complete beginner to fluent.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
             <div className="bg-white text-brand-darkBlue px-6 py-4 rounded-xl font-black text-2xl shadow-lg transform rotate-2 border-l-8 border-brand-crimson">
                FROM £10 / hour!
             </div>
             
             <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-brand-crimson hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-neon transition-all duration-300 hover:-translate-y-1 cursor-pointer"
             >
                <Calendar className="group-hover:animate-bounce" />
                <span>BOOK NOW</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>

        {/* Visual Element / Card */}
        <div className="hidden md:block relative">
           {/* Abstract shapes behind */}
           <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-supernova rounded-full blur-3xl opacity-30 animate-pulse"></div>
           <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-crimson rounded-full blur-3xl opacity-30"></div>
           
           <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {/* Rotating Image Container */}
              <div className="relative rounded-2xl shadow-lg mb-6 w-full h-64 overflow-hidden border border-white/20">
                {HERO_IMAGES.map((image, index) => (
                  <img 
                    key={image.src}
                    src={image.src} 
                    alt={image.alt} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  />
                ))}

                {/* Subtle Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/10 z-10">
                  {HERO_IMAGES.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      type="button"
                      onClick={() => setCurrentImageIndex(dotIndex)}
                      aria-label={`Show image ${dotIndex + 1}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        dotIndex === currentImageIndex
                          ? 'w-6 h-2 bg-brand-supernova'
                          : 'w-2 h-2 bg-white/50 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                   <h3 className="text-white text-2xl font-bold">25 Years Experience</h3>
                   <p className="text-blue-100">Top Rated Spanish Classes Online & Worldwide</p>
                </div>
                <div className="flex space-x-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={20} className="text-brand-supernova" fill="#fcc803" />)}
                </div>
              </div>
           </div>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-brand-supernova rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;