import { ArrowRight } from 'lucide-react';

export default function Blogs() {
  const blogs = [
    {
      title: 'A Guide to Choosing the Right Native Plants for Your Garden',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80',
      category: 'Garden Design Tips'
    },
    {
      title: 'The Benefits of Professional Lawn Maintenance Packages',
      image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=600&q=80',
      category: 'Maintenance Packages'
    },
    {
      title: 'Transforming Your Backyard: A Portfolio Showcase',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80',
      category: 'Portfolio Showcase'
    }
  ];

  return (
    <section className="py-24 bg-[#fbf9f1]" id="blogs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Insights</h2>
            <p className="text-lg text-gray-600">
              Expert advice, design trends, and guides to help you make informed decisions about your landscaping.
            </p>
          </div>
          <button className="text-emerald-600 font-semibold flex items-center hover:text-emerald-700 whitespace-nowrap">
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-gray-100">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-emerald-600 text-sm font-semibold mb-2 block">{blog.category}</span>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                {blog.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
