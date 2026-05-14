import { ShieldCheck, Leaf, MonitorSmartphone, ThumbsUp } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-emerald-600" />,
      title: 'Tech-Enabled Design',
      description: 'View 3D models of your landscape and manage layout approvals effortlessly through our tools.'
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: 'Organic Vitality',
      description: 'We prioritize soil health and native botanical selections to create thriving ecosystems.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: 'Structural Precision',
      description: 'Our hardscaping elements are built to last using premium materials and expert craftsmanship.'
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-emerald-600" />,
      title: 'Managed Estates',
      description: 'Join hundreds of satisfied clients who trust us with their premium estate maintenance.'
    }
  ];

  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose MrGardenr?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are revolutionizing landscaping by combining expert architectural design with sustainable horticulture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
