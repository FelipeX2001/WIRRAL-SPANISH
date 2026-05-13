import React from 'react';
import { Quote } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <section className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Removed the red 'My Story' kicker */}
          <h1 className="text-4xl md:text-6xl font-bold text-brand-darkBlue mt-2 mb-6 uppercase">MY STORY</h1>
          <div className="h-1 bg-brand-supernova w-24 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
             <div className="w-3/4 mx-auto md:w-5/12 md:mx-0 relative flex-shrink-0">
                <div className="absolute top-4 -left-4 w-full h-full border-4 border-brand-supernova rounded-2xl z-0"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/claudia_perfil.jpeg" 
                      alt="Claudia Profile" 
                      className="w-full h-auto object-cover"
                    />
                </div>
             </div>
             
             {/* Text Part 1 */}
             <div className="w-full md:w-7/12 space-y-6 text-gray-700 text-xl leading-relaxed font-light">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-brand-catalinaBlue first-letter:float-left first-letter:mr-3">
                   I'm <span className="font-semibold text-brand-resolutionBlue">half Greek</span> (born in Greece, my father was Greek) and I'm <span className="font-semibold text-brand-resolutionBlue">half Colombian</span> (lived there all my childhood, my mother is Colombian).
                </p>
                <p>
                   My <span className="font-semibold text-brand-resolutionBlue">mother tongue is Spanish</span> as I grew up in <span className="font-semibold text-brand-resolutionBlue">Cali, Colombia</span>.
                </p>
                <p>
                   I went to primary and secondary school there. I used to love Spanish lessons at school, Diana my Spanish teacher was strict so I learnt <span className="font-semibold text-brand-resolutionBlue">good grammar and analysis</span> from her and that was the seed that later grew into me becoming a teacher...
                </p>
             </div>
          </div>

          {/* Greece Photo Break */}
          <div className="my-16 relative group">
             <div className="absolute inset-0 bg-brand-darkBlue/20 rounded-3xl group-hover:bg-transparent transition-colors duration-500 z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?q=80&w=2070&auto=format&fit=crop" 
               alt="Greece Landscape" 
               className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-lg"
             />
             <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                <p className="font-semibold text-brand-resolutionBlue flex items-center">
                   <span className="text-2xl mr-2">🇬🇷</span> 
                   Roots in Greece
                </p>
             </div>
          </div>

          {/* Second Text Part */}
          <div className="space-y-6 text-gray-700 text-xl leading-relaxed font-light relative">
             <Quote className="absolute -top-6 -left-8 text-brand-supernova/30 transform rotate-180" size={64} />
             
             <p>
                In 1991 I <span className="font-semibold text-brand-resolutionBlue">moved to England</span> to learn English and I went to <span className="font-semibold text-brand-resolutionBlue">University</span> in 1993. I studied Tourism Management at Birmingham College (part of Birmingham University) and obtained my degree. I worked in the travel industry, travelled to various places in Europe and the Caribbean.
             </p>

             <p>
                The idea of me <span className="font-semibold text-brand-resolutionBlue">teaching Spanish</span> to the local community of the <span className="font-semibold text-brand-resolutionBlue">Wirral</span>, north England started in September 2000 when I fancied a career change to suit my family style. So, I started teaching Spanish as I was asked for help by secondary school students. I felt very proud of my heritage and upbringing in Colombia and so I felt like I wanted to share my beautiful language with others.
             </p>

             {/* Paragraph about The Wirral and World */}
             <p className="bg-blue-50 p-6 rounded-xl border-l-4 border-brand-supernova">
                Over the years, I have fallen in love with <span className="font-semibold text-brand-resolutionBlue">The Wirral</span>. It has become my home and the heart of my teaching practice. Providing <span className="font-semibold text-brand-resolutionBlue">Spanish lessons in Wirral</span> and <span className="font-semibold text-brand-resolutionBlue">online to the world</span> allows me to connect with wonderful people globally. Whether you're looking for <span className="font-semibold text-brand-resolutionBlue">face-to-face classes</span> or private online tuition, the community here is incredibly welcoming, and I feel privileged to share my Latin American culture with you.
             </p>

             <p>
                And here I am <span className="font-semibold text-brand-resolutionBlue">25 years later</span> still teaching Spanish both <span className="font-semibold text-brand-resolutionBlue">in person and online</span>. I’ve taught from Greece 🇬🇷 and from Colombia 🇨🇴.
             </p>

             <p>
                I love my job and have no desire to stop…I hope you join me in your learning journey…
             </p>
          </div>

          {/* Closing */}
          <div className="mt-16 text-center">
             <p className="font-handwriting text-3xl text-brand-crimson transform -rotate-1">
                ¡Espero verte pronto!
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;