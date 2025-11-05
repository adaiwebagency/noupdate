import { Sparkles, Palette } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Template } from '../types';

interface OurWorkProps {
  onNavigate: (page: string) => void;
}

export default function OurWork({ onNavigate }: OurWorkProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const templates: Template[] = [
    {
      id: 1,
      name: 'Minimal Neon',
      colorScheme: 'Black + Green',
      gradient: 'from-black via-green-900/20 to-green-500/30',
    },
    {
      id: 2,
      name: 'Light Mode Pro',
      colorScheme: 'White + Cyan',
      gradient: 'from-white via-cyan-100 to-cyan-300',
    },
    {
      id: 3,
      name: 'Gradient Pulse',
      colorScheme: 'Purple + Blue',
      gradient: 'from-purple-500 via-blue-500 to-cyan-500',
    },
    {
      id: 4,
      name: 'AI Matrix',
      colorScheme: 'Black + Blue',
      gradient: 'from-black via-blue-900/20 to-blue-500/30',
    },
    {
      id: 5,
      name: 'Corporate Flow',
      colorScheme: 'Navy + Grey',
      gradient: 'from-slate-800 via-slate-600 to-slate-400',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Work
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Explore how ADAI delivers intelligent, high-impact web solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
        </div>

        <div className="mb-20 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-full px-8 py-4">
            <p className="text-xl md:text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                10+ Projects Delivered
              </span>{' '}
              — Trusted by brands and businesses that value innovation.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Sparkles className="text-cyan-400" size={32} />
              Coming Soon
            </h2>
            <p className="text-gray-400">Portfolio previews launching soon</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative aspect-video bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Sparkles className="text-cyan-400" size={28} />
                    </div>
                    <p className="text-gray-500 font-medium">Project Preview</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Palette className="text-cyan-400" size={32} />
              Design Templates
            </h2>
            <p className="text-gray-400">Modern, bold, and clean design variations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div
                key={template.id}
                className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2"
              >
                <div className={`h-64 bg-gradient-to-br ${template.gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <Palette size={40} className="text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/5 to-green-500/5 p-6 border-t border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{template.colorScheme}</p>
                  <button
                    onClick={() => onNavigate('Contact')}
                    className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-green-500 hover:text-white transition-all duration-300"
                  >
                    Preview Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
