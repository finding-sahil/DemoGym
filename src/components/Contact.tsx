import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-dark-900 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            Visit The <span className="text-gold-500">Legacy</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10">
                            Experience the future of fitness at our premium facility in Silchar.
                            Drop by for a tour or contact us to learn more.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group cursor-pointer">
                                <div className="bg-dark-800 p-4 rounded-xl group-hover:bg-gold-500/20 transition-colors">
                                    <MapPin className="w-8 h-8 text-gold-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                                    <p className="text-gray-400">Khatal-Point, Silchar,</p>
                                    <p className="text-gray-400">Assam, India - 788006</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group cursor-pointer">
                                <div className="bg-dark-800 p-4 rounded-xl group-hover:bg-gold-500/20 transition-colors">
                                    <Phone className="w-8 h-8 text-gold-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
                                    <p className="text-gray-400">+91 86382 71317</p>
                                    <p className="text-gray-400 text-sm mt-1">Available 6:00 AM - 10:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 mt-12">
                            <a href="https://www.instagram.com/barbelllegacygym/" target="_blank" rel="noopener noreferrer" className="bg-dark-800 p-3 rounded-full hover:bg-gold-500 hover:text-black transition-all text-white">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://chat.whatsapp.com/LmwFo7b7FZv4Ot18wk1iFW?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" rel="noopener noreferrer" className="bg-dark-800 p-3 rounded-full hover:bg-[#25D366] hover:text-black transition-all text-white">
                                <MessageCircle className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div className="h-[400px] w-full rounded-2xl overflow-hidden glass border border-white/10 relative group">
                        {/* Map Placeholder - In a real app, use Google Maps Embed */}
                        <div className="absolute inset-0 bg-dark-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                            <div className="text-center p-8">
                                <MapPin className="w-16 h-16 text-gold-500 mx-auto mb-4 opacity-50" />
                                <p className="text-gray-500">Interactive Map would load here</p>
                                <p className="text-xs text-gray-700 mt-2">Khatal-Point, Silchar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
