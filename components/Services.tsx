import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  
  const handleServiceClick = (title: string) => {
    if (title.includes("Group")) {
        onNavigate('group');
    } else {
        onNavigate('individual');
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-brand-crimson font-bold tracking-widest uppercase text-sm">Choose your path</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navBlue mt-2 mb-6">Learning Options</h2>
          <p className="text-gray-600 text-lg">Whether you prefer the social energy of a group or the focused attention of one-on-one coaching.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              
              <div className="relative h-64 overflow-hidden">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-brand-darkBlue/40 group-hover:bg-brand-darkBlue/20 transition-colors"></div>
                <div className="absolute bottom-0 right-0 bg-brand-supernova text-brand-darkBlue px-6 py-2 rounded-tl-2xl font-bold text-lg">
                    {service.price}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-3xl font-bold text-brand-catalinaBlue mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                
                <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                            <CheckCircle2 size={20} className="text-brand-steelBlue mr-3 flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <button 
                  onClick={() => handleServiceClick(service.title)}
                  className="w-full flex items-center justify-center space-x-2 bg-brand-resolutionBlue text-white font-semibold py-4 rounded-xl hover:bg-brand-navBlue transition-colors group-hover:shadow-neon"
                >
                   <span>View Details & Schedule</span>
                   <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;