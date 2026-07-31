import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaLinkedin, FaInstagram, FaGithub, FaFacebook, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please complete all required fields.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="glow-orb-purple top-1/4 right-[-150px] w-[500px] h-[500px] pointer-events-none" />
      <div className="glow-orb-cyan bottom-10 left-[-150px] w-[450px] h-[450px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="09."
          title="Get In Touch"
          subtitle="Let's build something extraordinary together. Send a message or connect on social media."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-2xl font-extrabold text-white">
                Let's Connect & Collaborate
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I am always interested in discussing full-stack projects, AI product ideas, open-source collaborations, or speaking at developer events.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="font-mono text-cyan-300 hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center text-lg">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Location</span>
                    <span className="font-medium text-white">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Links List */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Social Channels:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                  >
                    <FaLinkedin className="text-base text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white hover:border-white/30 transition-all"
                  >
                    <FaGithub className="text-base text-white" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-pink-400 hover:border-pink-500/30 transition-all"
                  >
                    <FaInstagram className="text-base text-pink-400" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={personalInfo.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                  >
                    <FaFacebook className="text-base text-blue-400" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-slate-300 tracking-wider">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Prince Chauhan"
                      required
                      className="w-full px-4 py-3.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-slate-300 tracking-wider">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-slate-300 tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3.5 rounded-xl glass-input text-sm text-white placeholder-slate-500"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-slate-300 tracking-wider">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Prince, I'd like to discuss a project..."
                    required
                    className="w-full px-4 py-3.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 resize-none"
                  />
                </div>

                {/* Feedback Toast */}
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-sm">
                    {errorMessage}
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2">
                    <FaCheckCircle className="text-lg" />
                    <span>Thank you for reaching out! Your message has been sent successfully.</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-base disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <FaSpinner className="animate-spin text-lg" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
