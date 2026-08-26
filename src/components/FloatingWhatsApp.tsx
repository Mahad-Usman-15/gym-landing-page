import React, { useState } from 'react';
import { MessageSquare, X, Send, Phone, CheckCheck } from 'lucide-react';
import { COACHES } from '../data/gymData';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickPrompts = [
    'Assalam o Alaikum! I want to book a free assessment.',
    'What are the ladies-only workout hours?',
    'I want to inquire about the Transformation Plan.',
    'Is personal training available at DHA Phase 6?',
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || message || 'Assalam o Alaikum Karachi Club! I want to inquire about gym membership and assessment.';
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/923001234567?text=${encoded}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="floating-whatsapp-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Chat with Karachi Club on WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <MessageSquare className="w-6 h-6 fill-white" />
          )}

          {/* Online status indicator */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#CCFF00] border-2 border-[#080808]" />
        </button>
      </div>

      {/* WhatsApp Chat Popover */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-40 w-[92vw] sm:w-80 bg-[#121212] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200 text-left">
          {/* Header */}
          <div className="bg-[#075E54] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 border border-white/20">
                <img
                  src={COACHES[0].image}
                  alt="Coach Asad"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border border-black" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Karachi Club Concierge</h4>
                <p className="text-[10px] text-[#A7E8BD] flex items-center gap-1">
                  <span>● Online</span> &bull; <span>Replies in &lt;5 mins</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/80 hover:text-white rounded-full hover:bg-black/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#0d0d0d] space-y-3 max-h-64 overflow-y-auto">
            <div className="bg-[#1e1e1e] border border-neutral-800 rounded-xl rounded-tl-none p-3 text-xs text-neutral-200 max-w-[90%] space-y-1">
              <p>Assalam o Alaikum! Welcome to Karachi Club. How can we help accelerate your fitness journey today?</p>
              <span className="text-[9px] text-neutral-500 flex items-center justify-end gap-1">
                Just now <CheckCheck className="w-3 h-3 text-[#25D366]" />
              </span>
            </div>

            {/* Quick response pills */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                Suggested questions:
              </span>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="w-full text-left p-2 rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-[11px] text-[#CCFF00] transition-colors leading-snug"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-[#161616] border-t border-neutral-800 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a WhatsApp message..."
              className="flex-1 bg-[#202020] border border-neutral-700 text-white text-xs rounded-full px-3.5 py-2 outline-none focus:border-[#25D366]"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
