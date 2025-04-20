
import React, { useEffect, useRef } from 'react';
import { Shield, Server, Clock, Download, Network, Users } from "lucide-react";

const features = [
  {
    title: "Free Tier Available",
    description: "Try our services with our free tier option, perfect for testing and small projects.",
    icon: Shield
  },
  {
    title: "High-Performance Hardware",
    description: "Latest-gen CPUs and NVMe SSDs for lightning-fast performance and reliability.",
    icon: Server
  },
  {
    title: "99.9% Uptime",
    description: "We guarantee 99.9% uptime for all our hosting services with minimal downtime.",
    icon: Clock
  },
  {
    title: "Unlimited Bandwidth",
    description: "All our hosting packages come with unlimited bandwidth at no extra cost.",
    icon: Download
  },
  {
    title: "Frankfurt Location",
    description: "Strategically located data center in Frankfurt for optimal European coverage.",
    icon: Network
  },
  {
    title: "24/7 Discord Support",
    description: "Get help anytime through our active Discord community and support team.",
    icon: Users
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    featureRefs.current.forEach(feature => {
      if (feature) observer.observe(feature);
    });

    return () => {
      featureRefs.current.forEach(feature => {
        if (feature) observer.unobserve(feature);
      });
    };
  }, []);

  return (
    <div id="features" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">FlexNodes</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide industry-leading hosting solutions with cutting-edge features and exceptional support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={el => featureRefs.current[index] = el} 
              className="flex items-start space-x-4 opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-flexblue-light to-flexpurple-light flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
