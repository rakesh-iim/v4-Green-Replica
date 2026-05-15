import { ArrowRight } from 'lucide-react';

export default function News() {
  const articles = [
    { source: 'Garden Design Monthly', title: 'MrGardenr - Innovating modern estate landscaping' },
    { source: 'Eco Living Weekly', title: 'How sustainable horticulture is transforming urban backyards' },
    { source: 'Property Digest', title: 'The impact of expert hardscaping on property value: MrGardenr explains' },
    { source: 'Horticulture Today', title: 'Take a look at the winners of the Green Oasis awards 2025' },
    { source: 'Landscape Architecture', title: 'MrGardenr expands premium maintenance services to 50 new estates' },
    { source: 'Home & Garden', title: 'Creating your personal sanctuary: Tips from the experts at MrGardenr' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured in the Press</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what the industry is saying about our innovative approach to landscaping and garden design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col justify-between cursor-pointer">
              <div>
                <span className="text-sm font-semibold text-emerald-600 mb-2 block uppercase tracking-wider">{article.source}</span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{article.title}</h3>
              </div>
              <div className="mt-6 flex items-center text-emerald-600 font-medium text-sm">
                Read Article <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
