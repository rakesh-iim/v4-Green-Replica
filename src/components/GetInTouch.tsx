import { ArrowRight } from 'lucide-react';

export default function GetInTouch() {
  return (
    <section className="py-24 bg-emerald-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-emerald-500 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-700 opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 p-12 lg:p-16 bg-emerald-950 text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Project Today</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-md leading-relaxed">
              Ready to bring breathing room and lush vitality to your landscape? Our design team is ready to consult with you.
            </p>
            <ul className="space-y-4 text-emerald-200">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3"></div>
                Customized Design Plans
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3"></div>
                Professional Execution
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3"></div>
                Ongoing Maintenance Options
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Rahul Sharma"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="rahul@company.in"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="landscape-architecture">Landscape Architecture</option>
                  <option value="lawn-care">Lawn Care & Maintenance</option>
                  <option value="hardscaping">Hardscaping (Patios, Walkways)</option>
                  <option value="seasonal-cleanup">Seasonal Cleanup</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <button 
                type="button" 
                className="w-full bg-emerald-600 text-white border-2 border-transparent hover:bg-white hover:text-emerald-600 hover:border-emerald-600 font-bold py-4 px-8 rounded-xl flex justify-center items-center transition-all duration-300 group"
              >
                Request Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
