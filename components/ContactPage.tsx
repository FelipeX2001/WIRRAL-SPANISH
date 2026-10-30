import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <section className="pt-36 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-brand-crimson font-bold tracking-widest uppercase text-sm">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navBlue mt-2 mb-6">Book Your Lesson</h1>
          <div className="h-1 bg-brand-supernova w-24 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Contact Details Card */}
            <div className="bg-gradient-to-br from-brand-navBlue to-brand-resolutionBlue rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-supernova/20 rounded-full blur-3xl -ml-10 -mb-10"></div>
                
                <h2 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h2>
                
                <div className="space-y-8 relative z-10">
                    <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                            <MapPin size={24} className="text-brand-supernova" />
                        </div>
                        <div>
                            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-1">Location</p>
                            <p className="text-xl font-medium">Anywhere in the world. Online lessons via Zoom</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                            <Phone size={24} className="text-brand-supernova" />
                        </div>
                        <div>
                            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-1">WhatsApp / Phone</p>
                            <a 
                                href={WHATSAPP_URL} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-xl font-medium hover:text-brand-supernova transition-colors inline-flex items-center gap-2"
                            >
                                <span>+44 7809 735716</span>
                                <span className="text-xs bg-emerald-500/80 text-white px-2 py-0.5 rounded-full font-bold">WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                            <Mail size={24} className="text-brand-supernova" />
                        </div>
                        <div>
                            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-1">Email</p>
                            <a href="mailto:claudia@wirralspanish.com" className="text-xl font-medium hover:text-brand-supernova transition-colors break-all">
                                claudia@wirralspanish.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center relative z-10">
                     <p className="font-handwriting text-2xl text-brand-supernova">¡Hablamos pronto!</p>
                </div>
            </div>

            {/* Booking Form */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold text-brand-navBlue mb-6">Send a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-navBlue focus:ring-2 focus:ring-brand-navBlue/20 outline-none transition-all" placeholder="Your name" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-navBlue focus:ring-2 focus:ring-brand-navBlue/20 outline-none transition-all" placeholder="your@email.com" />
                    </div>
                    <div>
                         <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                         <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-navBlue focus:ring-2 focus:ring-brand-navBlue/20 outline-none transition-all" placeholder="I'm interested in lessons..."></textarea>
                    </div>
                    <button className="w-full bg-brand-crimson hover:bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;