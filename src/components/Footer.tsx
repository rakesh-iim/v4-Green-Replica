import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 mb-6">
              <img 
                src="/Logo.png" 
                alt="MrGardenr Logo" 
                className="h-20 md:h-24 w-auto object-contain hidden bg-[#fbf9f1] p-3 rounded-xl shadow-lg" 
                onLoad={(e) => {
                  e.currentTarget.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('hidden');
                }} 
              />
              <span className="text-2xl font-bold text-emerald-500 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L14 3l-3 4.3"/></svg>
                MrGardenr
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Leading tech-driven landscape and garden design firm. We turn empty outdoor spaces into thriving centers of vitality.
            </p>
            <div className="flex space-x-4 mt-6 md:mt-0">
              <a href="#" className="group relative w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-emerald-500/25">
                <Facebook className="w-5 h-5 text-white" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                  Facebook
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                </span>
              </a>
              <a href="#" className="group relative w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-emerald-500/25">
                <Twitter className="w-5 h-5 text-white" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                  Twitter
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                </span>
              </a>
              <a href="#" className="group relative w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-emerald-500/25">
                <Linkedin className="w-5 h-5 text-white" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                  LinkedIn
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                </span>
              </a>
              <a href="#" className="group relative w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 hover:-translate-y-1 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-emerald-500/25">
                <Instagram className="w-5 h-5 text-white" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                  Instagram
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="group relative hover:text-emerald-400 transition-colors inline-block">
                  About Us
                  <span className="absolute left-0 bottom-full mb-2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 w-max shadow-lg">
                    Discover our roots, mission, and expert team
                    <span className="absolute top-full left-4 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="group relative hover:text-emerald-400 transition-colors inline-block">
                  Our Services
                  <span className="absolute left-0 bottom-full mb-2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 w-max shadow-lg">
                    Explore our professional landscaping solutions
                    <span className="absolute top-full left-4 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="group relative hover:text-emerald-400 transition-colors inline-block">
                  Portfolio
                  <span className="absolute left-0 bottom-full mb-2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 w-max shadow-lg">
                    View our recent masterpieces and past projects
                    <span className="absolute top-full left-4 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="group relative hover:text-emerald-400 transition-colors inline-block">
                  Testimonials
                  <span className="absolute left-0 bottom-full mb-2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 w-max shadow-lg">
                    Read authentic reviews from our happy clients
                    <span className="absolute top-full left-4 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="group relative hover:text-emerald-400 transition-colors inline-block">
                  Blogs
                  <span className="absolute left-0 bottom-full mb-2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 w-max shadow-lg">
                    Glean insights and the latest landscaping trends
                    <span className="absolute top-full left-4 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="group relative hover:text-emerald-400 transition-colors inline-block">
                  Landscape Architecture
                  <span className="absolute left-0 bottom-full mb-2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 w-max shadow-lg">
                    Custom 3D design and expert master planning
                    <span className="absolute top-full left-8 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="group relative hover:text-emerald-400 transition-colors inline-block">
                  Lawn Care & Maintenance
                  <span className="absolute left-0 bottom-full mb-2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 w-max shadow-lg">
                    Consistent upkeep to keep your greens healthy
                    <span className="absolute top-full left-8 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="group relative hover:text-emerald-400 transition-colors inline-block">
                  Hardscaping
                  <span className="absolute left-0 bottom-full mb-2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 w-max shadow-lg">
                    Expert installation of patios & stone features
                    <span className="absolute top-full left-8 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="group relative hover:text-emerald-400 transition-colors inline-block">
                  Seasonal Cleanups
                  <span className="absolute left-0 bottom-full mb-2 bg-gray-800 text-emerald-50 text-xs px-2 py-1 rounded opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 w-max shadow-lg">
                    Comprehensive spring & fall garden preparation
                    <span className="absolute top-full left-8 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <span>Level 5, One Horizon Center, DLF Phase 5, Gurugram, Haryana 122002</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                <span>+91 7377 551040</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                <span>hello@mrgardenr.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MrGardenr. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
