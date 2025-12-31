import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <div className="h-[50vh] relative flex items-center justify-center bg-[url('/hero-bg.png')] bg-cover bg-center bg-fixed">
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center">
                    <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-4 block">Get In Touch</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase">Contact <span className="text-gold-500">Us</span></h1>
                </div>
            </div>

            <section className="py-24 bg-dark-900 border-b border-white/5">
                <div className="container mx-auto px-6 md:px-20 lg:px-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-black text-white mb-2 uppercase">
                                Do You Have Questions About <br />
                                <span className="text-gold-500">Specific Training?</span>
                            </h2>
                            <p className="text-gray-400 mb-10">
                                Our fitness journey starts here. Have questions or need assistance? Reach out to us—we're here to help!
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-dark-800 p-3 rounded border border-white/10">
                                        <Phone className="text-gold-500 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">+1 234 567 890</p>
                                        <p className="text-gray-500 text-sm">Call us directly</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-dark-800 p-3 rounded border border-white/10">
                                        <Mail className="text-gold-500 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">contact@demogym.com</p>
                                        <p className="text-gray-500 text-sm">Send us an email</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-dark-800 p-3 rounded border border-white/10">
                                        <MapPin className="text-gold-500 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">123 Demo St, Fitness City</p>
                                        <p className="text-white font-bold">Demo State, Demo Country - 000000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-dark-800 p-10 rounded-2xl border-l-4 border-gold-500 relative">
                            <h3 className="text-2xl font-bold text-white mb-8 uppercase">Get In Touch</h3>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Your Name *</label>
                                    <input type="text" className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:border-gold-500 outline-none rounded" placeholder="John Doe" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Your Email *</label>
                                        <input type="email" className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:border-gold-500 outline-none rounded" placeholder="email@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Your Number *</label>
                                        <input type="text" className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:border-gold-500 outline-none rounded" placeholder="+1..." />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Message *</label>
                                    <textarea className="w-full bg-dark-900 border border-white/10 p-4 text-white focus:border-gold-500 outline-none rounded h-32" placeholder="How can we help you?" />
                                </div>
                                <button className="bg-gold-500/10 text-gold-500 border border-gold-500 px-8 py-3 w-full font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-black transition-all">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
