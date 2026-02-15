import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Rooms } from '../components/Rooms';
import { Amenities } from '../components/Amenities';
import { Gallery } from '../components/Gallery';
import { Location } from '../components/Location';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { WhatsAppButton } from '../components/WhatsAppButton';

const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onBookNowClick={() => setIsBookingModalOpen(true)} />
      <Hero onBookNowClick={() => setIsBookingModalOpen(true)} />
      <About />
      <Rooms onBookNowClick={() => setIsBookingModalOpen(true)} />
      <Amenities />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default Home;
