import { Brain, Target, Lightbulb } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Who{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              We Are
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full" />
        </div>

        <div className="mb-20">
          <div className="bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-3xl p-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              ADAI Agency blends design, automation, and intelligence. We craft custom websites that
              integrate with human-like AI to help businesses operate smarter and faster.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses with intelligent systems that automate connection,
                communication, and growth.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Philosophy</h3>
              <p className="text-gray-400 leading-relaxed">
                We're creators, technologists, and problem-solvers who merge aesthetics with
                intelligence.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Approach</h3>
              <p className="text-gray-400 leading-relaxed">
                We combine cutting-edge AI technology with elegant design to build solutions that
                are both powerful and intuitive.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-3xl blur-2xl" />
          <div className="relative bg-black border border-cyan-500/30 rounded-3xl p-12 text-center">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
              At{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 font-bold">
                ADAI Agency
              </span>
              , we don't just build websites — we architect digital ecosystems that work
              intelligently, respond naturally, and scale effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
