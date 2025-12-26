import React from 'react';
import { Dumbbell, Coffee, CloudFog, ShoppingBag, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        id: 1,
        title: "World Class Gym",
        description: "State-of-the-art equipment for all your fitness needs.",
        icon: <Dumbbell className="w-8 h-8 text-gold-500" />
    },
    {
        id: 2,
        title: "Legacy Cafe",
        description: "Nutritious meals and smoothies to fuel your workouts.",
        icon: <Coffee className="w-8 h-8 text-gold-500" />
    },
    {
        id: 3,
        title: "Steam & Sauna",
        description: "Relax and recover in our premium steam rooms.",
        icon: <CloudFog className="w-8 h-8 text-gold-500" />
    },
    {
        id: 4,
        title: "Hyrox Training",
        description: "Specialized functional fitness racing training.",
        icon: <Trophy className="w-8 h-8 text-gold-500" />
    },
    {
        id: 5,
        title: "Retail Store",
        description: "Premium supplements and apparel shop.",
        icon: <ShoppingBag className="w-8 h-8 text-gold-500" />
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-dark-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our <span className="text-gold-500">Services</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Experience a holistic approach to fitness with our comprehensive range of facilities designed for your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark-900 border border-white/5 p-8 rounded-2xl hover:border-gold-500/30 transition-colors group"
                        >
                            <div className="bg-dark-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
