"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Cta() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    industry: '',
    contactNumber: '',
    email: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-[100px] font-bold uppercase tracking-tighter leading-none mb-12"
        >
          Let's <br /> Talk<span className="text-brand-red">.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors"
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="industry"
                placeholder="Industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors"
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-brand-red transition-colors resize-none"
            />

            <button
              type="submit"
              className="w-full group relative overflow-hidden bg-white text-black px-8 py-6 rounded-2xl flex items-center justify-center text-xl font-bold hover:text-white transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-3">
                <Calendar /> Book a Meeting
              </span>
              <ArrowRight className="relative z-10 transform group-hover:rotate-[-45deg] transition-transform duration-300 ml-2" />
            </button>
          </form>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <a
              href="#"
              className="flex-1 group relative overflow-hidden border-2 border-white/20 text-white px-8 py-4 rounded-2xl flex items-center justify-center text-lg font-bold hover:border-brand-red transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-3">
                <MessageCircle /> WhatsApp
              </span>
              <ArrowRight className="relative z-10 transform group-hover:rotate-[-45deg] transition-transform duration-300 ml-2" />
            </a>

            <a
              href="#"
              className="flex-1 group relative overflow-hidden border-2 border-white/20 text-white px-8 py-4 rounded-2xl flex items-center justify-center text-lg font-bold hover:border-brand-red transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-3">
                <Phone /> Call
              </span>
              <ArrowRight className="relative z-10 transform group-hover:rotate-[-45deg] transition-transform duration-300 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Abstract bold visual element */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-600 rounded-full blur-[150px] opacity-20 -z-0 pointer-events-none" />
    </section>
  );
}
