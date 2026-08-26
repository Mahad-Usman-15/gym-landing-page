import React, { useState } from 'react';
import { Check, X, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/gymData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan, billingCycle: 'monthly' | 'quarterly' | 'annual') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'annual'>('monthly');

  const getAdjustedPrice = (plan: PricingPlan) => {
    if (!plan.billingCycles) return plan.pricePKR;
    switch (billingCycle) {
      case 'quarterly':
        return Math.round(plan.billingCycles.quarterly / 3);
      case 'annual':
        return Math.round(plan.billingCycles.annual / 12);
      default:
        return plan.pricePKR;
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#080808] border-t border-neutral-900 relative overflow-hidden">
      
      {/* Background Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.035] whitespace-nowrap">
        <span className="font-display font-black text-[10vw] uppercase tracking-tighter text-white">
          KARACHI'S BEST GYM FOR MEN & WOMEN
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white leading-none">
            COMMIT TO <span className="text-outline-lime">GROWTH</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-normal">
            Transparent pricing. No hidden fees. Just results.
          </p>

          {/* Billing Cycle Selector */}
          <div className="inline-flex items-center p-1 bg-[#141414] border border-neutral-800 rounded-lg mt-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#CCFF00] text-black shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1 ${
                billingCycle === 'quarterly'
                  ? 'bg-[#CCFF00] text-black shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>3 Months</span>
              <span className="text-[9px] bg-neutral-900/60 px-1 py-0.5 rounded text-black font-extrabold">-10%</span>
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1 ${
                billingCycle === 'annual'
                  ? 'bg-[#CCFF00] text-black shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Annual</span>
              <span className="text-[9px] bg-neutral-900/60 px-1 py-0.5 rounded text-black font-extrabold">-20%</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const price = getAdjustedPrice(plan);

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative bg-[#111111] rounded-xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'border-2 border-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.18)] scale-[1.02] md:-translate-y-2'
                    : 'border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Top Badge for Popular Plan */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#CCFF00] text-black font-black font-display text-xs uppercase px-4 py-1 rounded shadow-md tracking-wider">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Card Header */}
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase block">
                      {plan.tierSubtitle}
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mt-1">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="pt-1 pb-2 border-b border-neutral-800/80">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`font-display font-black text-3xl sm:text-4xl tracking-tight ${isPopular ? 'text-[#CCFF00]' : 'text-white'}`}>
                        PKR {price.toLocaleString()}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">
                        /mo
                      </span>
                    </div>
                    {billingCycle !== 'monthly' && (
                      <span className="text-[11px] text-[#CCFF00] block mt-1">
                        Billed {billingCycle === 'quarterly' ? 'quarterly' : 'annually'} (Save up to 20%)
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 text-xs sm:text-sm">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 ${
                          feature.included ? 'text-neutral-200' : 'text-neutral-500 line-through opacity-70'
                        }`}
                      >
                        {feature.included ? (
                          <Check className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                        )}
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    id={`plan-btn-${plan.id}`}
                    onClick={() => onSelectPlan(plan, billingCycle)}
                    className={`w-full py-3.5 px-4 rounded font-display font-black text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-[#CCFF00] hover:bg-[#b8e600] text-black shadow-[0_0_20px_rgba(204,255,0,0.3)] active:scale-95'
                        : 'border border-neutral-700 bg-transparent hover:bg-neutral-800 text-white hover:border-neutral-500 active:scale-95'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    {isPopular ? <Zap className="w-4 h-4 fill-black" /> : <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-neutral-400">
          <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
          <span>All memberships include free biometric body scan & 100% money-back satisfaction guarantee during week 1.</span>
        </div>

      </div>
    </section>
  );
};
