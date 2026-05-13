import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-brand-resolutionBlue to-brand-darkBlue rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Contact Info */}
            <div className="md:w-5/12 p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-brand-kleinBlue rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-6">Let's start learning!</h2>
                    <p className="text-blue-100 mb-10 text-lg">
                        Ready to embark on your Spanish journey? Reach out today to schedule your first lesson or ask any questions.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="bg-white/10 p-3 rounded-full text-brand-supernova">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-blue-200 uppercase tracking-wide">Phone / WhatsApp</p>
                                <p className="font-semibold text-lg">+44 7700 900000</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-white/10 p-3 rounded-full text-brand-supernova">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-blue-200 uppercase tracking-wide">Email</p>
                                <p className="font-semibold text-lg">claudia@wirralspanish.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-white/10 p-3 rounded-full text-brand-supernova">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-blue-200 uppercase tracking-wide">Location</p>
                                <p className="font-semibold text-lg">Wirral, UK & Online</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 relative z-10">
                    <p className="font-handwriting text-2xl text-brand-supernova transform -rotate-2">¡Hasta pronto!</p>
                </div>
            </div>

            {/* Form */}
            <div className="md:w-7/12 bg-white p-10 md:p-14">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Full Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-kleinBlue focus:ring-2 focus:ring-brand-kleinBlue/20 outline-none transition-all" placeholder="Juan Pérez" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-kleinBlue focus:ring-2 focus:ring-brand-kleinBlue/20 outline-none transition-all" placeholder="hola@email.com" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Interested In</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-kleinBlue focus:ring-2 focus:ring-brand-kleinBlue/20 outline-none transition-all">
                            <option>Individual Lessons</option>
                            <option>Group Lessons</option>
                            <option>Online Tutoring</option>
                            <option>General Inquiry</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-kleinBlue focus:ring-2 focus:ring-brand-kleinBlue/20 outline-none transition-all" placeholder="Tell me about your learning goals..."></textarea>
                    </div>

                    <button className="w-full bg-brand-crimson hover:bg-red-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                        <span>SEND MESSAGE</span>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;