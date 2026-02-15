import React from 'react';
import { Button } from './ui/button';
import { MapPin, ChevronDown } from 'lucide-react';
import { resortInfo } from '../data/mock';

export const Hero = ({ onBookNowClick }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1760454220991-ca0577d5bd6a"
          alt="Mili Resorts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Welcome to <span className="text-emerald-400">{resortInfo.name}</span>
          </h1>
          <p className="text-xl md:text-3xl font-light text-gray-200">
            {resortInfo.tagline}
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg text-gray-300">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span>Basnala, Mukutmanipur, West Bengal</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              onClick={onBookNowClick}
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Book Now
            </Button>
            <Button
              onClick={scrollToAbout}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-75" />
      </div>
    </section>
  );
};
