import React from 'react';
import { ArrowRight, CheckCircle2, DraftingCompass, TreePine, Map, Droplet, Sun, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandscapeArchitecturePage() {
  const steps = [
    { title: "Initial Consultation", description: "We discuss your vision, budget, and perform a preliminary site evaluation." },
    { title: "Site Analysis & Strategy", description: "Detailed topographical surveys, soil testing, and environmental assessments." },
    { title: "Conceptual Design", description: "Drafting 2D & 3D models with material selection and botanical palettes." },
    { title: "Master Plan Approval", description: "Refining the design and finalizing construction documentation." },
    { title: "Implementation Oversight", description: "Guiding the installation phase to ensure architectural fidelity." }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80" 
            alt="Landscape Architecture" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Premium Service</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Landscape Architecture</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto font-light">
            Expertly curated layouts that balance saturated botanical tones with pristine structures for luxury outdoors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visionary Design Process</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our landscape architecture service provides a comprehensive approach to exterior spaces. We blend site engineering, botanical science, and modern aesthetics to create sustainable, high-impact environments that naturally expand your living space.
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
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/#contact" className="inline-flex items-center bg-emerald-600 text-white font-semibold hover:bg-emerald-700 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1">
                Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-emerald-100 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1000&q=80" 
                alt="Architectural details" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-gray-100">
            <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-emerald-100/50">
              <DraftingCompass className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Precision Planning</h3>
              <p className="text-gray-600 leading-relaxed">Every inch of your space is mapped and utilized effectively, ensuring a harmonious balance between hardscape and softscape.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-emerald-100/50">
              <TreePine className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Native Integration</h3>
              <p className="text-gray-600 leading-relaxed">We prioritize native and climate-appropriate species for sustainable, low-maintenance, and thriving ecosystems.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-emerald-100/50">
              <Layers className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Sensory Design</h3>
              <p className="text-gray-600 leading-relaxed">Incorporating textures, colors, and fragrances that evolve through the seasons for a continuously engaging experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-600 text-lg">A transparent and collaborative journey from concept to completion.</p>
          </div>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="md:w-1/4 mb-4 md:mb-0 flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-xl mr-4 shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <div className="md:w-3/4 flex items-center">
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Outdoors?</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Let's build the landscape you've always dreamed of. Contact our architects today for an introductory consultation.
          </p>
          <Link to="/#contact" className="inline-flex items-center bg-white text-emerald-900 font-bold hover:bg-emerald-50 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
