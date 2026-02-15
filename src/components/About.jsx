import React from 'react';
import { aboutText } from '../data/mock';
import { Sparkles } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-emerald-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About <span className="text-emerald-600">Mili Resorts</span>
              </h2>
              <Sparkles className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              <img
                src="https://images.unsplash.com/photo-1762778013301-792c66e710a9"
                alt="Resort View"
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              {aboutText.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-bold text-emerald-600">15+</div>
                  <div className="text-sm text-gray-600 mt-1">Rooms</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-bold text-emerald-600">24/7</div>
                  <div className="text-sm text-gray-600 mt-1">Service</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-bold text-emerald-600">5★</div>
                  <div className="text-sm text-gray-600 mt-1">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
