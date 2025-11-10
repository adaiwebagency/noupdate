import { Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const navItems = ['Home', 'About', 'Services', 'Our Work', 'Contact'];

  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-cyan-400">ADAI</span> Agency
            </h3>
            <p className="text-gray-400 text-sm">
              Building intelligent websites and automation systems that think, talk, and grow with
              your business.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item)}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-left text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/adaiweb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Instagram size={20} />
                <span className="text-sm">@adaiweb</span>
              </a>
              <a
                href="mailto:adaiwebagency@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
              >
                adaiwebagency@gmail.com
              </a>
              <p className="text-gray-400 text-sm">Ontario, Canada</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 ADAI Agency. All Rights Reserved. | Ontario, Canada |{' '}
            <a
              href="mailto:adaiwebagency@gmail.com"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              adaiwebagency@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
