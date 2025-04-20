
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import Features from '@/components/Features';
import Location from '@/components/Location';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // This ensures smooth scrolling works properly with anchor links
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle hash on initial page load
    handleHashChange();

    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <ServiceCards />
      <Features />
      <Location />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
