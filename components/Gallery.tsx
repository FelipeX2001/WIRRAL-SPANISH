import React from 'react';
import { Instagram, Calendar } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const images = [
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(4).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(7).jpg", 
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(8).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(9).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(10).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(11).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(12).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(13).jpg"
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/Torre-del-Reloj-en-Cartagena-de-Indias-Colombia.webp" 
          alt="Cartagena Colombia" 
          className="w-full h-full object-cover"
        />
        {/* Blue overlay with opacity */}
        <div className="absolute inset-0 bg-brand-darkBlue/90 mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex justify-between items-end mb-12">
            <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Student Life</h2>
                <p className="text-brand-supernova text-lg">More than just a classroom.</p>
            </div>
            
            <a 
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-white text-brand-darkBlue px-6 py-3 rounded-full hover:bg-gray-100 hover:scale-105 transition-all font-semibold shadow-lg group"
            >
                <Instagram size={20} className="group-hover:rotate-12 transition-transform" />
                View Instagram
            </a>
        </div>

        {/* Featured Recent Event */}
        <div className="mb-16 bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transform hover:scale-[1.01] transition-transform duration-300">
            <div className="md:w-1/2 relative h-72 md:h-auto">
                 <img 
                    src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/WhatsApp%20Image%202026-02-06%20at%207.33.32%20AM.jpeg" 
                    alt="Mexican Food Night" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute top-4 left-4 bg-brand-crimson text-white font-bold px-4 py-1.5 rounded-xl text-sm shadow-lg flex items-center gap-2 border-2 border-white/20">
                    <Calendar size={14} />
                    <span>Recent Event</span>
                 </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="text-gray-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-brand-supernova"></span>
                    16th January 2026
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-navBlue mb-4 leading-tight">
                    Sharing delicious Mexican food with the Total beginners group🙌🏽
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Learning a language is also about sharing culture and good moments. We had a fantastic time tasting authentic flavors!
                </p>
                <div className="flex items-center text-brand-crimson font-semibold text-sm">
                    Student Community
                </div>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((src, i) => (
                <div key={i} className={`rounded-xl overflow-hidden shadow-lg border-4 border-white/10 transform transition-all hover:scale-105 hover:z-20 hover:border-brand-supernova ${i % 2 === 0 ? 'md:translate-y-8' : ''}`}>
                    <img src={src} alt={`Gallery ${i}`} className="w-full h-64 object-cover" />
                </div>
            ))}
        </div>

        {/* Mobile Button (visible only on small screens) */}
        <div className="mt-12 md:hidden text-center">
            <a 
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-darkBlue px-6 py-3 rounded-full hover:bg-gray-100 transition-all font-semibold shadow-lg"
            >
                <Instagram size={20} />
                View Instagram
            </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;