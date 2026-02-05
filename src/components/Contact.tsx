"use client";
import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, X } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe1Emt9K2r1NTtSpAE77mogVBxDXAWkg9JsKVa3kSRMRMY_NQ/formResponse";
        
        const formBody = new URLSearchParams();
        formBody.append("entry.474070478", formData.name);
        formBody.append("entry.1665928342", formData.email);
        formBody.append("entry.1035699131", formData.message);

        try {
            await fetch(GOOGLE_FORM_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formBody
            });

            // Since we use no-cors, we assume success if no error is thrown
            setShowSuccess(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Form submission error:", error);
            // Optionally handle error state here
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
                >
                    Get In <span className="text-neon-purple">Touch</span>
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-white">Let's Talk</h3>
                        <p className="text-gray-400 leading-relaxed">
                            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-gray-900 rounded-lg text-neon-cyan">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="font-medium">{portfolioData.personal.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-gray-900 rounded-lg text-neon-purple">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href={`mailto:${portfolioData.personal.email}`} className="font-medium hover:text-neon-purple transition-colors">
                                        {portfolioData.personal.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-gray-900 rounded-lg text-neon-cyan">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">{portfolioData.personal.address}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" 
                                        placeholder="John Doe" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" 
                                        placeholder="john@example.com" 
                                    />
                                </div>
                            </div>
                            {/* Subject field removed */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4} 
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none" 
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-neon text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2 disabled:opacity-50"
                            >
                                {isLoading ? "Sending..." : "Send Message"} <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-20 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Praveen P P. All rights reserved.</p>
                </div>
            </div>

            {/* Success Popup */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowSuccess(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gray-900 border border-neon-cyan p-8 rounded-2xl max-w-md w-full relative shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                        >
                            <button 
                                onClick={() => setShowSuccess(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center text-neon-cyan mb-2">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                <p className="text-gray-400">
                                    Thank you for reaching out. I'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="px-6 py-2 bg-gradient-neon text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
