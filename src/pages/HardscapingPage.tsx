import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HardscapingPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1920&q=80" 
            alt="Hardscaping" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Masterful Hardscaping</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Structurally sound stonework, pathways, and patios that provide architectural definition.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Structural Elegance</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We design and build hardscape features that anchor your outdoor living spaces. Using premium natural stone, pavers, and concrete, our masonry experts create functional and enduring structures.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Custom patios and outdoor kitchens",
                  "Retaining walls and terracing",
                  "Flagstone pathways and walkways",
                  "Fire pits and water features"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/#contact" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                Explore Hardscaping Options <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80" 
                alt="Hardscaping details" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
