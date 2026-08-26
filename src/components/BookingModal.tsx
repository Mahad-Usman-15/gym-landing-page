import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle, Zap, MessageSquare, Dumbbell } from 'lucide-react';
import { BookingFormData, PricingPlan } from '../types';
import { COACHES, LOCATIONS } from '../data/gymData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<BookingFormData>;
  selectedPlan?: PricingPlan | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialData,
  selectedPlan,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: initialData?.fullName || '',
    phoneNumber: initialData?.phoneNumber || '',
    ageGroup: initialData?.ageGroup || '25-34',
    fitnessGoal: initialData?.fitnessGoal || 'Weight Loss',
    preferredLocation: initialData?.preferredLocation || 'DHA Phase 6',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTime: '18:00 - 19:30 (Evening Peak)',
    selectedCoach: initialData?.selectedCoach || 'Any Available Master Coach',
  });

  const [step, setStep] = useState<1 | 2>(1);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber) {
      alert('Please provide your name and phone number.');
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Assalam o Alaikum Karachi Club team! I would like to confirm my Free Fitness Assessment:\n` +
      `👤 Name: ${formData.fullName}\n` +
      `📱 Phone: ${formData.phoneNumber}\n` +
      `📍 Location: ${formData.preferredLocation}\n` +
      `🎯 Goal: ${formData.fitnessGoal}\n` +
      `📅 Preferred Date: ${formData.preferredDate}\n` +
      `⏰ Slot: ${formData.preferredTime}\n` +
      `${selectedPlan ? `💳 Plan: ${selectedPlan.name} (PKR ${selectedPlan.pricePKR.toLocaleString()}/mo)` : ''}`
    );
    return `https://wa.me/923001234567?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#121212] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden text-left">
        
        {/* Top Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#CCFF00] uppercase tracking-wider mb-1">
                <Zap className="w-3.5 h-3.5" />
                <span>1-ON-1 EVALUATION</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                {selectedPlan ? `JOIN ${selectedPlan.name} PLAN` : 'BOOK FREE ASSESSMENT'}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {selectedPlan
                  ? `Enroll in our ${selectedPlan.tierSubtitle} tier (PKR ${selectedPlan.pricePKR.toLocaleString()}/mo).`
                  : 'Experience our high-performance facility, meet coaches & get a body composition scan.'}
              </p>
            </div>

            {/* Step Progress Bar */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-[#CCFF00]' : 'bg-neutral-800'}`} />
              <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-[#CCFF00]' : 'bg-neutral-800'}`} />
            </div>

            {step === 1 ? (
              <form onSubmit={handleNext} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Asim Raza"
                    className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3.5 py-2.5 outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="0300 1234567"
                    className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3.5 py-2.5 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                      Fitness Goal
                    </label>
                    <select
                      name="fitnessGoal"
                      value={formData.fitnessGoal}
                      onChange={handleChange}
                      className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3 py-2.5 outline-none"
                    >
                      <option value="Weight Loss">Weight Loss</option>
                      <option value="Muscle Building">Muscle Building</option>
                      <option value="Strength & Conditioning">Strength & Conditioning</option>
                      <option value="Body Recomposition">Body Recomposition</option>
                      <option value="Female Transformation">Female Transformation</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                      Branch Location
                    </label>
                    <select
                      name="preferredLocation"
                      value={formData.preferredLocation}
                      onChange={handleChange}
                      className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3 py-2.5 outline-none"
                    >
                      <option value="DHA Phase 6">DHA Phase 6</option>
                      <option value="Clifton Block 4">Clifton Block 4</option>
                      <option value="Tipu Sultan Road">Tipu Sultan Rd</option>
                      <option value="Gulshan-e-Iqbal">Gulshan-e-Iqbal</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded bg-[#CCFF00] text-black font-black font-display text-base tracking-wider uppercase hover:bg-[#b8e600] transition-all cursor-pointer"
                  >
                    CONTINUE TO TIME SLOT →
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleFinalSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                    Preferred Assessment Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3.5 py-2.5 outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                    Preferred Time Window
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3 py-2.5 outline-none"
                  >
                    <option value="06:30 - 08:30 (Early Morning)">06:30 - 08:30 (Early Morning)</option>
                    <option value="11:00 - 14:00 (Mid-Day / Ladies Hours)">11:00 - 14:00 (Mid-Day / Ladies Hours)</option>
                    <option value="18:00 - 19:30 (Evening Peak)">18:00 - 19:30 (Evening Peak)</option>
                    <option value="20:00 - 22:00 (Late Night)">20:00 - 22:00 (Late Night)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider">
                    Coach Preference
                  </label>
                  <select
                    name="selectedCoach"
                    value={formData.selectedCoach}
                    onChange={handleChange}
                    className="w-full bg-[#181818] border border-neutral-700/80 focus:border-[#CCFF00] text-white text-sm rounded px-3 py-2.5 outline-none"
                  >
                    <option value="Any Available Master Coach">Any Available Master Coach</option>
                    {COACHES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} ({c.specialization})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-3 rounded border border-neutral-700 text-neutral-300 text-xs font-bold uppercase hover:bg-neutral-800"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded bg-[#CCFF00] text-black font-black font-display text-base tracking-wider uppercase hover:bg-[#b8e600] transition-all cursor-pointer"
                  >
                    CONFIRM &amp; RESERVE SPOT ⚡
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-[#CCFF00]/10 border border-[#CCFF00] rounded-full flex items-center justify-center mx-auto text-[#CCFF00]">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <h3 className="font-display font-black text-3xl uppercase text-white">
                SPOT CONFIRMED!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-sm mx-auto">
                We have registered your evaluation session at <strong>{formData.preferredLocation}</strong> on <strong>{formData.preferredDate}</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#181818] border border-neutral-800 rounded-xl text-left text-xs space-y-2">
              <div className="flex justify-between text-neutral-300">
                <span>Member:</span>
                <strong className="text-white">{formData.fullName}</strong>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>WhatsApp:</span>
                <strong className="text-[#CCFF00]">{formData.phoneNumber}</strong>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Time Slot:</span>
                <strong className="text-white">{formData.preferredTime}</strong>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Coach:</span>
                <strong className="text-white">{formData.selectedCoach}</strong>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CONFIRM FASTER ON WHATSAPP</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs text-neutral-400 hover:text-white uppercase font-bold tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
