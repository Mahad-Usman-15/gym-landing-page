import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/gymData';

interface FaqSectionProps {
  onOpenWhatsApp: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenWhatsApp }) => {
  // First item open by default
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0a0a0a] border-t border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
            FREQUENTLY ASKED <span className="text-[#CCFF00]">QUESTIONS</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-lg mx-auto">
            Everything you need to know about getting started with GYM.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-[#121212] border border-neutral-800/90 rounded-lg overflow-hidden transition-colors hover:border-neutral-700"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <span className="font-display font-black text-base sm:text-lg uppercase tracking-tight text-white group-hover:text-[#CCFF00] transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#CCFF00] shrink-0 group-hover:border-[#CCFF00]/40 transition-colors">
                    {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-neutral-300 text-xs sm:text-sm leading-relaxed border-t border-neutral-850/60 pt-4 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-5 bg-[#141414] border border-neutral-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#CCFF00] shrink-0" />
            <div>
              <h4 className="font-display font-black text-sm uppercase text-white">Have a specific question?</h4>
              <p className="text-xs text-neutral-400">Speak directly with one of our head fitness advisors on WhatsApp.</p>
            </div>
          </div>
          <button
            onClick={onOpenWhatsApp}
            className="px-4 py-2 rounded bg-neutral-800 hover:bg-[#CCFF00] text-neutral-200 hover:text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ASK ON WHATSAPP</span>
          </button>
        </div>

      </div>
    </section>
  );
};
