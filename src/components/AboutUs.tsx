import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <section className="py-24 bg-transparent" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About MrGardenr</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At MrGardenr, we believe that an outdoor space is an extension of your home's character. We are a premier landscape architecture and gardening firm specializing in crafting nature's sanctuary right in your backyard. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of expertise in both structural hardscaping and botanical vitality, our team treats every project as a unique ecosystem. From tropical oasis redesigns to seasonal maintenance, we are committed to making your outdoors breathe.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center bg-emerald-600 text-white font-semibold hover:bg-emerald-700 px-6 py-3 rounded-full transition-colors shadow-sm"
            >
              Read Full Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80" 
                alt="Landscaping team at work" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-black text-emerald-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years of<br/>Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
