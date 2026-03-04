"use client";

import { motion } from "framer-motion";
import { X, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useContactModal } from "@/contexts/ContactModalContext";

export function ContactModalInner() {
    const { closeModal } = useContactModal();

    const [formData, setFormData] = useState({
        name: "",
        guests: "2",
        room: "Oceanfront Suite",
        message: ""
    });
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [startDate, endDate] = dateRange;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const dateString = startDate && endDate
            ? `${format(startDate, "dd MMM yyyy")} to ${format(endDate, "dd MMM yyyy")}`
            : startDate ? format(startDate, "dd MMM yyyy") : "Not specified";

        const text = `Hello TAM-BoSa, I'd like to inquire about a retreat reservation.

*Reservation Details:*
Name: ${formData.name}
Preferred Dates: ${dateString}
Number of Guests: ${formData.guests}
Room Preference: ${formData.room}

*Additional Message:*
${formData.message}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/918722211666?text=${encodedText}`;
        window.open(whatsappUrl, "_blank");
        closeModal();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 z-[100] bg-[#041B1C]/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-lg p-6 md:p-10 liquid-glass rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
            >
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-serif text-primary">Inquiry Form</h2>
                    <button
                        onClick={closeModal}
                        className="text-foreground/50 hover:text-foreground transition-colors p-2"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-teal-600">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-teal-950/30 border border-teal-800/50 rounded-md p-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                            placeholder="Jane Doe"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-teal-600">Expected Dates</label>
                            <div className="relative">
                                <DatePicker
                                    selectsRange={true}
                                    startDate={startDate || undefined}
                                    endDate={endDate || undefined}
                                    onChange={(update) => {
                                        setDateRange(update);
                                    }}
                                    minDate={new Date()}
                                    placeholderText="Select dates"
                                    className="w-full bg-teal-950/30 border border-teal-800/50 rounded-md p-3 pl-10 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                                    wrapperClassName="w-full"
                                />
                                <CalendarIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-600 pointer-events-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-teal-600">Guests</label>
                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="bg-teal-950/30 border border-teal-800/50 rounded-md p-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                            >
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4+">4+ Guests</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-teal-600">Room Preference</label>
                        <select
                            name="room"
                            value={formData.room}
                            onChange={handleChange}
                            className="bg-teal-950/30 border border-teal-800/50 rounded-md p-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                        >
                            <option value="Oceanfront Suite">Oceanfront Suite</option>
                            <option value="Backwater Villa">Backwater Villa</option>
                            <option value="No Preference">No Preference</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-teal-600">Additional Message (Optional)</label>
                        <textarea
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-teal-950/30 border border-teal-800/50 rounded-md p-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                            placeholder="Any special requests or details we should know?"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-serif tracking-wider text-sm rounded-md transition-colors shadow-lg"
                    >
                        Continue to WhatsApp
                    </button>
                </form>
            </motion.div>
        </>
    );
}
