import { Check, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Website with Standard Chat Agent',
      price: '$500',
      description: 'Ideal for small businesses looking for an interactive online presence',
      features: [
        'Responsive, modern 5-page website',
        'AI chat agent for FAQs, appointments, and customer inquiries',
        '24/7 Support',
      ],
    },
    {
      title: 'Website + Chat Agent + AI Phone Caller',
      price: '$750',
      description: 'Perfect for service-based businesses needing real-time client interaction',
      features: [
        'Everything in Service 1',
        'AI Phone Caller system for booking confirmations and follow-ups',
        '24/7 Support',
      ],
      featured: true,
    },
    {
      title: 'Website + Chat Agent + AI Phone Caller + Mass Outreach System',
      price: '$1,000',
      description: 'Ideal for scaling businesses focusing on automation and outreach',
      features: [
        'Everything in Service 2',
        'Mass Outreach Automation (email + SMS)',
        '24/7 Support',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Choose the level of automation
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              that fits your vision.
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative h-full bg-gradient-to-br from-cyan-500/5 to-green-500/5 border ${
                  service.featured ? 'border-cyan-500/50' : 'border-cyan-500/20'
                } rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2`}
              >
                {service.featured && (
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-3xl" />
                )}

                <div className="relative">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={16} className="text-white" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigate('Contact')}
                    className={`w-full px-6 py-4 font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 ${
                      service.featured
                        ? 'bg-gradient-to-r from-cyan-500 to-green-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                        : 'bg-white/5 border border-cyan-500/30 text-white hover:bg-white/10 hover:border-cyan-500/50'
                    }`}
                  >
                    Get Started
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-2xl px-8 py-6">
            <p className="text-gray-300 mb-2">
              All services include{' '}
              <span className="text-cyan-400 font-semibold">$100/month</span> for:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>• Hosting & Domain Renewal</span>
              <span>• Retainer Updates</span>
              <span>• Bug Fixes</span>
              <span>• Performance Checks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
