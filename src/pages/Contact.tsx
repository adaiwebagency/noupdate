import { Mail, MapPin, Send, Instagram } from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `
New Project Inquiry from ADAI Agency Website

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Company Email: ${formData.email}
Selected Service: ${formData.service}

Project Description:
${formData.description}
    `.trim();

    const mailtoLink = `mailto:adaiwebagency@gmail.com?subject=Project Inquiry from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        description: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Start Your Project{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Today
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Let's build something intelligent together
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a
                    href="mailto:adaiwebagency@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    adaiwebagency@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                  <p className="text-gray-400">Ontario, Canada</p>
                  <p className="text-sm text-gray-500 mt-1">Serving clients worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Instagram</h3>
                  <a
                    href="https://www.instagram.com/adaiweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    @adaiweb
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-2xl">
              <p className="text-gray-400 text-sm leading-relaxed">
                We're based in Ontario, Canada — serving clients worldwide with intelligent web
                solutions and automation systems.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Select Service
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl text-white focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                >
                  <option value="">Choose a service...</option>
                  <option value="Website with Standard Chat Agent - $500">
                    Website with Standard Chat Agent - $500
                  </option>
                  <option value="Website + Chat Agent + AI Phone Caller - $750">
                    Website + Chat Agent + AI Phone Caller - $750
                  </option>
                  <option value="Website + Chat Agent + AI Phone Caller + Mass Outreach - $1,000">
                    Website + Chat Agent + AI Phone Caller + Mass Outreach - $1,000
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                  Description of Project
                </label>
                <textarea
                  id="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : submitStatus === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-center text-green-400 text-sm">
                  Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
