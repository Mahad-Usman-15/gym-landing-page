import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onOpenBooking }) => {
  return (
    <footer className="bg-[#050505] border-t border-neutral-900 text-neutral-400 text-xs pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-850">
          
          {/* Logo & Tagline */}
          <div className="space-y-2">
              <span className="font-display text-2xl font-black tracking-tight text-white uppercase">
                GYM
              </span>
            <p className="text-[11px] text-neutral-500 max-w-sm uppercase font-mono tracking-wider">
              &copy; 2024 ELITE PERFORMANCE GYM. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Legal / Policy Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-semibold tracking-wider text-[11px] text-neutral-400">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors uppercase">
              PRIVACY POLICY
            </a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors uppercase">
              TERMS OF SERVICE
            </a>
            <a href="#cookies" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors uppercase">
              COOKIE POLICY
            </a>
            <a href="#accessibility" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors uppercase">
              ACCESSIBILITY
            </a>
          </div>

        </div>

        {/* Location Branches & Quick Contact Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <span>LOCATIONS: DHA PHASE 6 &bull; CLIFTON BLOCK 4 &bull; TIPU SULTAN RD &bull; GULSHAN</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenWhatsApp}
              className="text-[#CCFF00] hover:underline flex items-center gap-1 font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>+92 326 0242596</span>
            </button>
            <span>&bull;</span>
            <span>KARACHI, PAKISTAN</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
