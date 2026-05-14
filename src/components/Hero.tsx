import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-emerald-800 text-emerald-100 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              Premium Landscaping Services
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Crafting Nature's <span className="text-emerald-400">Sanctuary</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Transform your outdoor space into a vibrant, high-energy sanctuary. We blend professional precision with organic vitality to create tropical environments that breathe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center transition-all group shadow-lg shadow-emerald-900/20">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center transition-all border border-white/20">
                View Gallery
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-emerald-100">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-no-2 text-emerald-400 mr-2" />
                <span>Customized Design Plans</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-no-2 text-emerald-400 mr-2" />
                <span>Professional Execution</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-no-2 text-emerald-400 mr-2" />
                <span>Ongoing Maintenance Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
