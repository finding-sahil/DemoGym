import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        q: "Do I need prior experience to join the gym?",
        a: "Absolutely not! We welcome members of all fitness levels. Our trainers are here to guide you every step of the way."
    },
    {
        q: "Do you provide personalized training plans?",
        a: "Yes, our certified personal trainers can create custom workout and nutrition plans tailored to your specific goals."
    },
    {
        q: "What amenities are available at your gym?",
        a: "We offer state-of-the-art equipment, a luxury steam room, dedicated posing room, in-house cafe, supplement store, and secure locker rooms."
    },
    {
        q: "Are your trainers certified?",
        a: "Yes, all our trainers are certified professionals with extensive experience in fitness and body transformation."
    }
];

const FAQPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="pt-20">
            {/* Header */}
            <div className="h-[50vh] relative flex items-center justify-center bg-[url('/about-gym.png')] bg-cover bg-center bg-fixed">
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center">
                    <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-4 block">Common Queries</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase">Popular <span className="text-gold-500">Questions</span></h1>
                </div>
            </div>

            <section className="py-24 bg-dark-900">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-white text-black">
                                <button
                                    className="w-full flex justify-between items-center p-6 text-left font-bold text-lg md:text-xl uppercase tracking-tight hover:bg-gray-100 transition-colors"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    {item.q}
                                    {openIndex === index ? <Minus className="w-6 h-6 text-gold-600" /> : <Plus className="w-6 h-6 text-gold-600" />}
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;
