import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl text-white mb-6">
          MYRRA <span className="text-luxury-gold">MUNIZ</span>
        </h2>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-luxury-gold hover:text-black transition-all">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-luxury-gold hover:text-black transition-all">
            <Facebook size={20} />
          </a>
        </div>

        <p className="text-gray-600 text-sm font-light">
          &copy; {new Date().getFullYear()} Studio Myrra Muniz. Todos os direitos reservados.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Desenvolvido por <span className="text-luxury-bronze">LS CODE - Soluções Digitais</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;