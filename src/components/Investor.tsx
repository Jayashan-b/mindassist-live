'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, TrendingUp, Stethoscope } from 'lucide-react';

const Investor = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-slate-50">
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/40 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/40 blur-[100px] rounded-full pointer-events-none" />
            </div>
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-amber-100 to-orange-50 rounded-[2rem] blur-xl opacity-50" />
                        <div className="relative bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-orange-900/5 border border-amber-100">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-6"><Award className="w-4 h-4" /> Foundational Advisor</div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-2">Dr. Ravimal Galappaththi</h3>
                            <p className="text-slate-500 font-medium mb-6">Consultant Psychiatrist & Media Personality</p>
                            <blockquote className="text-lg text-slate-700 italic leading-relaxed border-l-4 border-amber-300 pl-4">"MindAssist addresses the silent crisis in Sri Lanka. It bridges the gap between those who need help and the few who can provide it."</blockquote>
                            <div className="mt-8 flex items-center gap-4 text-sm font-semibold text-slate-600"><div className="flex items-center gap-2"><Stethoscope className="w-4 h-4 text-amber-600" />20+ Years Clinical Exp.</div></div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:pl-8">
                        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6">Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Impact.</span></h2>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">We are building the infrastructure for Sri Lanka's mental wellness. Join us in scaling a clinically-validated, tri-lingual ecosystem.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="mailto:jayashan_b@icloud.com" className="group relative px-8 py-4 bg-slate-900 rounded-full text-white font-bold text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center">
                                <span className="relative z-10 flex items-center gap-2">Request Pitch Deck <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-slate-400">Seed Round Open for 2026.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Investor;