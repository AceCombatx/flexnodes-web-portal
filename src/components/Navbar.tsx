
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X, Server, Globe } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Server className="h-7 w-7 text-flexpurple" />
              <span className="font-bold text-2xl gradient-text">FlexNodes</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-flexpurple transition-colors">Home</Link>
            <a href="#services" className="font-medium text-gray-700 hover:text-flexpurple transition-colors">Services</a>
            <a href="#features" className="font-medium text-gray-700 hover:text-flexpurple transition-colors">Features</a>
            <a href="#locations" className="font-medium text-gray-700 hover:text-flexpurple transition-colors">Locations</a>
            <a href="https://discord.gg/sEmKR8UJNz" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 hover:text-flexpurple transition-colors">Discord</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://vm.flexnodes.uk" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex items-center space-x-2">
                <Server className="h-4 w-4" />
                <span>VPS Panel</span>
              </Button>
            </a>
            <a href="https://backend.flexnodes.uk" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-flexblue to-flexpurple text-white flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Game Panel</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 rounded-md focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 py-2 hover:text-flexpurple transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <a href="#services" className="font-medium text-gray-700 py-2 hover:text-flexpurple transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#features" className="font-medium text-gray-700 py-2 hover:text-flexpurple transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#locations" className="font-medium text-gray-700 py-2 hover:text-flexpurple transition-colors" onClick={() => setIsMenuOpen(false)}>Locations</a>
              <a href="https://discord.gg/sEmKR8UJNz" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 py-2 hover:text-flexpurple transition-colors" onClick={() => setIsMenuOpen(false)}>Discord</a>
              
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <a href="https://vm.flexnodes.uk" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full justify-center">VPS Panel</Button>
                </a>
                <a href="https://backend.flexnodes.uk" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-flexblue to-flexpurple text-white justify-center">Game Panel</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
