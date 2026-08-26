import React, { useState } from 'react';
import { ArrowRight, Sparkles, Activity, Flame, Shield, CheckCircle } from 'lucide-react';
import { GYM_PROGRAMS } from '../data/gymData';
import { Program } from '../types';

interface PerformanceShowcaseProps {
  onOpenFacilityModal: () => void;
  onSelectProgram: (program: Program) => void;
}

export const PerformanceShowcase: React.FC<PerformanceShowcaseProps> = ({
  onOpenFacilityModal,
  onSelectProgram,
}) => {
  const [activeProgramId, setActiveProgramId] = useState<string>('strength-training');
  const activeProgram = GYM_PROGRAMS.find((p) => p.id === activeProgramId) || GYM_PROGRAMS[0];

  return (
    <section id="coaching" className="py-20 lg:py-28 bg-[#0b0b0b] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Heading & Facility CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
                <div>DESIGNED FOR</div>
                <div className="text-white">PERFORMANCE</div>
              </h2>
              {/* Yellow Accent Bar */}
              <div className="w-16 h-1 bg-[#CCFF00] rounded-full mt-3" />
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-md">
              Our facilities are built to remove friction from your workout, allowing total focus.
            </p>

            <div className="pt-2">
              <button
                id="facility-overview-btn"
                onClick={onOpenFacilityModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#CCFF00] text-black font-black font-display text-sm sm:text-base tracking-wider uppercase hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] cursor-pointer"
              >
                <span>FACILITY OVERVIEW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick stats pill */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-800/60 max-w-sm">
              <div className="p-3 bg-[#141414] rounded border border-neutral-800">
                <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">FACILITY SIZE</span>
                <span className="font-display font-black text-lg text-white">15,000 SQ FT</span>
              </div>
              <div className="p-3 bg-[#141414] rounded border border-neutral-800">
                <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">EQUIPMENT ORIGIN</span>
                <span className="font-display font-black text-lg text-[#CCFF00]">SWEDEN & USA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Programs Showcase */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] border border-neutral-800 rounded-xl p-5 sm:p-7 shadow-2xl">
              
              {/* Header Label inside container */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-4 mb-5">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#CCFF00] uppercase block">
                    OUR PROGRAMS
                  </span>
                  <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-white">
                    TRAINING PROGRAMS BUILT AROUND YOUR GOAL
                  </h3>
                </div>
                <span className="text-xs text-neutral-400 font-mono">
                  {GYM_PROGRAMS.length} TIERS AVAILABLE
                </span>
              </div>

              {/* 3 Program Preview Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                {GYM_PROGRAMS.map((program) => {
                  const isSelected = activeProgramId === program.id;
                  return (
                    <div
                      key={program.id}
                      id={`program-card-${program.id}`}
                      onClick={() => {
                        setActiveProgramId(program.id);
                        onSelectProgram(program);
                      }}
                      className={`relative rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 border ${
                        isSelected
                          ? 'border-[#CCFF00] ring-1 ring-[#CCFF00]/50 scale-[1.02] shadow-[0_0_15px_rgba(204,255,0,0.2)]'
                          : 'border-neutral-800 hover:border-neutral-600 opacity-80 hover:opacity-100'
                      }`}
                    >
                      {/* Atmospheric Image */}
                      <div className="aspect-[4/3] w-full overflow-hidden relative">
                        <img
                          src={program.image}
                          alt={program.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/90 to-transparent">
                        <span className="text-[9px] font-mono text-[#CCFF00] uppercase tracking-wider block">
                          PROGRAM
                        </span>
                        <h4 className="font-display font-black text-sm uppercase text-white tracking-tight leading-tight">
                          {program.title}
                        </h4>
                      </div>

                      {/* Active Indicator dot */}
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Active Program Detail Box */}
              <div className="bg-[#181818] rounded-lg p-4 sm:p-5 border border-neutral-700/60">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-display font-black text-lg sm:text-xl text-[#CCFF00] uppercase tracking-tight">
                    {activeProgram.title} &mdash; <span className="text-white text-sm font-sans font-medium">{activeProgram.subtitle}</span>
                  </h4>
                  <span className="px-2.5 py-0.5 rounded bg-neutral-800 text-[11px] font-bold text-neutral-300">
                    {activeProgram.duration}
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-neutral-300 mb-4 leading-relaxed">
                  {activeProgram.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-neutral-750 text-xs">
                  {activeProgram.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-neutral-200">
                      <CheckCircle className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
