import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { rooms } from '../data/mock';
import { Bed, MapPin, CheckCircle2 } from 'lucide-react';

export const Rooms = ({ onBookNowClick }) => {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Rooms</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our range of comfortable and luxurious rooms designed for your perfect stay
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg hover:-translate-y-2"
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-emerald-600 text-white px-3 py-1 text-sm font-semibold shadow-lg">
                    ₹{room.price}/night
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                  <Bed className="w-6 h-6 text-emerald-600" />
                  {room.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {room.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {room.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 text-sm text-gray-700 bg-emerald-50 px-3 py-1 rounded-full"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={onBookNowClick}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transition-all duration-300 hover:scale-105"
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
