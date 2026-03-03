"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import GoogleMap from "@/components/ui/GoogleMap";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function Contact() {
    const { openModal } = useContactModal();
    const [formData, setFormData] = useState({
        name: "",
        dates: "",
        guests: "2",
        room: "Oceanfront Suite",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `Hello TAM-BoSa, I'd like to inquire about a retreat reservation.
    
*Reservation Details:*
Name: ${formData.name}
Preferred Dates: ${formData.dates}
Number of Guests: ${formData.guests}
Room Preference: ${formData.room}
    
*Additional Message:*
${formData.message}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/918722211666?text=${encodedText}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-[#041B1C] min-h-screen text-foreground pt-36 pb-32">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-20 relative">

                {/* Map Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="lg:col-span-3 h-[500px] lg:h-auto"
                >
                    <GoogleMap />
                </motion.div>

                {/* Info Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="lg:col-span-2 liquid-glass p-8 md:p-12 relative overflow-hidden rounded-2xl flex flex-col justify-between"
                >
                    <div className="flex flex-col gap-10">
                        <div className="flex items-start gap-6 group">
                            <div className="w-12 h-12 rounded-full border border-teal-800 flex items-center justify-center min-w-[3rem] text-primary group-hover:bg-primary group-hover:text-[#041B1C] transition-colors">
                                <MapPin size={18} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-teal-600 mb-1">Location & Logistics</div>
                                <div className="text-sm tracking-wide text-foreground/90">
                                    <p className="font-medium text-white mb-2">TAM-BoSa Beach Retreat, Udupi, Karnataka, India</p>
                                    <ul className="space-y-1 text-xs text-foreground/70 font-light">
                                        <li>• 1.5 Hours from Mangaluru International Airport (IXE)</li>
                                        <li>• Premium private transfers available upon request</li>
                                        <li>• Accessible via scenic coastal drive</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="w-12 h-12 rounded-full border border-teal-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#041B1C] transition-colors">
                                <Phone size={18} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-teal-600 mb-1">Direct Line</div>
                                <div className="text-sm tracking-wide text-foreground/90">+91 87222 11666</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="w-12 h-12 rounded-full border border-teal-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#041B1C] transition-colors">
                                <Mail size={18} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-teal-600 mb-1">Concierge</div>
                                <div className="text-sm tracking-wide text-foreground/90">tambosabeachretreat@gmail.com</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-foreground/90 text-sm tracking-wide mt-4">
                            <div className="w-12 h-12 rounded-full border border-teal-800 flex items-center justify-center text-primary">
                                <Clock size={18} strokeWidth={1.5} />
                            </div>
                            <p>We typically respond within 30 minutes</p>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-teal-800/50 pt-8">
                        <div>
                            <h3 className="text-[10px] uppercase tracking-[0.2em] text-teal-600 mb-4">Follow us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full border border-teal-800 flex items-center justify-center hover:bg-primary hover:text-[#041B1C] transition-colors">
                                    <Instagram size={16} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-teal-800 flex items-center justify-center hover:bg-primary hover:text-[#041B1C] transition-colors">
                                    <Facebook size={16} />
                                </a>
                            </div>
                        </div>
                        <button
                            onClick={openModal}
                            className="px-8 py-3 bg-[#42210b] hover:bg-[#5a2d0f] text-white font-serif tracking-wider text-sm rounded-md transition-colors shadow-lg"
                        >
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
