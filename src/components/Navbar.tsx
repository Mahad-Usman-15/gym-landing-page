import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Dumbbell, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'TRANSFORMATIONS', href: '#transformations' },
    { name: 'COACHING', href: '#coaching' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#080808]/90 via-[#080808]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-2 group transition-transform active:scale-95"
          >
            
            <span className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white uppercase group-hover:text-[#CCFF00] transition-colors">
              GYM
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className="text-xs lg:text-sm font-semibold tracking-wider text-neutral-300 hover:text-[#CCFF00] transition-colors duration-200 uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* WhatsApp Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="whatsapp-header-btn"
              onClick={onOpenWhatsApp}
              className="flex items-center gap-2 px-3.5 py-2 rounded border border-[#CCFF00]/40 text-[#CCFF00] bg-[#CCFF00]/5 hover:bg-[#CCFF00] hover:text-black transition-all duration-200 text-xs font-bold tracking-wider uppercase group"
            >
              <MessageSquare className="w-4 h-4 text-[#CCFF00] group-hover:text-black transition-colors" />
              <span>WHATSAPP A COACH</span>
            </button>
            <button
              id="nav-book-assessment-btn"
              onClick={onOpenBooking}
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded bg-[#CCFF00] text-black font-black text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-all active:scale-95"
            >
              <span>BOOK ASSESSMENT</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-whatsapp-btn"
              onClick={onOpenWhatsApp}
              className="p-2 rounded border border-[#CCFF00]/30 text-[#CCFF00] bg-[#CCFF00]/10"
              aria-label="WhatsApp a coach"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="md:hidden mt-3 pt-4 pb-6 border-t border-neutral-800 bg-[#0c0c0c] rounded-xl px-4 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-wider text-neutral-200 hover:text-[#CCFF00] py-2 border-b border-neutral-800/50 uppercase flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-neutral-600 text-xs">→</span>
              </a>
            ))}
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded bg-[#CCFF00] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <Dumbbell className="w-4 h-4" />
                <span>BOOK FREE ASSESSMENT</span>
              </button>
              <button
                id="mobile-drawer-whatsapp-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="w-full py-3 rounded border border-[#CCFF00]/40 text-[#CCFF00] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 bg-[#CCFF00]/5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
