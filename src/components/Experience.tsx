"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-black relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
                >
                    Work <span className="text-neon-purple">Experience</span>
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800" />

                    <div className="space-y-12">
                        {portfolioData.experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} md:items-center gap-8 pl-8 md:pl-0`}
                            >
                                {/* Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-auto w-3.5 h-3.5 bg-neon-cyan rounded-full shadow-[0_0_10px_#00d2ff] z-10" />

                                {/* Content */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                                    <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                                    <h4 className="text-xl text-neon-cyan font-medium mb-2">{job.company}</h4>
                                    <p className="text-gray-500 mb-4 text-sm font-mono flex items-center gap-2 justify-start md:justify-end">
                                        {index % 2 !== 0 && <span className="hidden md:inline-block w-4 h-[1px] bg-gray-600"></span>}
                                        {job.period} | {job.location}
                                        {index % 2 === 0 && <span className="hidden md:inline-block w-4 h-[1px] bg-gray-600"></span>}
                                    </p>
                                    <ul className={`text-gray-400 space-y-2 list-disc list-inside ${index % 2 === 0 ? "md:list-none" : ""}`}>
                                        {job.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2"></div> {/* Spacer for the other side */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
