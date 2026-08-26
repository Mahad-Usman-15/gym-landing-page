import React from 'react';
import { ArrowRight, Zap, Dumbbell } from 'lucide-react';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#080808] border-t border-neutral-900 overflow-hidden">
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80"
          alt="Gym background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale opacity-20 contrast-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-[#080808]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Atmospheric Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.045] whitespace-nowrap">
        <span className="font-display font-black text-[12vw] uppercase tracking-tighter text-white">
          WHERE HEALTH, BEAUTY AND FITNESS MEET.
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Giant Headline */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.9]">
          <div>READY TO START YOUR</div>
          <div className="text-[#CCFF00]">TRANSFORMATION?</div>
        </h2>

        <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto font-normal">
          Limited slots available each month to guarantee coach attention and customized programming.
        </p>

        {/* Big Action Button */}
        <div className="pt-2">
          <button
            id="cta-bottom-booking-btn"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black font-display text-base sm:text-xl uppercase tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:shadow-[0_0_45px_rgba(204,255,0,0.6)] active:scale-95 cursor-pointer"
          >
            <span>BOOK YOUR FREE FITNESS ASSESSMENT</span>
            <Zap className="w-5 h-5 fill-black" />
          </button>
        </div>

        {/* Sub-points */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono uppercase pt-4">
          <span>✓ Free Biometric InBody Scan</span>
          <span>✓ 1-on-1 Movement Assessment</span>
          <span>✓ Personalized Roadmap</span>
        </div>

      </div>
    </section>
  );
};
