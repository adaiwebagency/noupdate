import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Our Work', 'Templates', 'Blog', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate('Home')}
          className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
        >
          <span className="text-cyan-400">ADAI</span> Agency
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                currentPage === item ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 transform origin-left transition-transform duration-300 ${
                  currentPage === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-cyan-500/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-sm font-medium transition-colors duration-300 ${
                  currentPage === item ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
