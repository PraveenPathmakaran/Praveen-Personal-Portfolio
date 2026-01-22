"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
                >
                    Technical <span className="text-neon-cyan">Skills</span>
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {portfolioData.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="px-6 py-3 bg-dark-card border border-gray-800 rounded-lg text-gray-300 hover:border-neon-cyan hover:text-white hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all duration-300 cursor-default"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
