import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StandardFeatures } from './components/StandardFeatures';
import { PerformanceShowcase } from './components/PerformanceShowcase';
import { CoachesSection } from './components/CoachesSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FacilityModal } from './components/FacilityModal';
import { CoachModal } from './components/CoachModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Coach, Program, PricingPlan, BookingFormData } from './types';

export default function App() {
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState<Partial<BookingFormData>>({});
  const [selectedPlanForBooking, setSelectedPlanForBooking] = useState<PricingPlan | null>(null);

  const [facilityModalOpen, setFacilityModalOpen] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [coachModalOpen, setCoachModalOpen] = useState(false);

  // Handlers
  const handleOpenBooking = (initialData?: Partial<BookingFormData>, plan?: PricingPlan | null) => {
    setBookingInitialData(initialData || {});
    setSelectedPlanForBooking(plan || null);
    setBookingModalOpen(true);
  };

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(
      'Assalam o Alaikum Karachi Club team! I would like to inquire about gym membership, personal training, and assessment slots.'
    );
    window.open(`https://wa.me/923001234567?text=${message}`, '_blank');
  };

  const handleLeadSubmit = (data: BookingFormData) => {
    console.log('Lead capture received:', data);
    // User lead successfully recorded
  };

  const handleSelectCoach = (coach: Coach) => {
    setSelectedCoach(coach);
    setCoachModalOpen(true);
  };

  const handleBookWithCoach = (coachName: string) => {
    handleOpenBooking({ selectedCoach: coachName });
  };

  const handleSelectPlan = (plan: PricingPlan, billingCycle: 'monthly' | 'quarterly' | 'annual') => {
    handleOpenBooking({}, plan);
  };

  const handleSelectProgram = (program: Program) => {
    console.log('Selected program:', program.title);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#CCFF00] selection:text-black">
      {/* Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Main Page Body Sections matching exact screenshot order */}
      <main className="flex-grow">
        {/* 1. Hero Section + Fast Lead Capture */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenWhatsApp={handleOpenWhatsApp}
          onSubmitLead={handleLeadSubmit}
        />

        {/* 2. The Karachi Club Standard (4 Feature Cards) */}
        <StandardFeatures />

        {/* 3. Designed for Performance + Programs Showcase */}
        <PerformanceShowcase
          onOpenFacilityModal={() => setFacilityModalOpen(true)}
          onSelectProgram={handleSelectProgram}
        />

        {/* 4. Meet The Authority (Coach Cards) */}
        <CoachesSection
          onSelectCoach={handleSelectCoach}
          onBookWithCoach={handleBookWithCoach}
        />

        {/* 5. Commit To Growth (Pricing Tiers) */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 6. Frequently Asked Questions */}
        <FaqSection onOpenWhatsApp={handleOpenWhatsApp} />

        {/* 7. Bottom Transformation CTA Banner */}
        <CtaBanner onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Modals & Floating Assistants */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
        selectedPlan={selectedPlanForBooking}
      />

      <FacilityModal
        isOpen={facilityModalOpen}
        onClose={() => setFacilityModalOpen(false)}
        onBookTour={() => handleOpenBooking({ fitnessGoal: 'Facility Tour & Assessment' })}
      />

      <CoachModal
        coach={selectedCoach}
        isOpen={coachModalOpen}
        onClose={() => setCoachModalOpen(false)}
        onBookWithCoach={handleBookWithCoach}
      />

      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
