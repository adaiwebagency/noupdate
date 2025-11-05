import { Newspaper, ExternalLink, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { BlogPost } from '../types';

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'AI Tools Revolutionizing Web Design in 2025',
      source: 'Tech Insider',
      date: '2025-11-01',
      excerpt:
        'Discover how artificial intelligence is transforming the landscape of web development, from automated design systems to intelligent user experiences.',
    },
    {
      id: 2,
      title: 'How Automation is Shaping Small Business Growth',
      source: 'Business Today',
      date: '2025-11-01',
      excerpt:
        'Small businesses are leveraging automation to compete with larger enterprises. Learn about the tools and strategies driving this revolution.',
    },
    {
      id: 3,
      title: 'Why Smart Chat Agents Are the Future of Customer Support',
      source: 'AI Weekly',
      date: '2025-11-01',
      excerpt:
        'Customer expectations are evolving. Smart AI chat agents provide 24/7 support, instant responses, and personalized interactions that traditional methods cannot match.',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Newspaper size={40} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Automation News &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Insights
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Stay updated with the latest trends in AI, automation, and web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full mt-6" />
        </div>

        <div className="mb-12 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30 rounded-full px-6 py-3">
            <p className="text-sm text-gray-400">
              Daily updates from trusted sources in tech, web, and AI
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-full bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-green-500/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper size={64} className="text-cyan-400/30" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-cyan-400 font-medium">
                      {post.source}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                  <button className="flex items-center gap-2 text-cyan-400 font-medium text-sm hover:gap-3 transition-all duration-300">
                    Read More
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-cyan-500/5 to-green-500/5 border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Want to contribute?</h3>
            <p className="text-gray-400 mb-6">
              Share your insights on automation, AI, and web development with our community.
            </p>
            <a
              href="mailto:adaiwebagency@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get in Touch
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
