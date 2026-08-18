import { NavItem, Service, Review, BlogPost } from './types';
import React from 'react';
import EarthquakeMagnitudeGraphic from './components/EarthquakeMagnitudeGraphic';
import EarthquakeStatsGrid from './components/AnimatedStatsGrid';

export const LOGO_URL = "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/espanol_con_claudia.png";

export const WHATSAPP_URL = "https://wa.me/447809735716?text=I%20want%20to%20speak%20Spanish%20with%20Claudia!";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/spanish.with.claudia/",
  tiktok: "https://www.tiktok.com/@spanish.with.clau"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Group Lessons", href: "#services" },
  { label: "Individual Lessons", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_TEXT = `I'm half Greek (born in Greece, my father was Greek) and I'm half Colombian (lived there all my childhood, my mother is Colombian).

My mother tongue is Spanish as I grew up in Cali, Colombia.

I went to primary and secondary school there. I used to love Spanish lessons at school, Diana my Spanish teacher was strict so I learnt good grammar and analysis from her and that was the seed that later grew into me becoming a teacher...

In 1991 I moved to England to learn English and I went to University in 1993. I studied Tourism Management at Birmingham College (part of Birmingham University) and obtained my degree. I worked in the travel industry, travelled to various places in Europe and the Caribbean.

The idea of me teaching Spanish to the local community of the Wirral, north England started in September 2000 when I fancied a career change to suit my family style. So, I started teaching Spanish as I was asked for help by secondary school students. I felt very proud of my heritage and upbringing in Colombia and so I felt like I wanted to share my beautiful language with others.

And here I am 25 years later still teaching Spanish both in person and online. I’ve taught from Greece 🇬🇷 and from Colombia 🇨🇴.

I love my job and have no desire to stop…I hope you join me in your learning journey…`;

export const SERVICES: Service[] = [
  {
    title: "Group Lessons",
    description: "Interactive and fun group sessions perfect for social learning. Improve your conversation skills with peers.",
    price: "From £10/hour",
    image: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(2).jpg",
    features: ["Small groups (max 6)", "Interactive activities", "Weekly homework", "Cultural immersion"]
  },
  {
    title: "Individual Lessons",
    description: "Tailored 1-on-1 coaching focusing on your specific goals, from grammar mastery to business Spanish.",
    price: "Contact for rates",
    image: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/wirral_spanish_pic%20(3).jpg",
    features: ["Personalized curriculum", "Flexible scheduling", "Exam preparation", "Intensive conversational practice"]
  }
];

export const REVIEWS: Review[] = [
  {
    name: "Sarah Jenkins",
    location: "Wirral",
    text: "Claudia is an amazing teacher! Her lessons are so much fun and I've learned more in 6 months than I did in 5 years at school."
  },
  {
    name: "Mike Thompson",
    location: "Online Student",
    text: "Professional, patient, and very knowledgeable. The online format works perfectly for my busy schedule."
  },
  {
    name: "Elena G.",
    location: "Online Student",
    text: "I love the cultural insights Claudia brings to every lesson. It's not just about language, it's about understanding the Spanish world."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "colombia-earthquake-emergency",
    title: "Urgent Appeal: Standing with Colombia After the Devastating 7.4 Magnitude Earthquake",
    excerpt: "On Monday, August 10, 2026, a catastrophic 7.4 magnitude earthquake struck Colombia. Over 300 lives lost, 4,187 injured, 143 missing, and more than 120,328 families affected. Read the official report and discover how you can provide direct, life-saving aid via the Colombian Red Cross.",
    image: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/terremoto_colombia_04.png",
    date: "August 17, 2026",
    category: "Emergency Appeal",
    keywords: [
      "Colombia Earthquake Relief",
      "7.4 Magnitude Earthquake Colombia",
      "Cruz Roja Colombiana",
      "Humanitarian Aid Colombia",
      "Donate Colombia Emergency",
      "Wirral Community Solidarity",
      "Colombian Red Cross"
    ],
    content: React.createElement(React.Fragment, null, [
      React.createElement('div', { className: "bg-red-50 border-2 border-brand-crimson/30 p-6 md:p-8 rounded-3xl mb-8 shadow-sm", key: "urgent-banner" },
        React.createElement('div', { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, [
          React.createElement('div', { key: "ub-text" }, [
            React.createElement('span', { className: "bg-brand-crimson text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-2", key: "ub-tag" }, "CRITICAL HUMANITARIAN CRISIS"),
            React.createElement('h3', { className: "text-2xl font-bold text-gray-900", key: "ub-title" }, "Official Emergency Appeal for Colombia"),
            React.createElement('p', { className: "text-gray-700 text-sm mt-1", key: "ub-sub" }, "100% of direct donations channel straight to first responders and emergency relief on the ground.")
          ]),
          React.createElement('a', {
            href: "https://www.cruzrojacolombiana.org/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "bg-brand-crimson hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center gap-2 whitespace-nowrap",
            key: "ub-btn"
          }, "Donate Directly Now ↗")
        ])
      ),

      React.createElement('p', { className: "mb-6 text-lg leading-relaxed text-gray-800", key: "p1" },
        "On the morning of ",
        React.createElement('strong', { className: "text-brand-crimson font-bold" }, "Monday, 10th August 2026 (Lunes 10 de Agosto)"),
        ", a violent and shallow earthquake measuring ",
        React.createElement('strong', { className: "text-brand-crimson font-black text-xl" }, "7.4 on the Richter Scale"),
        " tore through Colombia. As many of you know, my mother is Colombian and I spent my entire youth in Cali. Today, our hearts are shattered witnessing the sheer devastation and suffering experienced by hundreds of thousands of our brothers and sisters."
      ),

      /* Embedded Animated Seismic Graphic */
      React.createElement(EarthquakeMagnitudeGraphic, { key: "seismic-graphic" }),

      /* Embedded Animated Counter Stats Grid */
      React.createElement(EarthquakeStatsGrid, { key: "stats-grid", useFullNumbers: true }),

      React.createElement('h3', { className: "text-2xl md:text-3xl font-bold text-brand-navBlue mt-8 mb-4", key: "h-status" }, "The Scale of the Tragedy & Relief Efforts"),
      React.createElement('p', { className: "mb-6 text-gray-700 leading-relaxed", key: "p-status" },
        "The 7.4 magnitude shockwave struck with immense kinetic energy, collapsing vital infrastructure, fracturing mountain transit arteries, and bringing down historic and residential structures. Search and rescue teams, sniffer dog units, and humanitarian workers are laboring around the clock through debris and challenging weather conditions to find survivors trapped under collapsed buildings."
      ),

      React.createElement('div', { className: "my-8 rounded-3xl overflow-hidden shadow-xl border border-gray-200", key: "img-wrap-1" }, [
        React.createElement('img', {
          src: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/terremoto_colombia_01.jpg",
          alt: "Earthquake damage and ongoing rescue operations in Colombia",
          className: "w-full h-80 md:h-96 object-cover",
          key: "img1"
        }),
        React.createElement('p', { className: "text-xs text-gray-500 italic p-3 bg-gray-50 text-center", key: "cap1" },
          "Emergency rescue personnel and local volunteers working tirelessly amidst collapsed structures."
        )
      ]),

      React.createElement('h3', { className: "text-2xl font-bold text-brand-darkBlue mt-8 mb-3", key: "h-needs" }, "Urgent Needs on the Ground"),
      React.createElement('p', { className: "mb-4 text-gray-700", key: "p-needs1" },
        "With water pipelines shattered and electrical grids severed, displaced families are taking shelter in makeshift community centers and open fields. The most immediate life-saving priorities right now include:"
      ),
      React.createElement('ul', { className: "list-disc pl-6 space-y-2.5 mb-6 text-gray-700 font-medium", key: "needs-list" }, [
        React.createElement('li', { key: "nl1" }, "Emergency medical kits, surgical supplies, and antibiotics for overwhelmed field clinics."),
        React.createElement('li', { key: "nl2" }, "Potable drinking water purification units and non-perishable food parcels."),
        React.createElement('li', { key: "nl3" }, "Emergency all-weather tents, thermal blankets, and temporary bedding for children and the elderly."),
        React.createElement('li', { key: "nl4" }, "Trauma response counseling and maternal care kits for pregnant women and newborns.")
      ]),

      React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-8", key: "img-grid-mid" }, [
        React.createElement('div', { className: "rounded-2xl overflow-hidden shadow-lg border border-gray-200", key: "wrap-img2" }, [
          React.createElement('img', {
            src: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/terremoto_colombia_02.jpg",
            alt: "First responders assessing damage in affected communities",
            className: "w-full h-64 object-cover",
            key: "img2"
          }),
          React.createElement('p', { className: "text-xs text-gray-500 italic p-2.5 bg-gray-50 text-center", key: "cap2" },
            "First responders coordinating humanitarian aid corridors in affected areas."
          )
        ]),
        React.createElement('div', { className: "rounded-2xl overflow-hidden shadow-lg border border-gray-200", key: "wrap-img3" }, [
          React.createElement('img', {
            src: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/terremoto_colombia_03.webp",
            alt: "Humanitarian assistance being distributed to affected families in Colombia",
            className: "w-full h-64 object-cover",
            key: "img3"
          }),
          React.createElement('p', { className: "text-xs text-gray-500 italic p-2.5 bg-gray-50 text-center", key: "cap3" },
            "Cruz Roja Colombiana deploying food parcels, hygiene kits, and emergency shelter."
          )
        ])
      ]),

      React.createElement('h3', { className: "text-2xl md:text-3xl font-bold text-brand-crimson mt-8 mb-3", key: "h-how" }, "How You Can Help from the UK & Wirral"),
      React.createElement('p', { className: "mb-4 text-gray-700 leading-relaxed", key: "p-how1" },
        "The fastest and most transparent way to send help directly to the victims is through the official ",
        React.createElement('strong', { className: "text-gray-900" }, "Cruz Roja Colombiana (Colombian Red Cross)"),
        ". Every British Pound goes a remarkably long way in Colombia, directly funding emergency rations, clean water, and medical care."
      ),

      React.createElement('div', { className: "bg-brand-navBlue text-white p-8 rounded-3xl my-8 text-center shadow-xl border-2 border-brand-supernova/30", key: "cta-box" }, [
        React.createElement('h4', { className: "text-2xl md:text-3xl font-black mb-3", key: "cta-t" }, "Donate to Cruz Roja Colombiana"),
        React.createElement('p', { className: "text-blue-100 max-w-xl mx-auto mb-6 text-sm md:text-base", key: "cta-d" },
          "Please consider making a donation today. Your support brings immediate solace, food, and hope to families who have lost everything."
        ),
        React.createElement('a', {
          href: "https://www.cruzrojacolombiana.org/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 bg-brand-crimson hover:bg-red-600 active:scale-95 text-white font-bold py-4 px-10 rounded-2xl text-lg shadow-2xl transition-all duration-300",
          key: "cta-link"
        }, [
          "Donate via Colombian Red Cross 🇨🇴",
          React.createElement('span', { className: "text-xl", key: "arr" }, "↗")
        ]),
        React.createElement('p', { className: "text-xs text-blue-200 mt-4", key: "cta-note" }, "Official website: https://www.cruzrojacolombiana.org/")
      ]),

      React.createElement('p', { className: "mb-4 text-gray-700 italic leading-relaxed", key: "p-closing" },
        "To our wonderful students, friends, and community in Wirral, Merseyside, and beyond: thank you from the bottom of my heart for your empathy, your messages of solidarity, and your ongoing generosity. Colombia will rise again with the support of friends around the world. ¡Fuerza Colombia!"
      ),
      React.createElement('p', { className: "font-bold text-brand-darkBlue text-base", key: "p-sig" }, "— Claudia, Español con Claudia")
    ])
  },
  {
    id: "tapas-and-wine-west-kirby",
    title: "Tapas, Wine & Fluent Spanish: An Unforgettable Night in West Kirby",
    excerpt: "On August 7th, 2026, our students gathered in West Kirby for an evening of delicious tapas, fine wine, and lively Spanish conversation. Discover why interactive, social experiences make learning Spanish in the Wirral so natural and fun.",
    image: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/fotos_nuevas_2026/Tapas%20and%20wine_7_agosto.jpeg",
    date: "August 7, 2026",
    category: "Community & Events",
    keywords: [
      "Dynamic Spanish classes Wirral",
      "Interactive Spanish lessons West Kirby",
      "Spanish classes West Kirby UK",
      "Spanish lessons Wirral",
      "Adult Spanish classes Wirral",
      "Conversational Spanish UK"
    ],
    content: React.createElement(React.Fragment, null, [
      React.createElement('p', { className: "mb-4 text-lg font-medium text-gray-800", key: "p0" }, 
        "There is something truly magical when language leaves the textbook and comes alive around a table filled with authentic tapas, good wine, and genuine laughter. On Friday, 7th August 2026, our wonderful community of learners came together in ",
        React.createElement('strong', { className: "text-brand-navBlue" }, "West Kirby, Wirral"),
        " for one of our favorite traditions: an evening of tapas, drinks, and immersive Spanish conversation. ¡Salud! 🥂"
      ),
      React.createElement('h3', { className: "text-2xl font-bold text-brand-darkBlue mt-8 mb-3", key: "h1" }, "Why Dynamic & Interactive Spanish Classes in Wirral Work"),
      React.createElement('p', { className: "mb-4", key: "p1" }, 
        "If you are searching for ",
        React.createElement('strong', null, "dynamic Spanish classes in Wirral"),
        " or looking for ",
        React.createElement('strong', null, "interactive Spanish lessons in West Kirby UK"),
        ", you already know that memorizing grammar charts in isolation only gets you so far. Real fluency happens when you have the confidence to express your thoughts, share stories, joke with peers, and order food in a relaxed, friendly environment."
      ),
      React.createElement('p', { className: "mb-4", key: "p2" }, 
        "Our mixed-level table brought together students from beginners who recently learned greetings and food vocabulary, right through to intermediate and advanced speakers. Everyone supported each other, laughed through pronunciation challenges, and toasted to each milestone achieved."
      ),
      React.createElement('div', { className: "bg-amber-50 p-6 rounded-2xl border-l-4 border-brand-supernova my-8 shadow-xs", key: "quote" }, 
        React.createElement('p', { className: "italic text-gray-800 font-semibold text-base md:text-lg mb-2" }, 
          "\"Sharing food and wine while practicing Spanish is the best part of Claudia's classes. You forget you're even 'studying'—you're just living the language with great friends.\""
        ),
        React.createElement('span', { className: "text-brand-crimson text-sm font-bold block" }, "— Student feedback from our West Kirby Social Night")
      ),
      React.createElement('h3', { className: "text-2xl font-bold text-brand-darkBlue mt-6 mb-3", key: "h2" }, "Beyond the Classroom: Authentic Spanish in West Kirby, UK"),
      React.createElement('p', { className: "mb-4", key: "p3" }, 
        "Learning with a native tutor from Colombia means our ",
        React.createElement('strong', null, "Spanish classes in West Kirby and the Wirral"),
        " are infused with authentic Latin American warmth, real cultural nuances, and lively social events. From asking for the bill in Spanish (\"¿Nos trae la cuenta, por favor?\") to discussing summer travels and everyday life, our students put their classroom knowledge straight into practice."
      ),
      React.createElement('p', { className: "mb-4", key: "p4" }, 
        "Whether you live in West Kirby, Hoylake, Heswall, Birkenhead, or anywhere across Merseyside and Cheshire, our ",
        React.createElement('strong', null, "adult Spanish classes in Wirral"),
        " combine structured grammar with dynamic conversation games, interactive exercises, and vibrant cultural meetups."
      ),
      React.createElement('div', { className: "bg-blue-50 p-6 rounded-2xl my-6 border border-blue-100", key: "highlights" }, 
        React.createElement('h4', { className: "font-bold text-brand-navBlue mb-3 text-lg" }, "What made this evening special:"),
        React.createElement('ul', { className: "list-disc pl-6 space-y-2 text-gray-700" }, [
          React.createElement('li', { key: "li1" }, "A vibrant mixed group of learners encouraging and inspiring one another."),
          React.createElement('li', { key: "li2" }, "Authentic tapas pairing with Spanish wine and traditional toasts (\"¡Salud, dinero y amor!\")."),
          React.createElement('li', { key: "li3" }, "Natural conversational immersion in a warm, welcoming community right here in West Kirby.")
        ])
      ),
      React.createElement('p', { className: "mb-4 font-medium text-gray-800", key: "p5" }, 
        "Ready to join our next dinner and start speaking Spanish with confidence? Check out our group or private lessons and become part of the friendly Wirral Spanish family!"
      )
    ])
  },
  {
    id: "travel-spanish",
    title: "Unlock the World: Why Spanish is Your Best Travel Companion",
    excerpt: "Traveling to Spain or Latin America? Discover how learning the local language can transform your holiday from a simple sightseeing trip into an unforgettable cultural immersion.",
    image: "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/wirral_spanish/Torre-del-Reloj-en-Cartagena-de-Indias-Colombia.webp",
    date: "February 24, 2025",
    category: "Travel",
    keywords: ["Spanish lessons Wirral", "Travel Spanish", "Holidays in Spain", "Culture"],
    content: React.createElement(React.Fragment, null, [
      React.createElement('p', { className: "mb-4", key: "p1" }, 
        "When planning a trip to sunny Spain or the vibrant landscapes of Latin America, most people pack sunscreen, guidebooks, and a camera. But the most valuable item you can pack doesn't take up any space in your suitcase: ",
        React.createElement('strong', { className: "text-brand-navBlue" }, "the Spanish language"),
        "."
      ),
      React.createElement('h3', { className: "text-2xl font-bold text-brand-darkBlue mt-6 mb-3", key: "h1" }, "Connect Deeper with Locals"),
      React.createElement('p', { className: "mb-4", key: "p2" }, 
        "Imagine ordering tapas in Seville not by pointing, but by asking for the chef's recommendation. Or asking for directions in Mexico City and actually understanding the answer! ",
        "Taking ",
        React.createElement('strong', null, "Spanish lessons in Wirral"),
        " before you go allows you to break the tourist bubble. Locals appreciate the effort, often opening doors to hidden gems, authentic restaurants, and genuine friendships that English-only travelers miss."
      ),
      React.createElement('h3', { className: "text-2xl font-bold text-brand-darkBlue mt-6 mb-3", key: "h2" }, "Safety and Independence"),
      React.createElement('p', { className: "mb-4", key: "p3" }, 
        "Knowing the basics—numbers, directions, medical terms—adds a layer of safety to your travels. You can navigate public transport with confidence and handle unexpected situations with ease. ",
        "My ",
        React.createElement('strong', null, "adult Spanish classes"),
        " focus on practical, real-world scenarios, ensuring you're 'street smart' in Spanish before you even board the plane."
      ),
      React.createElement('div', { className: "bg-blue-50 p-6 rounded-xl border-l-4 border-brand-supernova my-8", key: "quote" }, 
        React.createElement('p', { className: "italic text-gray-700 font-medium" }, 
          "\"Language is the road map of a culture. It tells you where its people come from and where they are going.\""
        )
      ),
      React.createElement('p', { className: "mb-4", key: "p4" }, 
        "Whether you are planning a weekend in Barcelona or a backpacking trip through Colombia, starting your learning journey today is the best investment for your trip. Join us for ",
        React.createElement('strong', null, "lessons spanish wirral"),
        " style—fun, relaxed, and incredibly useful."
      )
    ])
  },
  {
    id: "business-spanish",
    title: "Boost Your Career: The Power of Spanish in Business",
    excerpt: "In an increasingly globalized economy, being bilingual is a superpower. Find out why adding Spanish to your CV can open doors to international markets and new career opportunities.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop",
    date: "February 10, 2025",
    category: "Business",
    keywords: ["Business Spanish", "Career Growth", "Online Spanish classes", "CV"],
    content: React.createElement(React.Fragment, null, [
      React.createElement('p', { className: "mb-4", key: "p1" }, 
        "We often think of Spanish in terms of holidays and salsa dancing, but in the corporate world, it is a serious asset. With over 500 million speakers worldwide, Spanish is the second most spoken native language on the planet. ",
        "For professionals in the UK, seeking ",
        React.createElement('strong', { className: "text-brand-navBlue" }, "Spanish lessons in Wirral"),
        " or online can be the differentiator that fast-tracks your career."
      ),
      React.createElement('h3', { className: "text-2xl font-bold text-brand-darkBlue mt-6 mb-3", key: "h1" }, "Access to Emerging Markets"),
      React.createElement('p', { className: "mb-4", key: "p2" }, 
        "Latin America is a powerhouse of emerging economies. From Mexico to Argentina, business opportunities are growing. Companies are actively looking for employees who can negotiate, build relationships, and understand cultural nuances. ",
        "Relying on Google Translate isn't enough when closing a deal. You need the cultural competence that comes from high-quality ",
        React.createElement('strong', null, "Wirral spanish lessons"),
        "."
      ),
      React.createElement('h3', { className: "text-2xl font-bold text-brand-darkBlue mt-6 mb-3", key: "h2" }, "Stand Out on Your CV"),
      React.createElement('p', { className: "mb-4", key: "p3" }, 
        "In a stack of competitive resumes, 'Intermediate Spanish' catches a recruiter's eye. It demonstrates cognitive flexibility, dedication to self-improvement, and a global mindset. ",
        "Whether you are in tourism, finance, import/export, or digital marketing, speaking Spanish expands your potential client base by millions."
      ),
      React.createElement('ul', { className: "list-disc pl-6 space-y-2 mb-6 text-gray-700", key: "list" }, [
        React.createElement('li', { key: "l1" }, "Network with international colleagues."),
        React.createElement('li', { key: "l2" }, "Navigate business trips with confidence."),
        React.createElement('li', { key: "l3" }, "Unlock expatriate opportunities.")
      ]),
      React.createElement('p', { className: "mb-4", key: "p4" }, 
        "Don't get left behind in the monolingual crowd. Our ",
        React.createElement('strong', null, "adult Spanish classes"),
        " are designed for busy professionals, offering flexible schedules and tailored business vocabulary."
      )
    ])
  }
];