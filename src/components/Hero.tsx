
import React, { useEffect, useRef } from 'react';
import { Server, Cloud, Globe } from "lucide-react";

const Hero = () => {
  const serverRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes when component mounts
    if (contentRef.current) {
      contentRef.current.classList.add('animate-fade-up');
    }
    if (serverRef.current) {
      setTimeout(() => {
        serverRef.current?.classList.add('animate-float');
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">High-Performance</span> Hosting Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Experience exceptional hosting with FlexNodes. From VPS to Game Servers, we offer reliable, high-performance solutions for all your hosting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://vm.flexnodes.uk" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2">
                <Server className="w-5 h-5" />
                Access VPS Panel
              </a>
              <a href="https://backend.flexnodes.uk" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 border">
                <Globe className="w-5 h-5" />
                Access Game Panel
              </a>
            </div>
            
            <div className="mt-12">
              <p className="text-gray-500 mb-4">Trusted by gamers and developers</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Cloud className="text-flexblue w-5 h-5" />
                  <span className="font-medium">Free Tier Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="text-flexpurple w-5 h-5" />
                  <span className="font-medium">Frankfurt Location</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div ref={serverRef} className="relative w-full max-w-md">
              <div className="w-full aspect-square bg-gradient-to-br from-flexblue-light to-flexpurple rounded-2xl shadow-xl flex items-center justify-center p-8">
                <Server className="w-32 h-32 text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-flexpurple to-flexblue rounded-2xl shadow-lg flex items-center justify-center p-4">
                <Globe className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
