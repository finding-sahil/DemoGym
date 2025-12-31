import React from 'react';
import { Check } from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <div className="h-[50vh] relative flex items-center justify-center bg-[url('/about-gym.png')] bg-cover bg-center bg-fixed">
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center">
                    <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-4 block">Who We Are</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase">About The <span className="text-gold-500">Gym</span></h1>
                </div>
            </div>

            <section className="py-24 bg-dark-900">
                <div className="container mx-auto px-6 md:px-20 lg:px-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-white mb-2 uppercase leading-none">
                                The Story Behind <br />
                                <span className="text-gold-500">Our Gym</span>
                            </h2>
                            <div className="h-1 w-20 bg-gold-500 mb-8 mt-4" />

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Located in the heart of Fitness City, Demo State, DEMO GYM is committed to making fitness accessible to everyone.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Our mission is to inspire and empower individuals of all ages and fitness levels to lead
                                healthier, more active lives with expert trainers and a motivating environment. We're here
                                to help you achieve your fitness goals—one step at a time.
                            </p>

                            <div className="space-y-3">
                                {['Air Conditioned Gym', 'Certified Trainers', 'Cleanest Gym of the Town'].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-gold-500" />
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                            <div className="border-[10px] border-gold-500 rounded-br-[4rem] p-2 inline-block">
                                <img src="/about-gym.png" alt="Gym Interior" className="rounded-br-[3.5rem] w-full max-w-lg grayscale hover:grayscale-0 transition-all duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
