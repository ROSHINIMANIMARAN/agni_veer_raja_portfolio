import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [demoNotice, setDemoNotice] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setDemoNotice(null);
      return;
    }

    setErrors({});
    // Explicit demo notice as instructed: do NOT fake backend success
    setDemoNotice(
      `DEMO NOTICE: Form validated successfully for "${formData.name}". Since this is a client-side architecture portfolio demo without an active backend server, no email was actually transmitted. To connect directly, please reach out via the email or LinkedIn links on the left.`
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-8 lg:px-12 bg-offwhite border-t border-sand/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-olive text-xs font-mono tracking-widest uppercase">
                Inquiries & Collaborations
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif text-charcoal leading-tight">
                Have a space in mind? Let's talk.
              </h2>
              <p className="text-stone text-base font-light leading-relaxed pt-2">
                Available for architectural internships, collaborative research, design
                competitions, and spatial commissions.
              </p>
            </div>

            {/* Direct Contact info cards */}
            <div className="space-y-4 pt-4 border-t border-sand/80">
              <div className="flex items-start gap-4 p-4 bg-sand/30 border border-sand">
                <Mail className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-stone">Direct Email</p>
                  <a
                    href="mailto:aarav.sharma.arch@example.com"
                    className="text-sm font-medium text-charcoal hover:text-olive transition-colors"
                  >
                    aarav.sharma.arch@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-sand/30 border border-sand">
                <Phone className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-stone">Telephone</p>
                  <a
                    href="tel:+919384510353"
                    className="text-sm font-medium text-charcoal hover:text-olive transition-colors"
                  >
                    +91 93845 10353
                  </a>
                </div>
              </div>

              {/* WhatsApp direct chat card */}
              <a
                href="https://wa.me/919384510353"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 hover:bg-green-100 hover:border-green-400 transition-all duration-200 group"
              >
                {/* WhatsApp SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 shrink-0 mt-0.5 fill-green-600"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-green-700">WhatsApp</p>
                  <p className="text-sm font-medium text-green-800 group-hover:text-green-900 transition-colors">
                    Chat on WhatsApp →
                  </p>
                  <p className="text-xs text-green-600 mt-0.5">+91 93845 10353</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-sand/30 border border-sand">
                <MapPin className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-stone">Studio Base</p>
                  <p className="text-sm font-medium text-charcoal">
                    Bangalore / Ahmedabad, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-widest text-stone mb-3">
                Professional Networks
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'LinkedIn', url: 'https://linkedin.com' },
                  { name: 'Behance', url: 'https://behance.net' },
                  { name: 'Instagram', url: 'https://instagram.com' },
                  { name: 'WhatsApp', url: 'https://wa.me/919384510353' },
                  { name: 'ArchDaily', url: 'https://archdaily.com' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-surface border border-sand hover:border-charcoal hover:bg-charcoal hover:text-offwhite transition-all duration-200"
                  >
                    {item.name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface p-8 sm:p-10 border border-sand shadow-sm">
            <h3 className="font-serif text-2xl text-charcoal mb-2">Send a Message</h3>
            <p className="text-xs text-stone font-light mb-6">
              Fill out the details below. For design proposals, feel free to include site location
              and rough timeline.
            </p>

            {/* Demo Notice Alert */}
            {demoNotice && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 border border-amber-300 bg-amber-50 text-amber-950 text-xs leading-relaxed flex gap-3"
              >
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold uppercase tracking-wider text-amber-900 mb-1">
                    Demo Mode Notice
                  </p>
                  <p>{demoNotice}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-charcoal mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Maya Patel"
                    className={`w-full px-4 py-3 text-sm bg-offwhite border rounded-none focus:outline-none focus:ring-1 focus:ring-olive transition-colors ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-sand'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-charcoal mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="maya@example.com"
                    className={`w-full px-4 py-3 text-sm bg-offwhite border rounded-none focus:outline-none focus:ring-1 focus:ring-olive transition-colors ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-sand'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-charcoal mb-1.5">
                  Project Type / Inquiries
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Architectural Internship / Residential Commission"
                  className="w-full px-4 py-3 text-sm bg-offwhite border border-sand rounded-none focus:outline-none focus:ring-1 focus:ring-olive transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-charcoal mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details regarding your site, program, timeline, or collaborative vision..."
                  className={`w-full px-4 py-3 text-sm bg-offwhite border rounded-none focus:outline-none focus:ring-1 focus:ring-olive transition-colors resize-none ${
                    errors.message ? 'border-red-500 bg-red-50/20' : 'border-sand'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal text-offwhite text-xs font-semibold uppercase tracking-widest hover:bg-olive transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>

              <div className="flex items-center gap-2 pt-2 text-[11px] text-stone font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-olive shrink-0" />
                <span>Respecting your privacy. No spam or commercial marketing.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
