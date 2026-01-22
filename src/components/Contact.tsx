"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
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
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                                    <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                                    <input type="email" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Subject</label>
                                <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="Project Inquiry" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none" placeholder="Your message here..."></textarea>
                            </div>
                            <button className="w-full bg-gradient-neon text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-20 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Praveen P P. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
