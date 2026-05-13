import { NavItem, Service, Review, BlogPost } from './types';
import React from 'react';

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