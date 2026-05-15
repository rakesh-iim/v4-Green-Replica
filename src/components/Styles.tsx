import { Link } from 'react-router-dom';

export default function Styles() {
  const styles = [
    { name: 'Landscape Architecture', href: '/services/landscape-architecture', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80', description: 'Expertly curated layouts that balance saturated botanical tones with pristine structures.' },
    { name: 'Lawn Care', href: '/services/lawn-care', image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=600&q=80', description: 'Precision mowing, aeration, and fertilization to maintain a vibrant, high-energy green canvas.' },
    { name: 'Hardscaping', href: '/services/hardscaping', image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80', description: 'Structurally sound stonework, pathways, and patios that provide architectural definition.' },
    { name: 'Seasonal Cleanup', href: '/services/seasonal-cleanup', image: 'https://images.unsplash.com/photo-1557090495-fc9312e77b28?auto=format&fit=crop&w=600&q=80', description: 'Rigorous maintenance to clear debris and prepare your landscape for optimal growth.' }
  ];

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Landscaping Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive landscaping solutions designed to cultivate vibrant, healthy, and structurally sound environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {styles.map((style, index) => (
            <Link to={style.href} key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-900/20 block">
              <div 
                className="aspect-[4/5] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${style.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold text-white mb-2">{style.name}</h3>
                <p className="text-emerald-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-3">
                  {style.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
