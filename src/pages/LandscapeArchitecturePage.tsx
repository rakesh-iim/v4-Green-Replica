import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandscapeArchitecturePage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80" 
            alt="Landscape Architecture" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Landscape Architecture</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Expertly curated layouts that balance saturated botanical tones with pristine structures.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visionary Design Process</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our landscape architecture service provides a comprehensive approach to exterior spaces. We blend site engineering, botanical science, and modern aesthetics to create sustainable, high-impact environments.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Site analysis and topographical planning",
                  "3D modeling and conceptual renderings",
                  "Sustainable drainage and irrigation systems",
                  "Material selection and botanical curation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/#contact" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1000&q=80" 
                alt="Architectural details" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
