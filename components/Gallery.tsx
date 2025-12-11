import React, { useState } from 'react';
import { Camera } from 'lucide-react';

type Category = 'all' | 'loiros' | 'morenas' | 'cortes' | 'ambiente';

interface GalleryItem {
  id: number;
  category: Category;
  title: string;
  image: string;
}

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const items: GalleryItem[] = [
    {
      id: 1,
      category: 'loiros',
      title: 'Loiro Pérola',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'morenas',
      title: 'Morena Iluminada Mel',
      image: 'https://images.unsplash.com/photo-1617391764618-971c26c11696?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'cortes',
      title: 'Bob Cut Moderno',
      image: 'https://images.unsplash.com/photo-1595476103518-3c8addac5ee9?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      category: 'ambiente',
      title: 'Área de Lavatório',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 5,
      category: 'loiros',
      title: 'Mechas Pontuais',
      image: 'https://images.unsplash.com/photo-1527568589780-e794dc223408?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 6,
      category: 'morenas',
      title: 'Castanho Avelã',
      image: 'https://images.unsplash.com/photo-1596459349845-a9220953a960?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 7,
      category: 'cortes',
      title: 'Long Layers',
      image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 8,
      category: 'ambiente',
      title: 'Recepção',
      image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 9,
      category: 'loiros',
      title: 'Ice Blonde',
      image: 'https://images.unsplash.com/photo-1626027415132-70b923055374?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'Todos' },
    { id: 'loiros', label: 'Loiros' },
    { id: 'morenas', label: 'Morenas' },
    { id: 'cortes', label: 'Cortes' },
    { id: 'ambiente', label: 'Espaço' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-luxury-dark relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-luxury-gold opacity-80">
            <Camera size={16} />
            <span className="uppercase tracking-[0.3em] text-xs font-semibold">Nosso Portfólio</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Galeria de Transformações</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm uppercase tracking-wider ${
                activeFilter === cat.id
                  ? 'bg-luxury-gold text-black border-luxury-gold font-medium'
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-luxury-gold hover:text-luxury-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-80 rounded-lg overflow-hidden cursor-pointer animate-fade-in transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] border border-white/5 hover:border-luxury-gold/50"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block text-luxury-gold text-xs uppercase tracking-widest mb-2">
                    {categories.find(c => c.id === item.category)?.label}
                  </span>
                  <h3 className="font-serif text-2xl text-white italic">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for simple fade animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Gallery;