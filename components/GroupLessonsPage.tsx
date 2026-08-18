import React from 'react';
import { Calendar, Users, MapPin, Video, Clock } from 'lucide-react';

interface Props {
  onNavigate: (page: string) => void;
}

const GroupLessonsPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-crimson font-bold tracking-widest uppercase text-sm">Community Learning</span>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navBlue mt-2 mb-6">Group Lessons</h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Interactive, fun, and social. Perfect for those looking for <span className="font-semibold text-brand-navBlue">Spanish classes in Wirral for adults</span> or searching for <span className="font-semibold text-brand-navBlue">interactive online lessons</span> to meet new people while learning.
          </p>
        </div>

        {/* Term Info Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border-t-8 border-brand-supernova">
            <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-gray-100">
                    <div>
                        <h2 className="text-3xl font-bold text-brand-navBlue mb-2">Winter Term 2026</h2>
                        <div className="flex items-center text-gray-500">
                            <Calendar size={18} className="mr-2 text-brand-crimson" />
                            <span>12 Lessons Course</span>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 bg-brand-navBlue/5 px-6 py-3 rounded-xl border border-brand-navBlue/10">
                         <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Term Dates</div>
                         <div className="text-brand-navBlue font-bold text-lg">12 Jan - 30 Mar 2026</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <div className="flex items-center mb-3">
                            <Users size={24} className="text-brand-navBlue mr-3" />
                            <h3 className="font-bold text-xl text-brand-navBlue">Standard Group</h3>
                        </div>
                        <p className="text-4xl font-bold text-brand-crimson mb-1">£120 <span className="text-base text-gray-500 font-normal">/ person</span></p>
                        <p className="text-sm text-gray-600 font-medium mb-1">For full 12-week course</p>
                        <p className="text-xs text-gray-500 italic">*Based on minimum of 3 students</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                        <div className="flex items-center mb-3">
                            <Users size={24} className="text-brand-resolutionBlue mr-3" />
                            <h3 className="font-bold text-xl text-brand-navBlue">Small Group (2)</h3>
                        </div>
                         <p className="text-4xl font-bold text-brand-crimson mb-1">£15 <span className="text-base text-gray-500 font-normal">/ person / hour</span></p>
                        <p className="text-sm text-gray-600">*If class has only 2 students</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Timetable Section */}
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navBlue mb-8 text-center flex items-center justify-center">
                <Clock className="mr-3 text-brand-supernova" />
                Group Timetable
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                
                {/* Beginners */}
                <div className="space-y-6">
                     <h3 className="text-xl font-bold text-white bg-brand-navBlue py-3 px-6 rounded-xl text-center shadow-lg">Beginner / A2</h3>
                     
                     <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-brand-supernova relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-brand-supernova text-brand-darkBlue text-xs font-bold px-3 py-1 rounded-bl-lg">
                            Beginners Plus (A2)
                        </div>
                        <div className="flex justify-between items-center mb-4 mt-2">
                            <span className="font-bold text-lg text-gray-800">Monday</span>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">In Person</span>
                        </div>
                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-center"><Clock size={16} className="mr-2 text-brand-navBlue" /> 6:30pm – 7:30pm</div>
                            <div className="flex items-center"><MapPin size={16} className="mr-2 text-brand-navBlue" /> West Kirby Tap bar</div>
                            <div className="font-semibold text-brand-crimson">£120 (12 weeks)</div>
                        </div>
                     </div>

                     <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-brand-navBlue">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-lg text-gray-800">Tuesday</span>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">Online</span>
                        </div>
                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-center"><Clock size={16} className="mr-2 text-brand-navBlue" /> 6:45pm – 7:45pm</div>
                            <div className="flex items-center"><Video size={16} className="mr-2 text-brand-navBlue" /> Zoom</div>
                            <div className="font-semibold text-brand-crimson">£10 / hr</div>
                        </div>
                     </div>

                     <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-brand-navBlue">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-lg text-gray-800">Friday</span>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">Online</span>
                        </div>
                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-center"><Clock size={16} className="mr-2 text-brand-navBlue" /> 11:00am – 12:00pm</div>
                            <div className="flex items-center"><Video size={16} className="mr-2 text-brand-navBlue" /> Zoom</div>
                            <div className="font-semibold text-brand-crimson">£10 / hr</div>
                        </div>
                     </div>
                </div>

                {/* Intermediate */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white bg-brand-resolutionBlue py-3 px-6 rounded-xl text-center shadow-lg">Intermediate</h3>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-brand-navBlue">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-lg text-gray-800">Tuesday</span>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">Online</span>
                        </div>
                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-center"><Clock size={16} className="mr-2 text-brand-navBlue" /> 8:00pm – 9:00pm</div>
                            <div className="flex items-center"><Video size={16} className="mr-2 text-brand-navBlue" /> Zoom</div>
                            <div className="font-semibold text-brand-crimson">£10 / hr</div>
                        </div>
                     </div>
                </div>

                {/* Advanced */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white bg-brand-darkBlue py-3 px-6 rounded-xl text-center shadow-lg">Advanced</h3>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-gray-400">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-lg text-gray-800">Monday</span>
                        </div>
                        <div className="space-y-3 text-gray-600">
                            <div className="flex items-center"><Clock size={16} className="mr-2 text-brand-navBlue" /> 8:00pm – 9:00pm</div>
                            <div className="flex items-center text-sm italic text-gray-400">Location TBD</div>
                            <div className="font-semibold text-brand-crimson">£10 / hr</div>
                        </div>
                     </div>
                </div>

            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <button 
                    onClick={() => onNavigate('contact')}
                    className="bg-brand-crimson hover:bg-red-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
                >
                    <Calendar size={20} />
                    Reserve Your Spot
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default GroupLessonsPage;