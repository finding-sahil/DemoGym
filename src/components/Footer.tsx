import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Column 1: Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-white uppercase">Contact</h3>
                        <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                            <p>
                                Khatal-Point, Silchar,<br />
                                Assam, India - 788006
                            </p>
                            <p className="hover:text-gold-500 transition-colors cursor-pointer">
                                +91 86382 71317
                            </p>
                            <p className="hover:text-gold-500 transition-colors cursor-pointer">
                                contact@barbelllegacy.com
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Opening Hours */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-white uppercase">Opening Hours</h3>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                                <span>Mon - Sat | Morning</span>
                                <span className="text-gold-500 font-bold">06:00 - 11:00</span> {/* Updated to typical gym hours */}
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                                <span>Mon - Sat | Evening</span>
                                <span className="text-gold-500 font-bold">04:00 - 10:00</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                                <span>Sunday</span>
                                <span className="text-red-500 font-bold">Closed</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Contact Form */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-white uppercase">Contact</h3>
                        <p className="text-gray-400 text-sm">
                            Contact us to know more about our classes and training programs
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-dark-800 text-white px-4 py-3 w-full outline-none focus:ring-1 focus:ring-gold-500 text-sm"
                            />
                            <button className="bg-gold-500 text-black px-6 py-3 font-bold uppercase text-sm hover:bg-white transition-colors">
                                Contact
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs font-medium">
                        &copy; {new Date().getFullYear()} Barbell Legacy. All rights reserved. Designed with ❤️ by <span className="text-gold-600">CRAVENOX</span>
                    </p>

                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/barbelllegacygym/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold-500 transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="https://chat.whatsapp.com/LmwFo7b7FZv4Ot18wk1iFW?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#25D366] transition-colors">
                            <MessageCircle size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
