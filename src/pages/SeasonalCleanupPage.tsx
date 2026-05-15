import React from 'react';
import { ArrowRight, CheckCircle2, Leaf, Snowflake, Sun, CloudRain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SeasonalCleanupPage() {
  const steps = [
    { title: "Spring Awakening", description: "Removing winter debris, pruning dormant plants, and fresh mulch installation." },
    { title: "Summer Upkeep", description: "Deadheading flowers, pulling weeds, and ensuring irrigation systems function properly." },
    { title: "Fall Preparation", description: "Comprehensive leaf removal, perennial cutbacks, and lawn aeration." },
    { title: "Winter Protection", description: "Wrapping sensitive shrubs, applying anti-desiccants, and pruning for heavy snow." }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557090495-fc9312e77b28?auto=format&fit=crop&w=1920&q=80" 
            alt="Seasonal Cleanup" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Ongoing Maintenance</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Seasonal Cleanups</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto font-light">
            Rigorous maintenance to clear debris and prepare your landscape for optimal growth through every season.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Priority</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Year-Round Vitality</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Transitioning between seasons is crucial for the health of your plants and lawn. Our seasonal cleanup services ensure your property is protected during dormant months and primed for vigorous growth when spring arrives.
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
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/#contact" className="inline-flex items-center bg-emerald-600 text-white font-semibold hover:bg-emerald-700 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1">
                Schedule a Cleanup <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative order-first">
              <div className="absolute inset-0 bg-emerald-100 rounded-3xl -translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=1000&q=80" 
                alt="Seasonal preparation" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-16 border-t border-gray-100">
            <div className="bg-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-emerald-100/50">
              <Sun className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Spring Refresh</h3>
              <p className="text-gray-600 text-sm">Vital preparation to wake up lawns and gardens after winter freezes.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-emerald-100/50">
              <CloudRain className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Summer Storm Prep</h3>
              <p className="text-gray-600 text-sm">Pruning weak branches and securing loose items before summer storms.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-emerald-100/50">
              <Leaf className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fall Leaf Clearing</h3>
              <p className="text-gray-600 text-sm">Preventing mold and pests by keeping heavy leaf matter off turf.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-emerald-100/50">
              <Snowflake className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Winterization</h3>
              <p className="text-gray-600 text-sm">Deep mulching and wrapping to insulate delicate plants from freezing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Year in the Garden</h2>
            <p className="text-gray-600 text-lg">Maintaining order and health as the environment shifts.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-xl mr-4 shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prepare for the Upcoming Season</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Don't let seasonal transitions damage your landscape investment. Secure your ongoing maintenance plan.
          </p>
          <Link to="/#contact" className="inline-flex items-center bg-white text-emerald-900 font-bold hover:bg-emerald-50 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1">
            Book Our Services
          </Link>
        </div>
      </section>
    </div>
  );
}
