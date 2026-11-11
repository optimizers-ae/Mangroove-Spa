import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Router from './Router';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');

  const handleOpenBooking = (treatmentTitle = '') => {
    setSelectedTreatment(treatmentTitle);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F5F0E8] text-[#252823]">
      {/* 1. Cinematic Loading / Splash Experience */}
      <LoadingScreen />

      {/* 2. Scroll Restorer on Route Change */}
      <ScrollToTop />

      {/* 3. Sticky Luxury Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 4. Page Content Router */}
      <main className="flex-1">
        <Router onOpenBooking={handleOpenBooking} />
      </main>

      {/* 5. Global Appointment Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultTreatment={selectedTreatment}
      />

      {/* 6. Premium Brand Footer */}
      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
};

export default App;
