import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SeasonalCleanupPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557090495-fc9312e77b28?auto=format&fit=crop&w=1920&q=80" 
            alt="Seasonal Cleanup" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Seasonal Cleanups</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Rigorous maintenance to clear debris and prepare your landscape for optimal growth.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Year-Round Vitality</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Transitioning between seasons is crucial for the health of your plants and lawn. Our seasonal cleanup services ensure your property is protected during dormant months and primed for vigorous growth in spring.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Leaf and debris removal",
                  "Perennial cutbacks and pruning",
                  "Mulch installation and bed edging",
                  "Winterization of plants and systems"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/#contact" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                Schedule a Cleanup <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=1000&q=80" 
                alt="Seasonal preparation" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
