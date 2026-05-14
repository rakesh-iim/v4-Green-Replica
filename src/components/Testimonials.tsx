import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Elena Rodriguez',
      role: 'Highland Estates',
      content: 'VerdantCraft completely revitalized our property. The balance of vibrant greenery and pristine stonework feels like a private luxury resort. Truly professional.',
      rating: 5
    },
    {
      name: 'Michael Chang',
      role: 'Private Resident',
      content: 'Their attention to detail is unmatched. Our lawn has never looked healthier, and the seasonal cleanups make a world of difference. Incredible team.',
      rating: 5
    },
    {
      name: 'Sarah Mitchell',
      role: 'Property Manager',
      content: 'The hardscaping team transformed our backyard into a stunning entertainment space. Highly recommend their expertise to anyone looking to upgrade.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rooted in Quality</h2>
          <p className="text-lg text-emerald-200 max-w-2xl mx-auto">
            Our commitment to organic vitality and structural precision is reflected in our track record. We don't just plant; we orchestrate ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-emerald-900/50 p-8 rounded-2xl border border-emerald-800/50">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-emerald-50 mb-6 text-lg leading-relaxed">"{review.content}"</p>
              <div>
                <h4 className="font-bold text-white">{review.name}</h4>
                <p className="text-emerald-300 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
