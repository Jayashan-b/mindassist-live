'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [buttonState, setButtonState] = useState('idle'); // 'idle' | 'clicked'

    const handleGetApp = () => {
        if (buttonState === 'idle') {
            setButtonState('clicked');
            // Reset button state after 2.5 seconds
            setTimeout(() => setButtonState('idle'), 2500);
        }
    };

    const navLinks = [
        { name: 'Crisis', href: '#crisis' },
        { name: 'Features', href: '#features' },
        { name: 'Verdict', href: '#comparison' },
        { name: 'Invest', href: '#invest' },
        { name: 'Team', href: '#team' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm transition-all duration-300">
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Brand */}
                <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="text-xl font-bold text-slate-900 tracking-tight">MindAssist</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100/50 transition-all duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* The "Smart" Button */}
                <div>
                    <button
                        onClick={handleGetApp}
                        className="relative overflow-hidden bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-full hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-slate-900/20 w-32 h-10 flex items-center justify-center"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {buttonState === 'idle' ? (
                                <motion.span
                                    key="idle"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Get App
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="clicked"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-xs font-bold text-blue-200"
                                >
                                    Coming Soon
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;