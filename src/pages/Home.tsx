import { Zap, Bot, TrendingUp, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Smart Website Development',
      description:
        'Custom-built, responsive websites designed to convert visitors into customers with modern aesthetics and seamless functionality.',
    },
    {
      icon: Bot,
      title: 'AI Chat Agents',
      description:
        'Human-like AI assistants that handle customer inquiries, bookings, and support 24/7, making your business always available.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Outreach Systems',
      description:
        'Automated email and SMS campaigns that grow your reach and engagement without manual effort.',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-black to-green-500/10" />

        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div
          className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build. Automate.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Scale.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We design intelligent websites and automation systems that think, talk, and grow with
            your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('Contact')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
            <button
              onClick={() => onNavigate('Our Work')}
              className="px-8 py-4 bg-white/5 border border-cyan-500/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-cyan-500/10 to-green-500/10 border-y border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              10+ Projects Delivered
            </span>{' '}
            — Building the future of digital automation.
          </p>
        </div>
      </section>
    </div>
  );
}
