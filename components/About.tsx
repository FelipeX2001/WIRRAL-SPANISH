import React from 'react';
import { ABOUT_TEXT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          {/* Image Side */}
          <div className="w-full md:w-1/3 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-4 border-brand-supernova rounded-2xl z-0"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-brand-darkBlue">
                <img 
                  src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(1).jpg" 
                  alt="Claudia Teacher" 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-darkBlue to-transparent p-6 pt-20">
                    <h3 className="text-white font-bold text-2xl">Hola! I'm Claudia</h3>
                    <p className="text-brand-supernova font-medium">Native Spanish Tutor</p>
                </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold text-brand-darkBlue mb-6 flex items-center">
              About <span className="text-brand-crimson ml-2">Claudia</span>
              <div className="h-1 bg-brand-supernova w-20 ml-4 rounded-full"></div>
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
                {ABOUT_TEXT.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="first-letter:text-5xl first-letter:font-bold first-letter:text-brand-catalinaBlue first-letter:float-left first-letter:mr-3">
                        {paragraph}
                    </p>
                ))}
            </div>

            <div className="mt-8 flex items-center space-x-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block text-3xl font-bold text-brand-kleinBlue">25+</span>
                    <span className="text-sm text-gray-500 uppercase font-semibold">Years Teaching</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block text-3xl font-bold text-brand-kleinBlue">🇬🇷 🇨🇴 🇬🇧</span>
                    <span className="text-sm text-gray-500 uppercase font-semibold">International</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;