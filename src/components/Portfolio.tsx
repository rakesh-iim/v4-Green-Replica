import { ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const items = [
    { location: 'Complete redesign & installation', title: 'Tropical Oasis Estate', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-2', category: 'Renovation' },
    { location: 'Botanical Pathways', title: 'Serene Walkway', image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-1 row-span-1', category: 'Residential' },
    { location: 'Hardscaping & Planting', title: 'Modern Courtyard', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-1 row-span-1', category: 'Commercial' },
    { location: 'Poolside integration', title: 'Luxury Resort Vibes', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-1', category: 'Residential' }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

  return (
    <section className="py-24 bg-transparent" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Transformations</h2>
            <p className="text-lg text-gray-600">
              A glimpse into the lush, vibrant environments we've cultivated for our clients.
            </p>
          </div>
          <button className="text-emerald-600 font-semibold flex items-center hover:text-emerald-700 whitespace-nowrap">
            View Full Gallery
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <div className="flex items-center text-gray-500 mr-2">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                filter === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 transition-all duration-500 ${filter === 'All' ? 'h-auto md:h-[600px] grid-rows-2' : 'auto-rows-[300px]'}`}>
          {filteredItems.map((item, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-2xl ${filter === 'All' ? item.span : 'col-span-1 md:col-span-2 max-h-[300px]'}`}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full mb-2">
                  {item.location}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
