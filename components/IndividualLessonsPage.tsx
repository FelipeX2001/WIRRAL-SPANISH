import React from 'react';
import { Laptop, MapPin, CheckCircle, Calendar } from 'lucide-react';

interface Props {
  onNavigate: (page: string) => void;
}

const IndividualLessonsPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="pt-36 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-crimson font-bold tracking-widest uppercase text-sm">One-on-One Coaching</span>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navBlue mt-2 mb-6">Individual Lessons</h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Tailored specifically to your needs. Whether you require private <span className="font-semibold text-brand-navBlue">Spanish classes in the Wirral</span> or <span className="font-semibold text-brand-navBlue">flexible online sessions accessible from anywhere</span>, we help you reach fluency faster.
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            
            {/* Online Card */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border border-blue-100 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navBlue/5 rounded-full -mr-10 -mt-10 group-hover:bg-brand-navBlue/10 transition-colors"></div>
                <div className="bg-brand-navBlue/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-navBlue">
                    <Laptop size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-navBlue mb-2">Online (Zoom)</h3>
                <p className="text-gray-600 mb-6">Learn from the comfort of your home. Flexible scheduling that fits your lifestyle, perfect for students wanting to learn from home without the commute.</p>
                <div className="text-4xl font-bold text-brand-crimson mb-2">£30 <span className="text-lg text-gray-500 font-normal">/ hour</span></div>
            </div>

            {/* In Person Card */}
            <div className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-8 border border-yellow-100 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-supernova/10 rounded-full -mr-10 -mt-10 group-hover:bg-brand-supernova/20 transition-colors"></div>
                <div className="bg-brand-supernova/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-resolutionBlue">
                    <MapPin size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-navBlue mb-2">In Person</h3>
                <p className="text-gray-600 mb-6">Face-to-face interaction for immersive conversational practice. We offer the most engaging <span className="font-semibold text-brand-navBlue/80">Spanish classes the Wirral</span> has to offer.</p>
                <div className="text-4xl font-bold text-brand-crimson mb-2">£30–£35 <span className="text-lg text-gray-500 font-normal">/ hour</span></div>
                <p className="text-sm text-gray-500 italic">* The exact price depends on the location.</p>
            </div>
        </div>

        {/* Why Individual Section */}
        <div className="bg-brand-navBlue rounded-3xl p-10 md:p-16 text-white mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why choose individual lessons?</h2>
                    <ul className="space-y-4">
                        {[
                            "Personalized curriculum adapted to your pace",
                            "Immediate feedback and correction",
                            "Flexible scheduling to fit your calendar",
                            "Focus on specific vocabulary (Travel, Business, Medical)",
                            "Confidence building in a private setting"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <CheckCircle className="text-brand-supernova mr-3 flex-shrink-0 mt-1" size={20} />
                                <span className="text-blue-50 text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                    <h3 className="text-2xl font-bold text-brand-supernova mb-4">Ready to start?</h3>
                    <p className="mb-8 text-blue-100">Book your first lesson today and start your journey to fluency.</p>
                    <button 
                        onClick={() => onNavigate('contact')}
                        className="bg-brand-crimson hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full flex items-center justify-center gap-2"
                    >
                        <Calendar size={20} />
                        Book Now
                    </button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default IndividualLessonsPage;