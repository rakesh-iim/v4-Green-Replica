import React from 'react';

export default function ClientMarquee() {
  const logos = [
    { name: 'KAYA', subtitle: 'SKIN CLINIC', color: 'text-emerald-900', subColor: 'text-emerald-700' },
    { name: 'BluSmart', subtitle: '', color: 'text-blue-600', subColor: '' },
    { name: 'Amway', subtitle: '', color: 'text-[#0f3b73] border-b-2 border-red-500 pb-1', subColor: '' },
    { name: 'MEDCELL', subtitle: 'THE NETHERLANDS', color: 'text-[#004e92]', subColor: 'text-[#004e92]' },
    { name: 'IHG', subtitle: 'HOTELS & RESORTS', color: 'text-gray-900', subColor: 'text-gray-600' },
    { name: 'Hero', subtitle: '', color: 'text-[#e31837]', subColor: '' },
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-[#fbf9f1] overflow-hidden border-t border-b border-gray-100" id="trusted-by">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 6)); }
        }
        .marquee-track {
          display: flex;
          width: calc(250px * 24);
          animation: scroll 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide">
          Designed for workplaces of every scale
        </h2>
      </div>
      <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 md:before:w-32 before:bg-gradient-to-r before:from-[#fbf9f1] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 md:after:w-32 after:bg-gradient-to-l after:from-[#fbf9f1] after:to-transparent">
        <div className="marquee-track items-center">
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[250px] flex flex-col items-center justify-center transition-transform hover:scale-110 cursor-pointer"
            >
              <span className={`text-3xl font-black ${logo.color} flex items-center`}>
                {logo.name}
              </span>
              {logo.subtitle && (
                <span className={`text-[0.6rem] font-bold tracking-widest mt-1 uppercase ${logo.subColor}`}>
                  {logo.subtitle}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
