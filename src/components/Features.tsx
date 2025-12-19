'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { MessageSquare, Shield, BookOpen, Users } from 'lucide-react';

interface Feature {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        id: 1,
        icon: <MessageSquare className="w-10 h-10 text-blue-500" />,
        title: 'Tri-Lingual NLP',
        description: 'Real-time, nuanced support in Sinhala, Tamil, and English, powered by custom-trained language models that understand local dialects and cultural context.'
    },
    {
        id: 2,
        icon: <Shield className="w-10 h-10 text-red-500" />,
        title: 'SOS Protocol',
        description: 'A one-tap connection to the national mental health hotline (1926). The protocol relays location data and basic user info for faster emergency response.'
    },
    {
        id: 3,
        icon: <BookOpen className="w-10 h-10 text-purple-500" />,
        title: 'Modified CBT',
        description: 'Evidence-based Cognitive Behavioral Therapy, adapted for Sri Lankan culture. Includes practices like gratitude journaling, mindfulness, and localized scenarios.'
    },
    {
        id: 4,
        icon: <Users className="w-10 h-10 text-green-500" />,
        title: 'Peer Anonymity',
        description: 'Secure, anonymous peer support groups moderated by trained volunteers. A safe space to share experiences without fear of judgment or stigma.'
    }
];

interface ExpandedCardProps {
    feature: Feature;
    setSelected: (feature: Feature | null) => void;
}

function ExpandedCard({ feature, setSelected }: ExpandedCardProps) {
    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
        >
            <motion.div
                layoutId={`card-${feature.id}`}
                className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-4 mb-6">
                    {feature.icon}
                    <motion.h2 className="text-3xl font-bold text-slate-900 tracking-tight">{feature.title}</motion.h2>
                </div>
                <motion.p
                    className="text-lg text-slate-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                >
                    {feature.description}
                </motion.p>
            </motion.div>
        </div>
    );
}

const Features = () => {
    const [selected, setSelected] = useState<Feature | null>(null);

    return (
        <section className="bg-[#F5F5F7] py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-16">
                    How It Works
                </h2>
                <LayoutGroup>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map(feature => (
                            <motion.div
                                layoutId={`card-${feature.id}`}
                                key={feature.id}
                                onClick={() => setSelected(feature)}
                                // === ANIMATION SETTINGS ===
                                // 1. Remove CSS transitions (handled by Framer)
                                // 2. Use whileHover for the pop effect
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                whileTap={{ scale: 0.95 }}
                                // ==========================
                                className="bg-white p-8 rounded-3xl cursor-pointer border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 relative z-10"
                            >
                                <div className="flex flex-col items-center justify-center h-full gap-4">
                                    <motion.div
                                        className="p-4 bg-slate-50 rounded-2xl"
                                        whileHover={{ rotate: 5 }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">{feature.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <AnimatePresence>
                        {selected && <ExpandedCard feature={selected} setSelected={setSelected} />}
                    </AnimatePresence>
                </LayoutGroup>
            </div>
        </section>
    );
};

export default Features;