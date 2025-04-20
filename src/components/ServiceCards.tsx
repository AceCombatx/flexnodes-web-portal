
import React, { useEffect, useRef } from 'react';
import { Server, Globe, Database, Terminal, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "VPS Hosting",
    description: "Dedicated virtual private servers with full root access, perfect for websites, applications, and custom projects.",
    icon: Server,
    link: "https://vm.flexnodes.uk",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Game Server Hosting",
    description: "Low-latency game servers for popular titles with easy setup and management through our game panel.",
    icon: Globe,
    link: "https://backend.flexnodes.uk",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Bot Hosting",
    description: "Reliable hosting for Discord bots, Telegram bots, and other automation services with 24/7 uptime.",
    icon: Terminal,
    link: "https://backend.flexnodes.uk",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Website Hosting",
    description: "Fast and secure website hosting with support for various frameworks and content management systems.",
    icon: Cloud,
    link: "https://backend.flexnodes.uk",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Database Hosting",
    description: "Managed database solutions including MySQL, PostgreSQL, and MongoDB for your data storage needs.",
    icon: Database,
    link: "https://backend.flexnodes.uk",
    color: "from-emerald-500 to-emerald-600"
  }
];

const ServiceCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div id="services" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FlexNodes offers a comprehensive range of hosting solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el} 
              className="opacity-0" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full card-hover border-t-4 border-t-transparent hover:border-t-flexpurple">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <a href={service.link} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-white text-gray-800 border border-gray-200 hover:bg-gray-50">
                      Access Service
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
