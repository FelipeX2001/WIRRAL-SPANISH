import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import IndividualLessonsPage from './components/IndividualLessonsPage';
import GroupLessonsPage from './components/GroupLessonsPage';
import BlogPage from './components/BlogPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'individual' | 'group' | 'blog'>('home');
  const [selectedBlogId, setSelectedBlogId] = useState<string | undefined>(undefined);

  // Handle navigation requests
  const handleNavigate = (page: string, sectionId?: string, postId?: string) => {
    if (postId) {
      setSelectedBlogId(postId);
    } else if (page !== 'blog') {
      setSelectedBlogId(undefined);
    }

    // Update state for page navigation
    if (['home', 'about', 'contact', 'individual', 'group', 'blog'].includes(page)) {
      setCurrentPage(page as any);
    }

    // Handle scrolling if on home page
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top for new pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services onNavigate={handleNavigate} />
            <Gallery />
          </>
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : currentPage === 'contact' ? (
          <ContactPage />
        ) : currentPage === 'individual' ? (
          <IndividualLessonsPage onNavigate={handleNavigate} />
        ) : currentPage === 'group' ? (
          <GroupLessonsPage onNavigate={handleNavigate} />
        ) : (
          <BlogPage onNavigate={handleNavigate} initialPostId={selectedBlogId} />
        )}
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;