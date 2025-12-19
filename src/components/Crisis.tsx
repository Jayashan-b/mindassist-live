'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Scene = ({ children, progress, start, end, className = '' }: any) => {
    const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
    return <motion.div style={{ opacity }} className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>{children}</motion.div>;
};

const Crisis = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    });

    const bar1Width = useTransform(scrollYProgress, [0.05, 0.2], ['0%', '100%']);
    const bar2Width = useTransform(scrollYProgress, [0.05, 0.2], ['0%', '0.1%']);
    const fogBlur = useTransform(scrollYProgress, [0.28, 0.4], [32, 0]);
    const fogOpacity = useTransform(scrollYProgress, [0.45, 0.5], [1, 0]);
    const langEnOpacity = useTransform(scrollYProgress, [0.53, 0.58, 0.63], [0, 1, 0]);
    const langSiOpacity = useTransform(scrollYProgress, [0.63, 0.68, 0.73], [0, 1, 0]);
    const langTaOpacity = useTransform(scrollYProgress, [0.73, 0.78, 0.83], [0, 1, 0]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-gradient-to-b from-white via-slate-900 to-black text-white">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <div className="w-full max-w-7xl mx-auto h-full relative md:grid md:grid-cols-2 md:items-center">
                    <div className="absolute inset-0 flex items-center justify-center md:relative md:inset-auto md:h-screen md:order-2 opacity-40 md:opacity-100 z-0">
                        <Scene progress={scrollYProgress} start={0.01} end={0.25}>
                            <div className="w-[80%] md:w-[500px] space-y-8 font-mono">
                                <div>
                                    <span className="text-red-400/90 text-sm font-bold tracking-widest uppercase mb-2 block">The Need</span>
                                    <motion.div style={{ width: bar1Width }} className="h-6 bg-gradient-to-r from-red-500 to-red-800 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.6)]" />
                                </div>
                                <div>
                                    <span className="text-blue-400/90 text-sm font-bold tracking-widest uppercase mb-2 block">The Supply</span>
                                    <motion.div style={{ width: bar2Width }} className="h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-[0_0_30px_rgba(96,165,250,0.6)]" />
                                </div>
                            </div>
                        </Scene>
                        <Scene progress={scrollYProgress} start={0.25} end={0.5}>
                            <motion.p style={{ filter: useTransform(fogBlur, v => `blur(${v}px)`), opacity: fogOpacity }} className="text-5xl md:text-7xl font-bold text-white/50 text-center leading-tight">
                                What will <br/> people say?
                            </motion.p>
                        </Scene>
                        <Scene progress={scrollYProgress} start={0.5} end={0.83} className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-500">
                            <motion.p style={{ opacity: langEnOpacity }} className="absolute">Support</motion.p>
                            <motion.p style={{ opacity: langSiOpacity }} className="absolute">සහාය</motion.p>
                            <motion.p style={{ opacity: langTaOpacity }} className="absolute">ஆதரவு</motion.p>
                        </Scene>
                        <Scene progress={scrollYProgress} start={0.83} end={1.0}>
                            <div className="relative w-72 h-72 md:w-96 md:h-96">
                                {[...Array(4)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute inset-0 rounded-full border border-amber-400/30"
                                        style={{
                                            scale: useTransform(scrollYProgress, [0.83 + i*0.04, 1], [0, 1.5]),
                                            opacity: useTransform(scrollYProgress, [0.83 + i*0.04, 1], [1, 0]),
                                        }}
                                    />
                                ))}
                            </div>
                        </Scene>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center md:relative md:inset-auto md:h-full md:justify-start px-6 z-10 md:order-1 pointer-events-none">
                        <Scene progress={scrollYProgress} start={0.05} end={0.25}>
                            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter text-center md:text-left drop-shadow-2xl">
                                22 Million People. <br/> A Handful of Experts.
                            </h2>
                        </Scene>
                        <Scene progress={scrollYProgress} start={0.28} end={0.5}>
                            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter text-center md:text-left drop-shadow-2xl">
                                Silence is the <br/> Loudest Cry.
                            </h2>
                        </Scene>
                        <Scene progress={scrollYProgress} start={0.53} end={0.83}>
                            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter text-center md:text-left drop-shadow-2xl">
                                English-Only Tools <br/> Fail Us.
                            </h2>
                        </Scene>
                        <Scene progress={scrollYProgress} start={0.85} end={1.0}>
                            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter text-center md:text-left drop-shadow-2xl">
                                The Gap in <br/> Understanding.
                            </h2>
                        </Scene>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Crisis;