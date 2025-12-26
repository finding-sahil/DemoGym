import React from 'react';
import { motion } from 'framer-motion';

const classesData = [
    {
        title: "Strength Training",
        desc: "Build muscle, burn fat, and increase strength with our comprehensive strength training programs tailored to your goals.",
        image: "/class-strength.png"
    },
    {
        title: "Kickboxing",
        desc: "High-energy martial arts workout that improves coordination, agility, and cardiovascular health while teaching self-defense.",
        image: "/class-boxing.png"
    },
    {
        title: "Cardio Fitness",
        desc: "Elevate your heart rate and endurance with our state-of-the-art cardio equipment and guided interval training sessions.",
        image: "/class-cardio.png"
    }
];

const ClassesPage: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <div className="h-[50vh] relative flex items-center justify-center bg-[url('/class-strength.png')] bg-cover bg-center bg-fixed">
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center">
                    <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-4 block">Find Your Passion</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase">Our <span className="text-gold-500">Classes</span></h1>
                </div>
            </div>

            <section className="py-24 bg-dark-900 space-y-24">
                {classesData.map((item, index) => (
                    <div key={index} className="container mx-auto px-6 md:px-20 lg:px-32">
                        <div className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <motion.div
                                className="w-full md:w-1/2"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white p-2 rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img src={item.image} alt={item.title} className="w-full h-[400px] object-cover rounded" />
                                </div>
                            </motion.div>

                            <motion.div
                                className="w-full md:w-1/2"
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-black text-white mb-6 uppercase">{item.title}</h2>
                                <div className="h-1 w-20 bg-gold-500 mb-8" />
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    {item.desc}
                                </p>
                                <button className="text-gold-500 font-bold uppercase tracking-wider hover:text-white transition-colors">
                                    Join This Class →
                                </button>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ClassesPage;
