import React from 'react';
import { ArrowRight, CheckCircle2, Hammer, Flame, Fence, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HardscapingPage() {
  const steps = [
    { title: "Design Consultation", description: "Mapping out functional spaces, pathways, levels, and structures." },
    { title: "Material Selection", description: "Choosing the right stones, pavers, or woods to match your home's aesthetic." },
    { title: "Site Preparation", description: "Excavating, leveling, and creating a solid foundation for structures." },
    { title: "Precision Installation", description: "Expert masonry and carpentry executed with meticulous attention to detail." },
    { title: "Final Finishing", description: "Sealing, curing, and polishing the installed features for longevity." }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1920&q=80" 
            alt="Hardscaping" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Structural Excellence</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Masterful Hardscaping</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto font-light">
            Structurally sound stonework, pathways, and patios that provide architectural definition to your outdoors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Craft</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Structural Elegance</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We design and build hardscape features that anchor your outdoor living spaces. Using premium natural stone, pavers, and concrete, our masonry experts create functional and enduring structures that last generations.
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
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/#contact" className="inline-flex items-center bg-emerald-600 text-white font-semibold hover:bg-emerald-700 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1">
                Explore Options <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-emerald-100 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80" 
                alt="Hardscaping details" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-gray-100">
            <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-emerald-100/50">
              <Mountain className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patios & Terraces</h3>
              <p className="text-gray-600 leading-relaxed">Elegant outdoor lounging spaces crafted from durable, weather-resistant stone and pavers.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-emerald-100/50">
              <Flame className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fire & Water Features</h3>
              <p className="text-gray-600 leading-relaxed">Focal points that add ambiance and sound, combining elements of nature for a relaxing atmosphere.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-emerald-100/50">
              <Fence className="w-12 h-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Walls & Fencing</h3>
              <p className="text-gray-600 leading-relaxed">Retaining walls that prevent erosion along with beautiful privacy features integrating seamlessly with the landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Construction Process</h2>
            <p className="text-gray-600 text-lg">Building solid foundations for enduring outdoor structures.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Build the Foundation of Your Oasis</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            From stonework to wood decking, our team is ready to bring your structural vision to reality.
          </p>
          <Link to="/#contact" className="inline-flex items-center bg-white text-emerald-900 font-bold hover:bg-emerald-50 px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1">
            Start Your Build
          </Link>
        </div>
      </section>
    </div>
  );
}
