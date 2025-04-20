
import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Github, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Server className="h-6 w-6 text-flexpurple-light" />
              <span className="font-bold text-2xl text-white">FlexNodes</span>
            </div>
            <p className="mb-4 text-gray-400">
              High-performance hosting solutions for VPS, game servers, bots, websites, and more. Free tier available!
            </p>
            <div className="flex space-x-4">
              <a href="https://discord.gg/sEmKR8UJNz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="mailto:info@flexnodes.uk" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://vm.flexnodes.uk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">VPS Hosting</a>
              </li>
              <li>
                <a href="https://backend.flexnodes.uk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Game Server Hosting</a>
              </li>
              <li>
                <a href="https://backend.flexnodes.uk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Bot Hosting</a>
              </li>
              <li>
                <a href="https://backend.flexnodes.uk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Website Hosting</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#locations" className="text-gray-400 hover:text-white transition-colors">Locations</a>
              </li>
              <li>
                <a href="https://discord.gg/sEmKR8UJNz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Discord</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FlexNodes. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
