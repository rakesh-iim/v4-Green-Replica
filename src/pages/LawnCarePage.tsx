import React from 'react';
import { ArrowRight, CheckCircle2, Scissors, Sprout, Bug, CalendarClock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LawnCarePage() {
  const steps = [
    { title: "Lawn Assessment", description: "Evaluating soil health, grass type, and identifying problem areas." },
    { title: "Customized Plan", description: "Creating a tailored fertilization, weed control, and mowing schedule." },
    { title: "Consistent Execution", description: "Regular, precise treatments and maintenance by expert technicians." },
    { title: "Continuous Monitoring", description: "Adjusting treatments based on seasonal changes and lawn response." }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=1920&q=80" 
            alt="Lawn Care" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Essential Service</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Lawn Care & Maintenance</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto font-light">
            Precision mowing, aeration, and fertilization to maintain a vibrant, high-energy green canvas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pristine Green Maintenance</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A healthy lawn is the foundation of any great landscape. Our turf management programs are scientifically designed to promote thick, resilient growth while suppressing weeds and preventing disease effectively.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Precision mowing and detailing",
                  "Core aeration and overseeding",
                  "Organic fertilization and weed control",
                  "Soil testing and pH balancing"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/#contact" className="inline-flex items-center bg-emerald-600 text-white font-semibold hover:bg-emerald-700 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1">
                Get a Maintenance Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative order-first lg:order-last">
              <div className="absolute inset-0 bg-emerald-100 rounded-3xl -translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&w=1000&q=80" 
                alt="Lawn maintenance" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-gray-100">
            <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-emerald-100/50">
              <Scissors className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mowing & Edging</h3>
              <p className="text-gray-600 leading-relaxed">Immaculate lines and perfectly cut grass designed to encourage stronger roots and a lush appearance.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-emerald-100/50">
              <Bug className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pest & Weed Control</h3>
              <p className="text-gray-600 leading-relaxed">Safe, targeted treatments that rid your yard of invasive species without harming the surrounding environment.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-emerald-100/50">
              <Sprout className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Aeration & Feeding</h3>
              <p className="text-gray-600 leading-relaxed">Seasonal aeration combined with premium fertilizers to deliver nutrients deep down to the roots.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lawn Care Program</h2>
            <p className="text-gray-600 text-lg">A systematic approach to keeping your grass thick, green, and healthy year-round.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want a Greener Lawn?</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Take the guesswork out of lawn care. Trust our professionals to keep your property looking its best.
          </p>
          <Link to="/#contact" className="inline-flex items-center bg-white text-emerald-900 font-bold hover:bg-emerald-50 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1">
            Request an Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
