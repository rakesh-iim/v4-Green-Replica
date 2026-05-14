import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#fbf9f1]/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img 
              src="/Logo.png" 
              alt="MrGardenr Logo" 
              className="h-12 md:h-16 w-auto object-contain hidden transform scale-[1.5] md:scale-[1.8] origin-left" 
              onLoad={(e) => {
                e.currentTarget.classList.remove('hidden');
                e.currentTarget.nextElementSibling?.classList.add('hidden');
              }} 
            />
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-emerald-600"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L14 3l-3 4.3"/></svg>
              <span className="text-2xl font-bold text-emerald-700">MrGardenr</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Portfolio</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Testimonials</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Blogs</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+91888444888" className="flex items-center text-gray-700 hover:text-emerald-600 font-medium">
              <Phone className="w-4 h-4 mr-2" />
              +91 888 444 888
            </a>
            <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-emerald-700 transition-colors">
              Get an Estimate
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-emerald-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fbf9f1] border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium">About Us</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium">Services</Link>
            <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium">Portfolio</Link>
            <Link to="/testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium">Testimonials</Link>
            <Link to="/blogs" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium">Blogs</Link>
            <a href="tel:+91888444888" className="block px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium flex items-center">
               <Phone className="w-4 h-4 mr-2" /> +91 888 444 888
            </a>
            <button className="w-full text-left ml-3 mt-2 bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-emerald-700 transition-colors">
              Get an Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
