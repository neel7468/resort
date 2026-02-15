import React from 'react';
import { resortInfo } from '../data/mock';
import { MapPin, Navigation } from 'lucide-react';

export const Location = () => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29735.83!2d${resortInfo.coordinates.lng}!3d${resortInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzU2LjAiTiA4NsKwNDgnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890`;

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Location</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find us in the heart of nature, near the beautiful Mukutmanipur dam
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {resortInfo.address}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${resortInfo.coordinates.lat},${resortInfo.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-md"
                >
                  <Navigation className="w-5 h-5" />
                  <span className="font-semibold">Get Directions</span>
                </a>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">How to Reach:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>From Kolkata: 180 km (4 hours drive)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Nearest Railway Station: Bankura (45 km)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span>Nearest Airport: Kolkata Airport (180 km)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mili Resorts Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
