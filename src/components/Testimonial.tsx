import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
    {
        id: 1,
        name: "Sahil Khan",
        initials: "SK",
        role: "Pro Athlete",
        text: "A place where you push yourself to your limit and break through them. Incredible atmosphere and top-tier equipment. Best gym in Silchar hands down."
    },
    {
        id: 2,
        name: "Priya Sharma",
        initials: "PS",
        role: "Fitness Enthusiast",
        text: "The trainers here are exceptional. They really take the time to understand your goals. The luxury steam facility is the perfect way to recover after a hard session."
    },
    {
        id: 3,
        name: "Rahul Das",
        initials: "RD",
        role: "Member",
        text: "Barbell Legacy has completely changed my perspective on fitness. The environment is motivating and the community is supportive. 60% off pre-sale was a steal!"
    }
];

const Testimonial: React.FC = () => {
    const [current, setCurrent] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % reviews.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section className="relative bg-dark-900 border-t border-white/5 overflow-hidden">
            {/* Yellow strip at bottom to match reference */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gold-500 z-20" />

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Side: Free Trial (Dark) */}
                <div className="relative py-20 px-10 md:px-20 flex flex-col justify-center bg-[url('/hero-bg.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-dark-900/90" />
                    <div className="relative z-10 w-full max-w-lg">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase italic">
                            Free Trial <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Training</span>
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Make it happen today! Try our facilities for free with a no-obligation trial pass.
                            Experience the difference yourself.
                        </p>
                        <Link to="/contact">
                            <button className="bg-gold-500 text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-white transition-colors w-fit">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Side: What Clients Say (Dark Grey) */}
                <div className="bg-dark-800 py-20 px-10 md:px-20 flex flex-col justify-center relative min-h-[500px]">
                    <MessageSquareQuote className="absolute top-10 right-10 text-gold-500/10 w-40 h-40" />

                    <div className="relative z-10 max-w-lg w-full">
                        <h2 className="text-3xl font-black text-white mb-1 uppercase">
                            What <span className="text-gold-500">Clients</span> Say
                        </h2>
                        <div className="h-1 w-20 bg-gold-500 mb-8 mt-4" />

                        <div className="relative h-64"> {/* Fixed height container for stability */}
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0"
                                >
                                    <p className="text-gray-300 italic mb-8 text-lg font-light leading-relaxed">
                                        "{reviews[current].text}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center font-bold text-black border-2 border-white text-lg">
                                            {reviews[current].initials}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{reviews[current].name}</h4>
                                            <div className="text-gold-500 text-xs font-semibold mb-1">{reviews[current].role}</div>
                                            <div className="flex text-gold-500 text-xs">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex gap-4 mt-8">
                            <button onClick={prevSlide} className="p-2 rounded-full border border-white/20 text-white hover:bg-gold-500 hover:text-black transition-colors">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={nextSlide} className="p-2 rounded-full border border-white/20 text-white hover:bg-gold-500 hover:text-black transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
