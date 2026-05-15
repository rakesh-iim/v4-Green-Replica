import Testimonials from '../components/Testimonials';

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1920&q=80" 
            alt="Happy clients background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            See what our happy clients have to say about our work.
          </p>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
