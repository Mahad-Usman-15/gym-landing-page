import React from 'react';
import { X, Award, Calendar, CheckCircle, MessageSquare, Instagram, ShieldCheck } from 'lucide-react';
import { Coach } from '../types';

interface CoachModalProps {
  coach: Coach | null;
  isOpen: boolean;
  onClose: () => void;
  onBookWithCoach: (coachName: string) => void;
}

export const CoachModal: React.FC<CoachModalProps> = ({
  coach,
  isOpen,
  onClose,
  onBookWithCoach,
}) => {
  if (!isOpen || !coach) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121212] border border-neutral-800 rounded-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Coach Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start border-b border-neutral-800 pb-6 mb-6">
          <div className="sm:col-span-5 aspect-[3/4] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
            <img
              src={coach.image}
              alt={coach.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top grayscale contrast-125"
            />
          </div>

          <div className="sm:col-span-7 space-y-3">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#CCFF00] uppercase block">
                {coach.role}
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                {coach.name}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {coach.bio}
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800">
                <span className="text-[10px] text-neutral-400 uppercase font-mono block">Credentials</span>
                <strong className="text-white">{coach.certifications}</strong>
              </div>

              <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800">
                <span className="text-[10px] text-neutral-400 uppercase font-mono block">Specialization</span>
                <strong className="text-[#CCFF00]">{coach.specialization}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Training Availability & Track Record */}
        <div className="space-y-4 mb-6 text-xs">
          <h4 className="text-xs font-mono font-bold uppercase text-[#CCFF00] tracking-wider">
            COACHING PROTOCOL &amp; CLIENT DELIVERABLES
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-300">
            <div className="flex items-center gap-2 p-2.5 bg-[#181818] rounded border border-neutral-800">
              <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
              <span>Bi-weekly caliper &amp; InBody tracking</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-[#181818] rounded border border-neutral-800">
              <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
              <span>Custom macro &amp; micronutrient breakdown</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-[#181818] rounded border border-neutral-800">
              <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
              <span>Video bar-path form audits</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-[#181818] rounded border border-neutral-800">
              <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
              <span>Direct WhatsApp coach access</span>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="text-[11px] text-neutral-500 font-mono">
            Direct 1-on-1 slots subject to weekly roster limits.
          </div>
          <button
            onClick={() => {
              onClose();
              onBookWithCoach(coach.name);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded bg-[#CCFF00] text-black font-black font-display text-sm tracking-wider uppercase hover:bg-[#b8e600] transition-all cursor-pointer"
          >
            BOOK 1-ON-1 WITH {coach.name.split(' ')[0]} ➔
          </button>
        </div>

      </div>
    </div>
  );
};
