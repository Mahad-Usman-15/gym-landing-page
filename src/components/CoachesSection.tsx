import React from 'react';
import { Award, Target, Calendar, ArrowRight, MessageSquare } from 'lucide-react';
import { COACHES } from '../data/gymData';
import { Coach } from '../types';

interface CoachesSectionProps {
  onSelectCoach: (coach: Coach) => void;
  onBookWithCoach: (coachName: string) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({
  onSelectCoach,
  onBookWithCoach,
}) => {
  return (
    <section id="coaches" className="py-20 lg:py-28 bg-[#090909] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
            MEET THE <span className="text-[#CCFF00]">AUTHORITY</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 font-normal max-w-2xl leading-relaxed">
            Our coaches aren't just trainers; they are architects of human performance. Internationally certified and results-driven.
          </p>
        </div>

        {/* 3 Coach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              id={`coach-card-${coach.id}`}
              className="group bg-[#121212] border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-neutral-600 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            >
              {/* Coach Portrait Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                <img
                  src={coach.image}
                  alt={coach.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:scale-105 group-hover:contrast-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                
                {/* Quick Consultation Badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2.5 py-1 rounded bg-[#CCFF00] text-black font-black text-[10px] tracking-wider uppercase shadow-md">
                    AVAILABLE
                  </span>
                </div>
              </div>

              {/* Coach Meta Info */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors">
                    {coach.name}
                  </h3>

                  <div className="mt-4 space-y-3 pt-1 text-left">
                    {/* Experience */}
                    <div>
                      <span className="text-[10px] font-bold font-mono tracking-widest text-[#CCFF00] uppercase block">
                        EXPERIENCE
                      </span>
                      <span className="text-sm font-semibold text-neutral-200">
                        {coach.experience}
                      </span>
                    </div>

                    {/* Certifications */}
                    <div>
                      <span className="text-[10px] font-bold font-mono tracking-widest text-[#CCFF00] uppercase block">
                        CERTIFICATIONS
                      </span>
                      <span className="text-sm font-semibold text-neutral-200">
                        {coach.certifications}
                      </span>
                    </div>

                    {/* Specialization */}
                    <div>
                      <span className="text-[10px] font-bold font-mono tracking-widest text-[#CCFF00] uppercase block">
                        SPECIALIZATION
                      </span>
                      <span className="text-sm font-semibold text-neutral-200">
                        {coach.specialization}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA Buttons */}
                <div className="pt-4 mt-2 border-t border-neutral-800/80 flex items-center gap-2">
                  <button
                    onClick={() => onBookWithCoach(coach.name)}
                    className="flex-1 py-2.5 px-3 rounded bg-neutral-800 hover:bg-[#CCFF00] text-white hover:text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>CONSULT WITH {coach.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onSelectCoach(coach)}
                    className="p-2.5 rounded bg-neutral-850 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-750 transition-colors"
                    title="View Bio & Credentials"
                  >
                    <Award className="w-4 h-4 text-[#CCFF00]" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
