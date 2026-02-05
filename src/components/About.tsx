"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-bg relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About <span className="text-neon-cyan">Me</span></h2>
                    <p className="text-gray-300 text-lg leading-relaxed text-left md:text-center">
                        {portfolioData.personal.summary}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        <div className="p-6 border border-gray-800 rounded-xl bg-dark-card hover:border-neon-cyan/50 transition-colors">
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">3+</h3>
                            <p className="text-sm text-gray-400 mt-2">Years Experience</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-xl bg-dark-card hover:border-neon-purple/50 transition-colors">
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-pink-500">10+</h3>
                            <p className="text-sm text-gray-400 mt-2">Projects Completed</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-xl bg-dark-card hover:border-neon-cyan/50 transition-colors">
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-green-500">10+</h3>
                            <p className="text-sm text-gray-400 mt-2">Happy Clients</p>
                        </div>
                        <div className="p-6 border border-gray-800 rounded-xl bg-dark-card hover:border-neon-purple/50 transition-colors">
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-orange-500">24/7</h3>
                            <p className="text-sm text-gray-400 mt-2">Support</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
