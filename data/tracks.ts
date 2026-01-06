import { HeartPulse, Brain, Compass } from 'lucide-react';
import React from 'react';

export interface Problem {
    title: string;
    description: string;
}

export interface TrackData {
    id: string;
    title: string;
    icon: React.ComponentType<{ size?: number }>;
    description: string;
    color: string;
    problems: Problem[];
}

export const TRACKS: TrackData[] = [
    {
        id: 'care-cure',
        title: "Care and Cure",
        icon: HeartPulse,
        description: "Redefine healthcare with AI-driven MedTech solutions, focusing on patient care, diagnostics, and wellness.",
        color: "border-purple-500 text-purple-400",
        problems: [
            { title: 'AI-Powered Early Diagnostics', description: 'Develop models to identify early signs of chronic diseases using medical imaging or lab data.' },
            { title: 'Remote Patient Monitoring', description: 'Create IoT and AI solutions for real-time tracking of vital signs and early warning systems.' },
            { title: 'Mental Health & Wellness AI', description: 'Design empathetic AI companions or tools for early detection and support of mental health issues.' },
            { title: 'Smart Assistive Technologies', description: 'Innovate in AI-driven prosthetics or communication aids for people with disabilities.' },
            { title: 'Personalized Medicine', description: 'Build systems that recommend tailored treatment plans based on genetic and lifestyle data.' },
            { title: 'AI in Medical Record Management', description: 'Streamline healthcare administration and ensure secure, intelligent medical record accessibility.' },
        ]
    },
    {
        id: 'market-minds',
        title: "Market and Minds",
        icon: Brain,
        description: "Merge financial intelligence with market psychologies through innovative FinTech and Marketing AI solutions.",
        color: "border-cyan-500 text-cyan-400",
        problems: [
            { title: 'Predictive Consumer Behavior', description: 'Build ML models that analyze market trends and predict future consumer purchasing patterns.' },
            { title: 'FinTech for All', description: 'Develop accessible financial services and micro-investment platforms for underbanked communities.' },
            { title: 'Intelligent Fraud Prevention', description: 'Create real-time detection systems for secure financial transactions using behavioral biometrics.' },
            { title: 'AI-Driven Sentiment Analysis', description: 'Analyze social media and news to understand market sentiment and its impact on asset prices.' },
            { title: 'Automated Financial Advisory', description: 'Develop AI coaches that provide personalized budgeting and investment advice for individuals.' },
            { title: 'Hyper-Personalized Marketing', description: 'Leverage AI to create non-intrusive, highly relevant advertising experiences for modern consumers.' },
        ]
    },
    {
        id: 'climate-compass',
        title: "Climate and Compass",
        icon: Compass,
        description: "Navigate the future of sustainable tourism and environmental stewardship with AI-powered preservation tools.",
        color: "border-blue-500 text-blue-400",
        problems: [
            { title: 'Eco-Friendly Route Planning', description: 'Develop navigation systems that optimize for the lowest carbon footprint in travel and tourism.' },
            { title: 'Tourist Carbon Footprint Tracker', description: 'Create apps that help travelers monitor and offset their environmental impact in real-time.' },
            { title: 'Wildlife Preservation Tech', description: 'Use AI and computer vision to monitor endangered species and prevent poaching in tourist zones.' },
            { title: 'Off-Grid Smart Navigation', description: 'Build resilient navigation tools for eco-tourists exploring remote, undeveloped natural areas.' },
            { title: 'Sustainable Resort Management', description: 'Optimize energy and water usage in hospitality using AI-driven smart infrastructure.' },
            { title: 'Climate-Resilient Infrastructure', description: 'Predict and mitigate the impact of climate change on vulnerable tourism destinations.' },
        ]
    }
];
