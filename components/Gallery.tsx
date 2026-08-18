import React, { useState, useEffect } from 'react';
import { Instagram, Calendar, MapPin, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

interface RecentEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  location?: string;
  image: string;
}

const recentEvents: RecentEvent[] = [
  {
    id: "tapas-west-kirby-aug",
    title: "Tapas and wine 🍷 with a mixed group of students - Salud 🥂",
    date: "7th August 2026",
    location: "West Kirby",
    description: "Bringing students of different levels together in West Kirby for an evening of authentic Spanish conversation, good wine, and delicious tapas.",
    category: "Community Gathering",
    image: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/Tapas%20and%20wine_7_agosto.jpeg"
  },
  {
    id: "salsa-liverpool-jul",
    title: "Salsa 💃🏽 en Liverpool",
    date: "31st July 2026",
    location: "Liverpool",
    description: "An unforgettable cultural evening enjoying Latin rhythm, salsa dancing, and great moments together outside the classroom.",
    category: "Social Outing",
    image: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/Salsa%20en%20Liverpool%2C%2031%20de%20julio%20de%202026.jpeg"
  },
  {
    id: "tapas-advanced-jul",
    title: "Tapas & Wine - Advanced Group 🙌🏽 \"Salud!\"",
    date: "26th July 2026",
    location: "Wirral",
    description: "Practicing fluent conversational Spanish in a relaxed and social atmosphere over exquisite tapas and wine.",
    category: "Advanced Group",
    image: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/advanced_group_26_jul.jpeg"
  },
  {
    id: "mexican-beginners-jan",
    title: "Sharing delicious Mexican food with the Total beginners group🙌🏽",
    date: "16th January 2026",
    location: "Wirral",
    description: "Learning a language is also about sharing culture and good moments. We had a fantastic time tasting authentic Mexican flavors!",
    category: "Total Beginners",
    image: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/WhatsApp%20Image%202026-02-06%20at%207.33.32%20AM.jpeg"
  }
];

const images = [
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(4).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(7).jpg", 
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(8).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(9).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(10).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(11).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(12).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(13).jpg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/liverpool_night_dinner%20(1).jpeg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/the_nook.jpeg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/liverpool_night_dinner%20(3).jpeg",
  "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/liverpool_night_dinner%20(4).jpeg"
];

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
      }
    };

    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  };

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

        {/* Featured Recent Events Grid (4 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {recentEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col transform hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-crimson text-white font-bold px-3.5 py-1.5 rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2 border-2 border-white/20">
                  <Calendar size={14} />
                  <span>Recent Event</span>
                </div>
                {event.location && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white font-medium px-3 py-1 rounded-xl text-xs flex items-center gap-1">
                    <MapPin size={12} className="text-brand-supernova" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <div className="text-gray-400 font-bold mb-2 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-brand-supernova"></span>
                    {event.date}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navBlue mb-3 leading-snug group-hover:text-brand-crimson transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed">
                    {event.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-brand-crimson bg-red-50 px-3 py-1 rounded-lg">
                    {event.category}
                  </span>
                  <span className="text-gray-400 font-normal">Spanish Community</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Grid with Click-to-Enlarge */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((src, i) => (
                <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedImageIndex(i)}
                    aria-label={`View photo ${i + 1} full size`}
                    className={`group relative text-left rounded-xl overflow-hidden shadow-lg border-4 border-white/10 transform transition-all hover:scale-105 hover:z-20 hover:border-brand-supernova focus:outline-none focus:ring-4 focus:ring-brand-supernova active:scale-95 cursor-pointer ${i % 2 === 0 ? 'md:translate-y-8' : ''}`}
                >
                    <img 
                      src={src} 
                      alt={`Gallery moment ${i + 1}`} 
                      className="w-full h-64 object-cover group-hover:brightness-105 transition-all duration-300" 
                    />
                    {/* Hover/Touch visual hint */}
                    <div className="absolute inset-0 bg-brand-darkBlue/30 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-black/60 backdrop-blur-sm text-white p-2.5 rounded-full shadow-lg">
                        <Maximize2 size={20} className="text-brand-supernova" />
                      </div>
                    </div>
                </button>
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

      {/* Lightbox Modal for Full Image View (Mobile & Desktop) */}
      {selectedImageIndex !== null && (
        <div 
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery photo preview"
        >
          {/* Close Button (X) */}
          <button
            type="button"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close photo preview"
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 bg-white/20 hover:bg-white/40 active:bg-white text-white active:text-gray-900 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl transition-transform hover:scale-110 active:scale-95"
          >
            <X size={28} className="stroke-[2.5]" />
          </button>

          {/* Navigation Previous Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous photo"
              className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/40 text-white w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-xl transition-transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Navigation Next Button */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next photo"
              className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/40 text-white w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-xl transition-transform hover:scale-110 active:scale-95"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Image Container */}
          <div 
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImageIndex]}
              alt={`Spanish Lessons student moment ${selectedImageIndex + 1}`}
              className="max-h-[80vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-2xl shadow-2xl border-2 border-white/20 select-none"
            />
            {/* Image counter indicator */}
            <div className="mt-4 text-white/80 font-medium text-sm sm:text-base bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;