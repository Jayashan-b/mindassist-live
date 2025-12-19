'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Languages, ShieldAlert, BrainCircuit, HeartHandshake } from 'lucide-react';

const verdictData = [
    { title: "Language Access", generic: "English-only interfaces.", mindassist: "Fluent in English, සිංහල, and தமிழ்.", icon: <Languages className="w-5 h-5" />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Crisis Response", generic: "No direct emergency link.", mindassist: "1-Tap 1926 & Hospital GPS.", icon: <ShieldAlert className="w-5 h-5" />, color: "text-rose-600", bg: "bg-rose-50" },
    { title: "Cultural Fit", generic: "Western-centric logic.", mindassist: "Sri Lankan Societal Norms.", icon: <BrainCircuit className="w-5 h-5" />, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Barrier to Entry", generic: "Expensive subscriptions.", mindassist: "100% Free. Wellness is a right.", icon: <HeartHandshake className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-50" },
];

const Comparison = () => {
    return (
        <section className="relative bg-white pt-48 pb-24 sm:pb-32 -mt-24 overflow-hidden z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-rose-100/60 blur-[100px] rounded-full opacity-60 pointer-events-none -translate-y-1/2" />
            <div className="absolute top-48 inset-x-0 h-64 bg-gradient-to-b from-transparent to-white pointer-events-none" />
            <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20 relative">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Context.</span>
                    </motion.h2>
                </div>
                <div className="hidden md:block relative">
                    <div className="rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden ring-1 ring-slate-900/5">
                        <div className="grid grid-cols-10 border-b border-slate-100 bg-slate-50/50">
                            <div className="col-span-3 p-8 text-xs font-semibold text-slate-400 uppercase tracking-wider">Feature</div>
                            <div className="col-span-3 p-8 text-xs font-semibold text-slate-400 uppercase tracking-wider">Generic Apps</div>
                            <div className="col-span-4 p-8 text-xs font-bold text-blue-600 uppercase tracking-wider pl-8 bg-blue-50/30 border-l border-blue-100">MindAssist</div>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {verdictData.map((item, index) => (
                                <div key={index} className="grid grid-cols-10 group transition-colors hover:bg-slate-50/30">
                                    <div className="col-span-3 p-8 flex items-center gap-3"><div className={`p-2 rounded-lg ${item.bg}`}>{React.cloneElement(item.icon, { className: `w-4 h-4 ${item.color}` })}</div><span className="font-semibold text-slate-700 text-sm">{item.title}</span></div>
                                    <div className="col-span-3 p-8 flex items-center text-slate-500 text-sm">{item.generic}</div>
                                    <div className="col-span-4 p-8 flex items-center gap-3 bg-blue-50/10 border-l border-blue-50 relative overflow-hidden"><Check className={`w-5 h-5 ${item.color} flex-shrink-0`} /><span className="text-slate-900 font-bold text-base">{item.mindassist}</span></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Comparison;