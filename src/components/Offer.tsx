import React from 'react';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Offer: React.FC = () => {
    return (
        <section id="offer" className="py-20 relative overflow-hidden bg-dark-900 border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-gold-500 font-bold tracking-wider uppercase text-sm mb-2 block">Join The Legacy</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        MEMBERSHIP <span className="text-gold-500">PLANS</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose the plan that suits your journey. Limited slots available for the Pre-Sale offer.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Monthly Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border border-white/10 hover:border-gold-500/30 transition-all group"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">Monthly Membership</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-white">₹2,000</span>
                            <span className="text-gray-400 text-sm">/ month</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6">+ 5% GST & One-time Admission Fee (₹2,000)</p>

                        <div className="space-y-4 mb-8">
                            <Benefit text="Full gym access for the active month" />
                            <Benefit text="Use of all workout equipment and zones" />
                            <Benefit text="Locker room & washroom access" />
                            <Benefit text="Steam facility" />
                            <Benefit text="Posing room access" />
                        </div>

                        <button className="w-full py-4 border border-white/20 rounded-xl font-bold text-white hover:bg-white/10 transition-colors">
                            Choose Monthly
                        </button>
                    </motion.div>

                    {/* Yearly Plan - Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border-2 border-gold-500 relative overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="absolute top-0 right-0 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-bl-xl">
                            BEST VALUE • 60% OFF
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">Yearly Membership</h3>
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-4xl font-bold text-white">₹10,000</span>
                            <span className="text-gray-400 text-sm">/ year</span>
                        </div>
                        <p className="text-xs text-gold-500 font-bold mb-1">NO Admission Fee</p>
                        <p className="text-xs text-gray-500 mb-6">+ 5% GST</p>

                        <div className="space-y-4 mb-8">
                            <Benefit text="Full access to the gym for 12 months" highlight />
                            <Benefit text="Use of 50+ premium gym machines" />
                            <Benefit text="Access to strength training & cardio zones" />
                            <Benefit text="Separate locker rooms & washrooms" />
                            <Benefit text="Dedicated posing room & Steam facility" />
                            <Benefit text="Access to supplement & apparel store" />
                            <Benefit text="Priority access during peak hours" highlight />
                        </div>

                        <button className="w-full py-4 bg-gold-500 text-black rounded-xl font-bold hover:bg-gold-600 transition-colors shadow-lg shadow-gold-500/20">
                            Claim 60% Presale Offer
                        </button>
                    </motion.div>
                </div>

                {/* Presale Advantage Info */}
                <div className="max-w-4xl mx-auto mt-16 p-8 rounded-3xl bg-gradient-to-r from-dark-800 to-dark-900 border border-white/5 text-center">
                    <div className="flex justify-center mb-6">
                        <ShieldCheck className="text-gold-500 w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Presale Advantage</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Choosing the Yearly Membership gives you a flat <span className="text-gold-500 font-bold">60% savings</span> compared to the monthly plan.
                        This presale offer is strictly limited to the <span className="text-white font-bold">first 100 members only</span> and will be closed once the limit is reached.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-gold-500" /> No hidden charges</span>
                        <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-gold-500" /> Limited slots available</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Benefit = ({ text, highlight = false }: { text: string, highlight?: boolean }) => (
    <div className="flex items-start gap-3">
        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${highlight ? 'text-gold-500' : 'text-gray-500'}`} />
        <span className={`text-sm ${highlight ? 'text-white font-medium' : 'text-gray-300'}`}>{text}</span>
    </div>
);

export default Offer;
