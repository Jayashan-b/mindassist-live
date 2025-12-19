'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Crisis from '../components/Crisis';
import FeatureStory from '../components/FeatureStory';
import Comparison from '../components/Comparison';
import Investor from '../components/Investor';
import Team from '../components/Team';

export default function Home() {
    return (
        <main className="bg-white">
            <Navbar />
            <Hero />
            <div id="crisis">
                <Crisis />
            </div>
            <div id="features">
                <FeatureStory />
            </div>
            <div id="comparison">
                <Comparison />
            </div>
            <div id="invest">
                <Investor />
            </div>
            <div id="team">
                <Team />
            </div>
        </main>
    );
}