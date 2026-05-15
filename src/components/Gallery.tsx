import { ArrowRight, Filter, X, Loader2, Leaf } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Gallery({ hideViewAll = false }: { hideViewAll?: boolean }) {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isFiltering, setIsFiltering] = useState(false);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

  const handleFilterChange = (category: string) => {
    if (category === filter) return;
    setIsFiltering(true);
    setFilter(category);
    setTimeout(() => setIsFiltering(false), 600); // Simulate processing time
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const items = [
    { location: 'Complete redesign & installation', title: 'Tropical Oasis Estate', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80', category: 'Renovation' },
    { location: 'Botanical Pathways', title: 'Serene Walkway', image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80', category: 'Residential' },
    { location: 'Hardscaping & Planting', title: 'Modern Courtyard', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', category: 'Commercial' },
    { location: 'Poolside integration', title: 'Luxury Resort Vibes', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80', category: 'Residential' },
    { location: 'Corporate Campus', title: 'Eco-Friendly Office Park', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80', category: 'Commercial' },
    { location: 'Urban Rooftop', title: 'Skyline Zen Garden', image: 'https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&w=800&q=80', category: 'Renovation' },
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

  return (
    <section className="py-24 bg-[#fbf9f1]" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-lg text-gray-600">
              A glimpse into the lush, vibrant environments we've cultivated for our clients.
            </p>
          </div>
          {!hideViewAll && (
            <Link to="/gallery" className="text-emerald-600 font-semibold flex items-center hover:text-emerald-700 whitespace-nowrap">
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <div className="flex items-center text-gray-500 mr-2">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleFilterChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-600 ring-offset-2 ring-offset-[#fbf9f1]'
                  : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {isFiltering ? (
          <div className="flex justify-center items-center py-32 min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
            </motion.div>
          </div>
        ) : (
          <motion.div 
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {filteredItems.map((item, index) => (
              <motion.div 
                key={index} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 100 } }
                }}
                onClick={() => {
                  setSelectedImage(item);
                  setModalImageLoaded(false);
                }}
                className={`group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/20 cursor-pointer w-full inline-block bg-gray-100 aspect-[4/3]`}
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="inline-block px-3 py-1 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-3 transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white transition-colors duration-300 transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100">{item.title}</h3>
                  <p className="text-emerald-50/90 text-sm mt-2 transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.location}
                  </p>
                  <div className="w-12 h-1 bg-emerald-500 mt-4 rounded-full transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        {!isFiltering && filteredItems.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 bg-emerald-50 rounded-3xl border border-emerald-100 overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-emerald-900/10 backdrop-blur-[2px]"></div>
            <div className="relative z-10 flex flex-col items-center max-w-md text-center p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Yet</h3>
              <p className="text-gray-600">
                We are currently cultivating our portfolio for the <span className="font-semibold text-emerald-700">{filter}</span> category. Check back soon for beautiful new transformations!
              </p>
              <button 
                onClick={() => handleFilterChange('All')}
                className="mt-6 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-colors shadow-md hover:shadow-lg focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                View All Projects
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative flex-1 min-h-[50vh] bg-black/50 flex items-center justify-center">
                {!modalImageLoaded && (
                  <Loader2 className="w-10 h-10 animate-spin text-emerald-500 absolute" />
                )}
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${modalImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setModalImageLoaded(true)}
                />
              </div>
              
              <div className="p-6 md:p-8 bg-gray-900 text-white flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/10">
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold rounded-full">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{selectedImage.title}</h3>
                  <p className="text-gray-400 font-medium">{selectedImage.location}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
