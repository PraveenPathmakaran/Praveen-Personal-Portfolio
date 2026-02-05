"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Hero = () => {
    const { personal } = portfolioData;

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
            {/* Background Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-cyan/30 rounded-full blur-[128px] -z-10" />
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-neon-purple/30 rounded-full blur-[128px] -z-10" />

            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-[128px] -z-10" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-neon-cyan font-medium tracking-widest mb-4">HELLO, I'M</h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
                        {personal.name}
                    </h1>
                    <h3 className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
                        {personal.tagline}
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10"
                >
                    <a
                        href={personal.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-neon text-white px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-shadow duration-300 flex items-center gap-2"
                    >
                        <FileText size={20} /> Resume
                    </a>
                    <a
                        href="#projects"
                        className="border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 flex items-center gap-2"
                    >
                        View My Work <ArrowRight size={20} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-6 justify-center"
                >
                    <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-800 rounded-full hover:border-neon-cyan hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all duration-300">
                        <Github size={24} />
                    </a>
                    <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-800 rounded-full hover:border-neon-purple hover:bg-neon-purple/10 hover:text-neon-purple transition-all duration-300">
                        <Linkedin size={24} />
                    </a>
                    <a href={personal.social.email} className="p-3 border border-gray-800 rounded-full hover:border-white hover:bg-white/10 hover:text-white transition-all duration-300">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <span className="text-xs tracking-widest uppercase mb-2 block">Scroll Down</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent mx-auto"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
