
import React, { useEffect, useRef } from 'react';
import { Network, MapPin } from "lucide-react";

const Location = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (contentRef.current) {
            contentRef.current.classList.add('animate-fade-up');
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="locations" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="gradient-text">Data Center</span></h2>
            <p className="text-lg text-gray-600 mb-8">
              Our infrastructure is strategically located in Frankfurt, Germany, one of Europe's premier data center hubs, providing optimal performance and reliability.
            </p>
            
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-flexpurple-light flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Frankfurt, Germany</h3>
                <p className="text-gray-600">
                  Centrally located in Europe, providing excellent connectivity and low latency to users across the continent.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-flexblue-light flex items-center justify-center">
                  <Network className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Top-tier Network</h3>
                <p className="text-gray-600">
                  Our data center features multiple tier-1 carriers with redundant connections, ensuring reliable and fast connections for all your services.
                </p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-flexblue to-flexpurple rounded-full flex items-center justify-center animate-pulse-slow">
                      <MapPin className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center font-medium text-gray-700">
                  Frankfurt, Germany
                </div>
                
                {/* Network lines */}
                <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute top-1/4 left-1/4 w-1 h-24 bg-flexblue transform -rotate-45"></div>
                  <div className="absolute top-1/4 right-1/4 w-1 h-24 bg-flexpurple transform rotate-45"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-1 h-24 bg-flexpurple transform rotate-45"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-1 h-24 bg-flexblue transform -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
