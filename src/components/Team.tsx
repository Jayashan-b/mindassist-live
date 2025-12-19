'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
    { name: 'Jayashan Bandara', url: 'https://www.linkedin.com/in/jayashanwickramasinghe', image: '/assets/team/jayashan.jpg' },
    { name: 'Maneesha Rupasinghe', url: 'https://www.linkedin.com/in/maneesharupasinghe', image: '/assets/team/maneesha.jpg' },
    { name: 'Vidunadi Perera', url: 'https://www.linkedin.com/in/vidunadi-perera', image: '/assets/team/vidunadi.jpg' },
    { name: 'Thimisha Samarasinghe', url: 'https://www.linkedin.com/in/thimisha-samarasinghe', image: '/assets/team/thimisha.jpg' },
    { name: 'Isuri Apsara', url: 'https://www.linkedin.com/in/isuri-apsara', image: '/assets/team/isuri.jpg' },
    { name: 'Kasuni Kavindi', url: 'https://www.linkedin.com/in/kasuni-kavindi', image: '/assets/team/kasuni.jpg' },
];

const Team = () => {
    return (
        <section className="bg-slate-50 pt-32 pb-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6"><GraduationCap className="w-4 h-4" /> School of Computing</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-8">Forged in Code. <br /> Driven by Empathy.</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">MindAssist was born at the <span className="font-semibold text-slate-900">Informatics Institute of Technology (IIT)</span>, in collaboration with the <span className="font-semibold text-slate-900">University of Westminster</span>.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {teamMembers.map((member, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-blue-200 transition-colors bg-slate-200">
                                    {/* Note: If image is missing, the bg-slate-200 acts as fallback */}
                                    <Image src={member.image} alt={member.name} fill className="object-cover" sizes="56px" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{member.name}</h4>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Research Team</p>
                                </div>
                            </div>
                            <a href={member.url} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </motion.div>
                    ))}
                </div>
                <div className="border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
                    <div className="flex flex-col gap-2"><span className="font-bold text-slate-900 text-lg tracking-tight">MindAssist</span><span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Colombo, Sri Lanka</span></div>
                    <div className="flex flex-col md:items-end gap-2"><a href="mailto:jayashan_b@icloud.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Mail className="w-4 h-4" /> jayashan_b@icloud.com</a><span>© 2025 MindAssist Research Group. All rights reserved.</span></div>
                </div>
            </div>
        </section>
    );
};
export default Team;