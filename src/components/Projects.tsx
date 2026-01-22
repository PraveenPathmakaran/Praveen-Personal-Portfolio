"use client";
import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
                >
                    Featured <span className="text-neon-cyan">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-dark-card border border-gray-800 rounded-2xl p-8 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(157,80,187,0.1)]"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors">{project.title}</h3>
                                {/* Icons - Placeholder mostly as urls aren't in resume for specific projects */}
                                <div className="flex gap-4">
                                    <ExternalLink className="text-gray-500 hover:text-white cursor-pointer" size={20} />
                                </div>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-black border border-gray-700 rounded-full text-xs text-neon-cyan">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
