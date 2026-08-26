import React, { useState } from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, Award, Star, Zap, MapPin, ShieldAlert, Check } from 'lucide-react';
import { BookingFormData } from '../types';

interface HeroProps {
  onOpenBooking: (initialData?: Partial<BookingFormData>) => void;
  onOpenWhatsApp: () => void;
  onSubmitLead: (data: BookingFormData) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenWhatsApp, onSubmitLead }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    ageGroup: '18-24',
    fitnessGoal: 'Weight Loss',
    preferredLocation: 'DHA Phase 6',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ fullName?: string; phoneNumber?: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { fullName?: string; phoneNumber?: string } = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 7) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    onSubmitLead(formData);
    setIsSubmitted(true);
  };

  return (
    <section id="transformations" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background Graphic & Atmospheric Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#CCFF00]/5 blur-[120px]" />
        <div className="absolute top-[30%] -right-[15%] w-[45vw] h-[45vw] rounded-full bg-[#CCFF00]/5 blur-[140px]" />
        <div 
          className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:24px_24px] opacity-20"
        />
      </div>

      {/* Atmospheric Gym Watermark Headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.035] whitespace-nowrap">
        <span className="font-display font-black text-[11vw] uppercase tracking-tighter text-white">
          WHERE HEALTH, BEAUTY AND FITNESS MEET.
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8">
            
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div 
                id="hero-badge-members"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#CCFF00]/40 bg-[#CCFF00]/5 text-[#CCFF00] text-[11px] sm:text-xs font-bold tracking-wider uppercase"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>1000+ MEMBERS TRANSFORMED</span>
              </div>

              <div 
                id="hero-badge-trainers"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#CCFF00]/40 bg-[#CCFF00]/5 text-[#CCFF00] text-[11px] sm:text-xs font-bold tracking-wider uppercase"
              >
                <Award className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>CERTIFIED TRAINERS</span>
              </div>

              <div 
                id="hero-badge-rating"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#CCFF00]/40 bg-[#CCFF00]/5 text-[#CCFF00] text-[11px] sm:text-xs font-bold tracking-wider uppercase"
              >
                <Star className="w-3.5 h-3.5 text-[#CCFF00] fill-[#CCFF00]" />
                <span>4.9 MEMBER RATING</span>
              </div>
            </div>

            {/* Giant Athletic Headline */}
            <div className="space-y-0.5 sm:space-y-1">
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tight uppercase text-white">
                <div>ELEVATE YOUR</div>
                <div className="text-white">STANDARDS.</div>
                <div className="text-outline-lime">REDEFINE YOUR</div>
                <div className="text-outline-lime">LIMITS.</div>
              </h1>
            </div>

            {/* Body Paragraph */}
            <p className="text-neutral-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Join our result-focused fitness program with expert trainers. We strip away the noise and focus on what matters: your performance, your growth, and your results.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-1">
              <button
                id="hero-book-assessment-btn"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded bg-[#CCFF00] text-black font-black font-display text-lg tracking-wider uppercase hover:bg-[#b8e600] active:scale-95 transition-all shadow-[0_0_25px_rgba(204,255,0,0.35)] hover:shadow-[0_0_35px_rgba(204,255,0,0.5)] cursor-pointer"
              >
                <span>BOOK FREE ASSESSMENT</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                id="hero-whatsapp-btn"
                onClick={onOpenWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-white font-bold font-display text-base tracking-wider uppercase hover:border-[#CCFF00]/50 transition-all cursor-pointer"
              >
                <span>CHAT ON WHATSAPP</span>
                <MessageSquare className="w-4 h-4 text-[#CCFF00]" />
              </button>
            </div>

            {/* Location indicator */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>DHA Phase 6 &bull; Clifton Block 4 &bull; Tipu Sultan Road &bull; Karachi</span>
            </div>

          </div>

          {/* Right Column: Lead Capture Card "START YOUR JOURNEY" */}
          <div className="lg:col-span-5 w-full">
            <div 
              id="hero-lead-card"
              className="relative bg-[#111111]/90 backdrop-blur-xl border border-neutral-800 rounded-xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Subtle accent border line on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent opacity-80" />

              {!isSubmitted ? (
                <div>
                  <div className="mb-6">
                    <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                      START YOUR JOURNEY
                    </h2>
                    <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                      Secure your spot for a 1-on-1 fitness evaluation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold tracking-wider text-neutral-300 uppercase">
                          FULL NAME
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          id="lead-full-name"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3.5 py-2.5 outline-none transition-colors placeholder:text-neutral-500"
                        />
                        {formErrors.fullName && (
                          <span className="text-[10px] text-red-400">{formErrors.fullName}</span>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold tracking-wider text-neutral-300 uppercase">
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          id="lead-phone-number"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="0300 1234567"
                          className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3.5 py-2.5 outline-none transition-colors placeholder:text-neutral-500"
                        />
                        {formErrors.phoneNumber && (
                          <span className="text-[10px] text-red-400">{formErrors.phoneNumber}</span>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Age Group & Fitness Goal */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold tracking-wider text-neutral-300 uppercase">
                          AGE GROUP
                        </label>
                        <select
                          name="ageGroup"
                          id="lead-age-group"
                          value={formData.ageGroup}
                          onChange={handleInputChange}
                          className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3.5 py-2.5 outline-none transition-colors cursor-pointer"
                        >
                          <option value="18-24">18-24</option>
                          <option value="25-34">25-34</option>
                          <option value="35-44">35-44</option>
                          <option value="45-54">45-54</option>
                          <option value="55+">55+</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold tracking-wider text-neutral-300 uppercase">
                          FITNESS GOAL
                        </label>
                        <select
                          name="fitnessGoal"
                          id="lead-fitness-goal"
                          value={formData.fitnessGoal}
                          onChange={handleInputChange}
                          className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3.5 py-2.5 outline-none transition-colors cursor-pointer"
                        >
                          <option value="Weight Loss">Weight Loss</option>
                          <option value="Muscle Building">Muscle Building</option>
                          <option value="Strength & Conditioning">Strength & Conditioning</option>
                          <option value="Body Recomposition">Body Recomposition</option>
                          <option value="Female Transformation">Female Transformation</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Preferred Location */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold tracking-wider text-neutral-300 uppercase">
                        PREFERRED LOCATION
                      </label>
                      <select
                        name="preferredLocation"
                        id="lead-preferred-location"
                        value={formData.preferredLocation}
                        onChange={handleInputChange}
                        className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3.5 py-2.5 outline-none transition-colors cursor-pointer"
                      >
                        <option value="DHA Phase 6">DHA Phase 6 (Main Flagship)</option>
                        <option value="Clifton Block 4">Clifton Block 4</option>
                        <option value="Tipu Sultan Road">Tipu Sultan Road</option>
                        <option value="Gulshan-e-Iqbal">Gulshan-e-Iqbal</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        id="lead-submit-btn"
                        className="w-full py-3.5 px-4 rounded bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black font-display text-base tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] active:scale-[0.98] cursor-pointer"
                      >
                        <span>RESERVE MY FREE ASSESSMENT</span>
                        <Zap className="w-4 h-4 fill-black" />
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-neutral-500 pt-1">
                      No commitment required. 100% free consultation & biomechanics scan.
                    </p>
                  </form>
                </div>
              ) : (
                /* Success State */
                <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 bg-[#CCFF00]/10 border border-[#CCFF00] rounded-full flex items-center justify-center mx-auto text-[#CCFF00]">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-2xl uppercase text-white">
                      ASSESSMENT RESERVED!
                    </h3>
                    <p className="text-neutral-300 text-xs sm:text-sm mt-1 max-w-xs mx-auto">
                      Thank you <strong className="text-white">{formData.fullName}</strong>. Our head trainer will contact you at <strong className="text-[#CCFF00]">{formData.phoneNumber}</strong> within 24 hours.
                    </p>
                  </div>
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded text-left text-xs text-neutral-300 space-y-1">
                    <div><strong>Location:</strong> {formData.preferredLocation}</div>
                    <div><strong>Goal:</strong> {formData.fitnessGoal}</div>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#CCFF00] underline font-bold uppercase hover:opacity-80"
                  >
                    Reserve another assessment
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
