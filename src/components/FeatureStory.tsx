'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Languages, ClipboardCheck, Map, BrainCircuit, BookHeart, Bot, Siren } from 'lucide-react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor: string;
}

const cardVariants: Variants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const GlassCard = ({ children, className = "", glowColor }: GlassCardProps) => (
    <motion.div
        // 1. We removed the CSS 'hover:scale-[1.03]' to prevent conflicts
        className={`relative p-8 md:p-12 rounded-3xl bg-slate-50/50 backdrop-blur-xl border border-slate-200 overflow-hidden flex flex-col ${className}`}
        variants={cardVariants}
        // 2. We add the hover effect here using Framer Motion
        whileHover={{
            scale: 1.03,
            transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
    >
        {/* The glow element */}
        <div className={`absolute -inset-1/2 -z-10 ${glowColor} opacity-20 blur-3xl`} />
        {children}
    </motion.div>
);

const FeatureStory = () => {
    return (
        <section className="bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-7xl mx-auto"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">A New Standard of Care.</h2>
                    <p className="text-lg md:text-xl text-slate-500 mt-4 max-w-3xl mx-auto">Built for our people, by our people.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {/* 1. The Core Differentiator (Full Width) */}
                    <GlassCard className="md:col-span-3 text-center items-center justify-center" glowColor="bg-emerald-500">
                        <Languages className="w-16 h-16 text-emerald-600 mb-4" />
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Tri-Lingual Intelligence.</h3>
                        <p className="text-xl text-slate-600 mt-2 font-mono">English, සිංහල, and தமிழ், understood seamlessly.</p>
                    </GlassCard>

                    {/* 2. The Clinical Foundation */}
                    <GlassCard className="md:col-span-2" glowColor="bg-blue-500">
                        <ClipboardCheck className="w-12 h-12 text-blue-600 mb-4" />
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Precision Screening.</h3>
                        <p className="text-lg text-slate-600 mt-2">Powered by clinical PHQ-9 & GAD-7 logic.</p>
                    </GlassCard>
                    <GlassCard className="md:col-span-1" glowColor="bg-cyan-500">
                        <Map className="w-12 h-12 text-cyan-600 mb-4" />
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Your Roadmap.</h3>
                        <p className="text-lg text-slate-600 mt-2">A personalized, step-by-step plan.</p>
                    </GlassCard>

                    {/* 3. The Daily Toolkit */}
                    <GlassCard glowColor="bg-teal-500">
                        <BrainCircuit className="w-12 h-12 text-teal-600 mb-4" />
                        <h3 className="text-2xl font-bold text-slate-900">Modified CBT.</h3>
                        <p className="text-md text-slate-600 mt-2">Culturally-adapted exercises.</p>
                    </GlassCard>
                    <GlassCard glowColor="bg-amber-500">
                        <BookHeart className="w-12 h-12 text-amber-600 mb-4" />
                        <h3 className="text-2xl font-bold text-slate-900">Gratitude Journal.</h3>
                        <p className="text-md text-slate-600 mt-2">Shift focus to the positive.</p>
                    </GlassCard>
                    <GlassCard glowColor="bg-indigo-500">
                        <Bot className="w-12 h-12 text-indigo-600 mb-4" />
                        <h3 className="text-2xl font-bold text-slate-900">AI Companion.</h3>
                        <p className="text-md text-slate-600 mt-2">A safe space to vent, 24/7.</p>
                    </GlassCard>

                    {/* 4. The Safety Net */}
                    <GlassCard className="md:col-span-3 text-center items-center justify-center" glowColor="bg-rose-500">
                        <Siren className="w-16 h-16 text-rose-600 mx-auto mb-4" />
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Emergency Protocol.</h3>
                        <p className="text-xl text-slate-600 mt-2">Instant access to 1926 Helpline & Hospital Maps.</p>
                    </GlassCard>
                </div>
            </motion.div>
        </section>
    );
};

export default FeatureStory;