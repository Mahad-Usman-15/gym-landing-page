import React from 'react';
import { Dumbbell, ClipboardList, Maximize2, Users, ArrowUpRight } from 'lucide-react';
import { STANDARD_FEATURES } from '../data/gymData';

interface StandardFeaturesProps {
  onLearnMore?: (featureId: string) => void;
}

export const StandardFeatures: React.FC<StandardFeaturesProps> = ({ onLearnMore }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dumbbell':
        return <Dumbbell className="w-5 h-5 text-neutral-300 group-hover:text-[#CCFF00] transition-colors" />;
      case 'clipboard-list':
        return <ClipboardList className="w-5 h-5 text-neutral-300 group-hover:text-[#CCFF00] transition-colors" />;
      case 'cpu':
        return <Maximize2 className="w-5 h-5 text-neutral-300 group-hover:text-[#CCFF00] transition-colors" />;
      case 'users':
        return <Users className="w-5 h-5 text-neutral-300 group-hover:text-[#CCFF00] transition-colors" />;
      default:
        return <Dumbbell className="w-5 h-5 text-neutral-300 group-hover:text-[#CCFF00] transition-colors" />;
    }
  };

  return (
    <section id="standards" className="py-20 lg:py-28 bg-[#090909] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
            THE GYM <span className="text-[#CCFF00]">STANDARD</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 font-normal max-w-xl">
            No gimmicks. Just modern methodology, elite equipment, and a culture that breeds success.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {STANDARD_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              id={`standard-card-${feature.id}`}
              className="group relative bg-[#121212] border border-neutral-800/90 rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-600 transition-all duration-300 hover:bg-[#151515] hover:-translate-y-1 shadow-lg"
            >
              {/* Top Row: Icon container */}
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#1a1a1a] border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-[#CCFF00]/40 group-hover:bg-[#CCFF00]/10 transition-colors">
                  {getIcon(feature.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-white mb-3 group-hover:text-[#CCFF00] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Index Marker */}
              <div className="pt-6 mt-4 border-t border-neutral-800/40 flex items-center justify-between text-[11px] text-neutral-600 font-mono uppercase">
                <span>0{idx + 1} / PROTOCOL</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#CCFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
