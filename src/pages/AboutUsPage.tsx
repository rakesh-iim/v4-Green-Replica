import { Target, Heart, Sprout } from 'lucide-react';

export default function AboutUsPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      title: 'Our Mission',
      description: 'To redefine outdoor living by designing sustainable, vibrant landscapes that connect people with nature.'
    },
    {
      icon: <Sprout className="w-8 h-8 text-emerald-600" />,
      title: 'Our Approach',
      description: 'We blend organic horticulture with structural precision, resulting in ecosystems that are both beautiful and resilient.'
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      title: 'Our Values',
      description: 'Deep dedication to environmental stewardship, unparalleled craftsmanship, and lasting client satisfaction.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section for About Page */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?auto=format&fit=crop&w=1920&q=80" 
            alt="Landscaping team at work" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MrGardenr</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Crafting nature's sanctuary right in your backyard.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At MrGardenr, we believe that an outdoor space is an extension of your home's character. We are a premier landscape architecture and gardening firm specializing in crafting nature's sanctuary right in your backyard. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With years of expertise in both structural hardscaping and botanical vitality, our team treats every project as a unique ecosystem. From tropical oasis redesigns to seasonal maintenance, we are committed to making your outdoors breathe.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80" 
                  alt="Beautiful landscape design" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-black text-emerald-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years of<br/>Excellence</div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="bg-emerald-50 rounded-3xl p-12 lg:p-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our core principles guide every project we undertake, ensuring we deliver exceptional results while caring for the environment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((item, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6 text-emerald-600">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
