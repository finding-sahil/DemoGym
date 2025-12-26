import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <div id="home" className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/hero-bg.png')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-gold-400 tracking-[0.5em] text-sm md:text-base uppercase font-bold mb-4 block">
                        Silchar’s First Luxury Gym
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
                        BARBELL <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">LEGACY</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
                        Redefining fitness with premium amenities and world-class equipment.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gold-500 text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 group"
                        >
                            Start Your Legacy
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                        >
                            View Offer
                        </motion.button>
                    </div>
                </motion.div>

                {/* Offer Badge used as visual element */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-10 right-4 md:bottom-20 md:right-20 glass p-6 rounded-2xl max-w-xs text-left hidden md:block border-l-4 border-gold-500"
                >
                    <p className="text-gold-400 font-bold text-sm uppercase mb-1">Pre-Sale Exclusive</p>
                    <h3 className="text-3xl font-bold text-white mb-1">60% OFF</h3>
                    <p className="text-gray-400 text-sm">Limited to first 100 members only.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
