'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative bg-white text-slate-900 min-h-screen flex items-center justify-center overflow-hidden pt-32">
            {/* Living Mesh Gradient */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-[-20%] left-[-20%] w-[40%] h-[40%] bg-violet-500/50 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        translateX: [0, 50, 0],
                        translateY: [0, -50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-[-20%] right-[-20%] w-[40%] h-[40%] bg-cyan-400/50 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        translateX: [0, -50, 0],
                        translateY: [0, 50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
                />
                <motion.div
                    className="absolute bottom-[10%] left-[10%] w-[20%] h-[20%] bg-fuchsia-500/40 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        translateX: [0, 20, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 10 }}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <motion.h1
                    className="text-6xl md:text-8xl font-bold tracking-tight mb-4 bg-gradient-to-br from-slate-900 to-slate-700 text-transparent bg-clip-text pb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Peace of mind. <br/> In your language.
                </motion.h1>
                <motion.p
                    className="max-w-2xl md:text-xl text-slate-600 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    Sri Lanka's First Tri-Lingual Mental Health Assistant.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;