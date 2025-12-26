import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-dark-900 border-b border-white/5">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-4 block border-l-4 border-gold-500 pl-4">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase leading-tight">
                            Welcome To <br />
                            <span className="text-gold-500">Barbell Legacy</span>
                        </h2>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            We are not just a gym; we are a sanctuary for those who refuse to settle.
                            Located in the heart of Silchar, Barbell Legacy redefines fitness with luxury amenities,
                            world-class equipment, and an atmosphere that commands greatness.
                        </p>

                        <div className="space-y-4 mb-8">
                            {['Air Conditioned Gym', 'Certified Trainers', 'Cinema Cardio Zone', 'Luxury Steam Facility'].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="bg-gold-500/20 p-1 rounded-full">
                                        <Check className="w-4 h-4 text-gold-500" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gold-500 transition-colors">
                            More About Us
                        </button>
                    </motion.div>

                    {/* Image with Accent */}
                    <div className="relative">
                        <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-[10px] border-gold-500 rounded-br-3xl z-0" />
                        <motion.img
                            src="/about-gym.png"
                            alt="Luxury Gym Interior"
                            className="rounded-xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
