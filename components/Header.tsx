import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-luxury-black/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-widest text-white">
            MYRRA <span className="text-luxury-gold">MUNIZ</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Studio Hair</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-wider text-gray-300 hover:text-luxury-gold transition-colors duration-300 font-light relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <a 
            href="https://wa.me/5581999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-luxury-gold to-luxury-goldDark text-white px-6 py-2 rounded-full font-medium text-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:scale-105"
          >
            <Calendar size={16} />
            Agendar Horário
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-luxury-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col items-center py-8 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-serif text-gray-200 hover:text-luxury-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5581999999999" 
            className="mt-4 px-8 py-3 border border-luxury-gold text-luxury-gold rounded-full hover:bg-luxury-gold hover:text-black transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Agendar Agora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;