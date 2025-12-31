import React from 'react';
import { Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Social: React.FC = () => {
    return (
        <section className="relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.png')" }}>
            <div className="absolute inset-0 bg-black/80" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gray-400 font-bold tracking-[0.3em] text-sm uppercase mb-4 block"
                >
                    Be Inspired
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black text-white uppercase mb-12"
                >
                    Explore Our <span className="text-gold-500">Community</span>
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <motion.button
                        onClick={() => alert('Follow Us button is working!')}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform"
                    >
                        <Instagram className="w-6 h-6" />
                        <span>Follow Us</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        onClick={() => alert('Join Channel button is working!')}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group flex items-center gap-3 bg-[#25D366] px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform text-black"
                    >
                        <MessageCircle className="w-6 h-6" />
                        <span>Join Channel</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Social;
