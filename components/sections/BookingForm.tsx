"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Phone, Clipboard, Clock, MessageSquare, Check, X } from "lucide-react";
import Button from "../ui/Button";

interface FormState {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
}

const serviceOptions = [
  "Select a service",
  "Hair Cut & Styling",
  "Premium Hair Coloring",
  "Nourishing Hair Spa",
  "Keratin Repair Therapy",
  "Advanced Revitalizing Facial",
  "Skin Detan Treatment",
  "Exquisite Bridal Makeup",
  "Party Makeup Glitz",
  "Beard Grooming & Sculpt",
  "Relaxing Head Massage",
];

export function BookingForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = "Full Name is required";
    
    // Indian phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!form.phone.trim()) {
      tempErrors.phone = "Phone Number is required";
    } else if (!phoneRegex.test(form.phone)) {
      tempErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    if (!form.service || form.service === "Select a service") {
      tempErrors.service = "Please select a service";
    }

    if (!form.date) tempErrors.date = "Please select a date";
    if (!form.time) tempErrors.time = "Please select a preferred slot";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1500);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    // Reset form
    setForm({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#FAF7F2] relative">
      {/* Background Decorative Ambient Spot */}
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-montserrat text-xs tracking-[0.3em] uppercase text-[#C48A6A] font-bold block mb-3">
            Reservations
          </span>
          <h2 className="font-playfair font-black text-3xl sm:text-5xl text-[#111111] uppercase">
            Book Appointment
          </h2>
          <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto mt-4" />
          <p className="font-poppins text-xs md:text-sm text-[#333333]/70 mt-4 leading-relaxed">
            Reserve your personal grooming slot. Once booked, our styling coordinator will verify your date and contact you directly.
          </p>
        </div>

        {/* Elegant Luxury Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 sm:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-[#D4AF37]/15"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Field: Name */}
            <div className="flex flex-col gap-1.5 col-span-1">
              <label htmlFor="name" className="font-montserrat text-xs tracking-wider uppercase text-[#111111] font-semibold flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C48A6A]" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-3.5 border rounded-none font-poppins text-sm md:text-base outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all bg-[#FAF7F2]/30 ${
                  errors.name ? "border-red-500" : "border-[#D4AF37]/20"
                }`}
              />
              {errors.name && <span className="font-poppins text-xs text-red-500 mt-1">{errors.name}</span>}
            </div>

            {/* Field: Phone */}
            <div className="flex flex-col gap-1.5 col-span-1">
              <label htmlFor="phone" className="font-montserrat text-xs tracking-wider uppercase text-[#111111] font-semibold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C48A6A]" />
                <span>Phone Number *</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit number"
                className={`w-full px-4 py-3.5 border rounded-none font-poppins text-sm md:text-base outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all bg-[#FAF7F2]/30 ${
                  errors.phone ? "border-red-500" : "border-[#D4AF37]/20"
                }`}
              />
              {errors.phone && <span className="font-poppins text-xs text-red-500 mt-1">{errors.phone}</span>}
            </div>

            {/* Field: Service Selection */}
            <div className="flex flex-col gap-1.5 col-span-1">
              <label htmlFor="service" className="font-montserrat text-xs tracking-wider uppercase text-[#111111] font-semibold flex items-center gap-1.5">
                <Clipboard className="w-3.5 h-3.5 text-[#C48A6A]" />
                <span>Choose Service *</span>
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 border rounded-none font-poppins text-sm md:text-base outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all bg-[#FAF7F2]/30 ${
                  errors.service ? "border-red-500" : "border-[#D4AF37]/20"
                }`}
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt === "Select a service" ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.service && <span className="font-poppins text-xs text-red-500 mt-1">{errors.service}</span>}
            </div>

            {/* Field: Date */}
            <div className="flex flex-col gap-1.5 col-span-1">
              <label htmlFor="date" className="font-montserrat text-xs tracking-wider uppercase text-[#111111] font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C48A6A]" />
                <span>Appointment Date *</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className={`w-full px-4 py-3.5 border rounded-none font-poppins text-sm md:text-base outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all bg-[#FAF7F2]/30 ${
                  errors.date ? "border-red-500" : "border-[#D4AF37]/20"
                }`}
              />
              {errors.date && <span className="font-poppins text-xs text-red-500 mt-1">{errors.date}</span>}
            </div>

            {/* Field: Time */}
            <div className="flex flex-col gap-1.5 col-span-1">
              <label htmlFor="time" className="font-montserrat text-xs tracking-wider uppercase text-[#111111] font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C48A6A]" />
                <span>Preferred Time Slot *</span>
              </label>
              <select
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 border rounded-none font-poppins text-sm md:text-base outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all bg-[#FAF7F2]/30 ${
                  errors.time ? "border-red-500" : "border-[#D4AF37]/20"
                }`}
              >
                <option value="">Choose a slot</option>
                <option value="09:00 AM - 11:00 AM">Morning (09:00 AM - 11:00 AM)</option>
                <option value="11:00 AM - 01:00 PM">Late Morning (11:00 AM - 01:00 PM)</option>
                <option value="01:00 PM - 03:00 PM">Early Afternoon (01:00 PM - 03:00 PM)</option>
                <option value="03:00 PM - 05:00 PM">Afternoon (03:00 PM - 05:00 PM)</option>
                <option value="05:00 PM - 07:00 PM">Evening (05:00 PM - 07:00 PM)</option>
                <option value="07:00 PM - 09:00 PM">Late Evening (07:00 PM - 09:00 PM)</option>
              </select>
              {errors.time && <span className="font-poppins text-xs text-red-500 mt-1">{errors.time}</span>}
            </div>

            {/* Field: Message */}
            <div className="flex flex-col gap-1.5 col-span-1 md:col-span-2">
              <label htmlFor="message" className="font-montserrat text-xs tracking-wider uppercase text-[#111111] font-semibold flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#C48A6A]" />
                <span>Custom Notes / Stylist Preference (Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Mention special styling instructions, hair history or stylist preferences here..."
                rows={4}
                className="w-full px-4 py-3.5 border border-[#D4AF37]/20 rounded-none font-poppins text-sm md:text-base outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all bg-[#FAF7F2]/30"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 mt-4">
              <Button
                variant="gold"
                size="lg"
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Securing Your Slot..." : "Confirm Reservation"}
              </Button>
            </div>

          </form>
        </motion.div>

        {/* Fullscreen Success Overlay Dialog */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#111111]/85 z-[99] flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white border border-[#D4AF37]/30 max-w-md w-full p-8 shadow-2xl relative text-center"
              >
                {/* Close Success Icon */}
                <button
                  onClick={handleCloseSuccess}
                  className="absolute top-4 right-4 text-[#111111]/45 hover:text-[#D4AF37] transition-colors focus:outline-none p-1 cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Animated check circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-[#FAF7F2] border-2 border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37] mb-6"
                >
                  <Check className="w-8 h-8" />
                </motion.div>

                {/* Success Title */}
                <h3 className="font-playfair font-black text-2xl text-[#111111] uppercase tracking-wide">
                  Appointment Reserved!
                </h3>
                <div className="h-[2px] w-12 bg-[#D4AF37] mx-auto mt-3 mb-6" />
                
                {/* Thank You message */}
                <p className="font-poppins text-xs md:text-sm text-[#333333]/70 leading-relaxed mb-6">
                  Thank you, <span className="font-bold text-[#111111]">{form.name}</span>. Your reservation for <span className="font-semibold text-[#D4AF37]">{form.service}</span> was registered successfully.
                </p>

                {/* Detail summary box */}
                <div className="bg-[#FAF7F2] border border-[#D4AF37]/15 p-5 text-left mb-8 flex flex-col gap-2.5">
                  <div className="flex justify-between font-poppins text-[11px] md:text-xs">
                    <span className="text-[#333333]/55 uppercase font-montserrat tracking-wider font-semibold">Service:</span>
                    <span className="font-bold text-[#111111]">{form.service}</span>
                  </div>
                  <div className="flex justify-between font-poppins text-[11px] md:text-xs">
                    <span className="text-[#333333]/55 uppercase font-montserrat tracking-wider font-semibold">Date:</span>
                    <span className="font-bold text-[#111111]">{form.date}</span>
                  </div>
                  <div className="flex justify-between font-poppins text-[11px] md:text-xs">
                    <span className="text-[#333333]/55 uppercase font-montserrat tracking-wider font-semibold">Time Slot:</span>
                    <span className="font-bold text-[#111111]">{form.time}</span>
                  </div>
                  <div className="flex justify-between font-poppins text-[11px] md:text-xs">
                    <span className="text-[#333333]/55 uppercase font-montserrat tracking-wider font-semibold">Phone:</span>
                    <span className="font-bold text-[#111111]">{form.phone}</span>
                  </div>
                </div>

                {/* Done Button */}
                <Button
                  variant="gold"
                  size="md"
                  onClick={handleCloseSuccess}
                  className="w-full"
                >
                  Done
                </Button>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default BookingForm;
