import React from 'react';
import { X, CheckCircle, Shield, Award, Sparkles, Dumbbell } from 'lucide-react';
import { FACILITY_AMENITIES, LOCATIONS } from '../data/gymData';

interface FacilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookTour: () => void;
}

export const FacilityModal: React.FC<FacilityModalProps> = ({
  isOpen,
  onClose,
  onBookTour,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#121212] border border-neutral-800 rounded-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 border-b border-neutral-800 pb-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#CCFF00]/10 text-[#CCFF00] text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>ELITE FACILITY SPECS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
            DESIGNED FOR ZERO FRICTION PERFORMANCE
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-1 max-w-xl">
            Imported Eleiko barbell sets, custom Prime Fitness pin-loaded isolation stacks, and private recovery suites across Karachi.
          </p>
        </div>

        {/* Amenities 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {FACILITY_AMENITIES.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#181818] border border-neutral-800 rounded-xl overflow-hidden group hover:border-neutral-700 transition-colors"
            >
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-display font-black text-base text-white uppercase group-hover:text-[#CCFF00] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Location List */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 mb-6">
          <h4 className="text-xs font-mono font-bold uppercase text-[#CCFF00] tracking-wider mb-3">
            KARACHI BRANCH LOCATIONS &amp; TIMINGS
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="p-2.5 bg-[#141414] rounded border border-neutral-800">
                <div className="font-bold text-white uppercase">{loc.name}</div>
                <div className="text-neutral-400 text-[11px] mt-0.5">{loc.address}</div>
                <div className="text-[#CCFF00] text-[10px] font-mono mt-1">🕒 {loc.hours}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="text-xs text-neutral-400">
            Complimentary guided facility walkthrough with every free assessment.
          </div>
          <button
            onClick={() => {
              onClose();
              onBookTour();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded bg-[#CCFF00] text-black font-black font-display text-sm tracking-wider uppercase hover:bg-[#b8e600] transition-all cursor-pointer"
          >
            SCHEDULE FACILITY VISIT ➔
          </button>
        </div>

      </div>
    </div>
  );
};
