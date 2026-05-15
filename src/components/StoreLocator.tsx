import React from "react";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Ahmedabad", top: "45%", left: "28%" },
  { name: "Surat", top: "54%", left: "27%" },
  { name: "Vadodara", top: "49%", left: "29%" },
  { name: "Bangalore", top: "79%", left: "41%" },
];

export default function StoreLocator() {
  return (
    <section className="py-24 bg-white" id="store-locator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Store Locator</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find a MrGardenr location near you to transform your outdoor space.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 flex flex-col items-center">
              <div className="overflow-hidden flex items-center justify-center mb-2 h-24 md:h-36 w-full">
                <img 
                  src="/Logo.png" 
                  alt="MrGardenr Logo" 
                  className="h-36 md:h-56 w-auto object-contain transform scale-150" 
                />
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="h-[1px] w-16 bg-emerald-700"></div>
                <span className="text-emerald-700 text-lg font-serif italic">Est. 2024</span>
                <div className="h-[1px] w-16 bg-emerald-700"></div>
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">Our Footprint</h3>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-sm">
              {locations.map((loc) => (
                <button
                  key={loc.name}
                  className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-md text-sm md:text-base tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#fbf9f1]"
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="w-full relative flex items-center justify-center p-4">
            <div className="relative w-full max-w-[500px]">
              <img 
                src="https://img.freepik.com/premium-vector/india-map-icon_609277-5152.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="Map of India showing our footprint" 
                className="w-full h-auto mix-blend-multiply block" 
                style={{
                  filter: 'hue-rotate(-60deg) saturate(2) brightness(0.9) contrast(1.1)'
                }}
                referrerPolicy="no-referrer"
              />
              
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div className="relative flex flex-col items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                    <span className="animate-[ping_2.5s_ease-out_infinite] absolute inline-flex h-6 w-6 rounded-full bg-emerald-500 opacity-40"></span>
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-800 group-hover:text-emerald-600 transition-colors duration-300 drop-shadow-md" fill="currentColor" stroke="white" strokeWidth={1.5} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
