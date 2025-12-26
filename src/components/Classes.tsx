import React from 'react';
import { motion } from 'framer-motion';

const classes = [
    {
        title: "Strength Training",
        image: "/class-strength.png",
    },
    {
        title: "Kickboxing",
        image: "/class-boxing.png",
    },
    {
        title: "Cardio Fitness",
        image: "/class-cardio.png",
    }
];

const Classes: React.FC = () => {
    return (
        <section className="py-24 bg-dark-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-2 block">Our Services</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
                        Our <span className="text-gold-500">Classes</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {classes.map((cls, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative h-[500px] overflow-hidden rounded-md cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${cls.image}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 w-full p-8 text-center bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wider group-hover:text-gold-500 transition-colors">
                                    {cls.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;
