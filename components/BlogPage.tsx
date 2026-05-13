import React, { useState } from 'react';
import { Calendar, User, ArrowLeft, Tag, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedPost) {
    return (
      <article className="pt-28 pb-20 bg-white min-h-screen animate-fade-in-up">
        {/* Progress Bar / Scroll Indicator could go here */}
        
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <button 
                onClick={handleBack}
                className="group flex items-center text-brand-navBlue font-semibold mb-8 hover:text-brand-crimson transition-colors"
            >
                <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Articles
            </button>

            {/* Article Header */}
            <div className="mb-10">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-brand-supernova/20 text-brand-darkBlue px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs">
                        {selectedPost.category}
                    </span>
                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {selectedPost.date}</span>
                    <span className="flex items-center"><User size={14} className="mr-1" /> Claudia</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-brand-navBlue leading-tight mb-8">
                    {selectedPost.title}
                </h1>

                <div className="rounded-3xl overflow-hidden shadow-2xl mb-10 aspect-video relative">
                    <img 
                        src={selectedPost.image} 
                        alt={selectedPost.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-darkBlue/50 to-transparent"></div>
                </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
                {selectedPost.content}
            </div>

            {/* Keywords / Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                    {selectedPost.keywords.map((keyword, i) => (
                        <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                            <Tag size={14} className="mr-2 text-brand-crimson" />
                            {keyword}
                        </span>
                    ))}
                </div>
            </div>

            {/* CTA at bottom of article */}
            <div className="mt-16 bg-brand-navBlue rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Inspired to learn?</h3>
                    <p className="text-blue-100 mb-8 max-w-xl mx-auto">Start your own journey today. Whether for travel, business, or pleasure, we have a class for you.</p>
                    <button 
                        onClick={() => onNavigate('contact')}
                        className="bg-brand-crimson hover:bg-red-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Book Your First Lesson
                    </button>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-supernova/20 rounded-full -ml-10 -mb-10"></div>
            </div>
        </div>
      </article>
    );
  }

  return (
    <section className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Blog Header */}
        <div className="text-center mb-16">
          <span className="text-brand-crimson font-bold tracking-widest uppercase text-sm">News & Insights</span>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navBlue mt-2 mb-6">Claudia's Blog</h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Tips for learning, cultural stories, and the latest news from our <span className="font-semibold text-brand-navBlue">Spanish lessons in Wirral</span> community.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {BLOG_POSTS.map((post) => (
                <article 
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer group flex flex-col h-full"
                >
                    <div className="h-64 overflow-hidden relative">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-brand-darkBlue uppercase tracking-wider shadow-sm">
                            {post.category}
                        </div>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center text-gray-400 text-xs mb-4 space-x-3">
                            <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                            <span className="flex items-center"><Clock size={12} className="mr-1" /> 3 min read</span>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-brand-navBlue mb-3 group-hover:text-brand-crimson transition-colors line-clamp-2">
                            {post.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center text-brand-navBlue font-semibold group-hover:translate-x-2 transition-transform">
                            Read Article <ArrowLeft className="ml-2 rotate-180" size={18} />
                        </div>
                    </div>
                </article>
            ))}
        </div>

        {/* Newsletter / Sub CTA (Visual only) */}
        <div className="mt-20 max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-gray-200 text-center shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Don't miss an update</h3>
            <p className="text-gray-500 mb-6">Stay tuned for more learning tips and local Wirral Spanish events.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-navBlue focus:outline-none w-full sm:w-auto"
                />
                <button className="bg-brand-darkBlue text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-navBlue transition-colors">
                    Subscribe
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default BlogPage;