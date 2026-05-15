import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'How do you keep my garden thriving year-round?',
      answer: 'Opt for native plants and resilient layout designs. We choose structurally sound hardscaping alongside seasonal organic growth. Regular maintenance, proper aeration, and seasonal cleanups are also key.'
    },
    {
      question: 'What is the standard timeline for a landscape redesign?',
      answer: 'A typical project takes anywhere from 3 to 6 weeks, depending on the scale and complexity, including material sourcing and botanical planting. Our proprietary platform provides a precise timeline.'
    },
    {
      question: 'Do you provide end-to-end execution?',
      answer: 'Yes, we handle everything from civil groundwork, hardscaping, lawn installation, to final botanical integration and post-installation cleanups.'
    },
    {
      question: 'Can you match our existing exterior color palette?',
      answer: 'Absolutely. Our design consultants work closely with you to ensure the landscape architecture perfectly complements your estate’s architectural identity.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#fbf9f1]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all ${openIndex === index ? 'border-emerald-500 shadow-md' : 'border-gray-200'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left bg-white focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 bg-white shadow-[0_-10px_10px_-10px_rgba(0,0,0,0.05)]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
