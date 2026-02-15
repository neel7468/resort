import React from 'react';
import { amenities } from '../data/mock';
import { 
  Wifi, 
  Car, 
  UtensilsCrossed, 
  BellRing, 
  Wind, 
  Zap, 
  Headphones, 
  Trees 
} from 'lucide-react';

const iconComponents = {
  Wifi,
  Car,
  UtensilsCrossed,
  BellRing,
  Wind,
  Zap,
  Headphones,
  Trees
};

export const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Amenities</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Enjoy world-class facilities and services designed for your comfort and convenience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {amenities.map((amenity, index) => {
            const IconComponent = iconComponents[amenity.icon];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg">{amenity.name}</h3>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Everything You Need for a Perfect Stay
            </h3>
            <p className="text-lg text-emerald-50 max-w-2xl mx-auto">
              From modern amenities to personalized services, we ensure every aspect of your stay is comfortable and memorable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
