import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // TODO: Replace with your Formspree endpoint
    // Sign up at https://formspree.io/ and get your form ID
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-hydro-darker"></div>
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="absolute inset-0 noise"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <div className="inline-block px-4 py-1 border border-hydro-blue/30 rounded-full mb-4">
                <span className="text-hydro-blue text-xs font-body tracking-widest">
                  GET IN TOUCH
                </span>
              </div>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-bold mb-6">
              <span className="text-white">LET'S BUILD</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-hydro-blue to-hydro-green bg-clip-text clip-text">
                THE FUTURE
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Ready to transform your operations with autonomous drone technology? 
              Our team is here to discuss how HydroAvia can meet your specific needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-hydro-blue/10 border border-hydro-blue/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-hydro-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-display font-semibold mb-1">Email</h3>
                  <a href="mailto:sales@hydroavia.com" className="text-hydro-blue hover:text-hydro-blue transition-colors">
                    sales@hydroavia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-hydro-blue/10 border border-hydro-blue/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-hydro-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-display font-semibold mb-1">Phone</h3>
                  <a href="tel:+14088494408" className="text-hydro-blue hover:text-hydro-blue transition-colors">
                    +1 (408) 849-4408
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-hydro-green/10 border border-hydro-green/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-hydro-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-display font-semibold mb-1">Location</h3>
                  <p className="text-hydro-green">
                    150 Market Street<br />
                    Milpitas, CA 95035, USA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-body text-gray-400 mb-2">
                  NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-hydro-black/50 border border-hydro-blue/30 rounded px-4 py-3 text-white focus:border-hydro-blue focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-body text-gray-400 mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-hydro-black/50 border border-hydro-blue/30 rounded px-4 py-3 text-white focus:border-hydro-blue focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-body text-gray-400 mb-2">
                  COMPANY
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full bg-hydro-black/50 border border-hydro-blue/30 rounded px-4 py-3 text-white focus:border-hydro-blue focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-body text-gray-400 mb-2">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-hydro-black/50 border border-hydro-blue/30 rounded px-4 py-3 text-white focus:border-hydro-blue focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-hydro-green/10 border border-hydro-green/30 rounded text-hydro-green text-sm"
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm"
                >
                  ✗ Failed to send message. Please try again or email us directly.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-4 rounded font-display font-bold text-lg transition-all ${
                  status === 'submitting'
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-hydro-blue text-hydro-black hover:bg-hydro-blue hover:scale-105'
                }`}
              >
                {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Corner HUD elements */}
      <div className="absolute top-4 left-4 w-24 h-24 border-l-2 border-t-2 border-hydro-blue/20 pointer-events-none"></div>
      <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-hydro-blue/20 pointer-events-none"></div>
    </section>
  );
}
