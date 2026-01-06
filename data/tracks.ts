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
            { title: 'AI-Driven Clinical Decision Support', description: 'Bridge clinical insights and patient understanding by parsing prescriptions and translating complex medical reports.' },
            { title: 'AI-Powered Radiology Report Automation', description: 'Assist radiologists with structured reporting, quality assurance, and flagging potential missed findings in medical imaging.' },
            { title: 'Federated Learning for Disease Surveillance', description: 'Privacy-preserving disease outbreak detection across healthcare facilities using decentralized, encrypted model training.' },
            { title: 'Patient Experience Analytics & Service Recovery', description: 'Sentiment analysis of multi-channel feedback to identify systemic issues and trigger automated service recovery workflows.' },
            { title: 'AI-Driven Chronic Disease Management', description: 'Longitudinal data integration for risk-stratification and personalized care plans for diabetes and cardio-metabolic health.' },
            { title: 'Agentic AI Clinical Documentation & Coding', description: 'Domain-expert AI system for enhancing clinical documentation quality and medical coding accuracy using specialized agents.' },
            { title: 'Ambient Clinical Voice Documentation (Scribe AI)', description: 'Real-time conversion of doctor-patient conversations into structured, template-based medical notes using ambient voice capture.' },
        ]
    },
    {
        id: 'market-minds',
        title: "Market and Minds",
        icon: Brain,
        description: "Merge financial intelligence with market psychologies through innovative FinTech and Marketing AI solutions.",
        color: "border-cyan-500 text-cyan-400",
        problems: [
            { title: 'AI-Powered Call Automation & Voice FAQ Chatbot', description: 'AI-driven call automation with voice-enabled FAQ chatbots for handling customer inquiries and lead qualification.' },
            { title: 'Real-Time Fraud Detection & Identity Defense', description: 'Millisecond-level transaction risk assessment and synthetic identity fraud defense using computer vision and expert-system logic.' },
            { title: 'Intelligent Claims Processing Platform', description: 'Automating document ingestion, validation, and fraud detection for insurance and BFSI institutions to accelerate claim evaluation.' },
            { title: 'AI-Based Document Forgery Analysis', description: 'Detecting tampering and fabricated records using digital forensics, handwriting analysis, and formatting inspection.' },
            { title: 'AI-Driven Investment Management', description: 'Automating portfolio analysis, risk assessment, and decision-support by continuously evaluating market signals and client objectives.' },
            { title: 'Climate Risk–Based Credit Scoring', description: 'Evaluating long-term climate exposure of assets to assign location-specific Climate Credit Scores for risk-adjusted lending.' },
            { title: 'AI-Driven Collections & Recovery Orchestration', description: 'Adaptive AI agents for personalized and compliant debt recovery strategies based on repayment risk and borrower behavior.' },
            { title: 'Customer 360° Financial Wellness Advisory', description: 'Unified financial health views with personalized guidance delivered through multi-channel bots and relationship manager dashboards.' },
        ]
    },
    {
        id: 'climate-compass',
        title: "Climate and Compass",
        icon: Compass,
        description: "Navigate the future of sustainable tourism and environmental stewardship with AI-powered preservation tools.",
        color: "border-blue-500 text-blue-400",
        problems: [
            { title: 'AI-Driven Destination Management', description: 'Predict and mitigate over-tourism through crowd surge forecasting and proactive load balancing across heritage sites.' },
            { title: 'AI-Driven Tourism Agent Planner', description: 'Generate day-wise, bookable itineraries tailored to user travel dates, budget, and real-world factors like weather.' },
            { title: 'Sustainable Travel Carbon Tracking', description: 'Real-time carbon footprint calculation for travel decisions with informed suggestions for lower-carbon alternatives.' },
            { title: 'AI-Based Urban Flood Nowcasting', description: 'Street-level flood risk mapping and short-term predictions using satellite radar and social media distress signal analysis.' },
            { title: 'Scope 3 Emissions Auto-Accounting', description: 'NLP-based document parsing for automatic extraction and aggregation of indirect emissions data from supplier disclosures.' },
            { title: 'Automated Post-Disaster Damage Assessment', description: 'Rapid evaluation of infrastructure safety using pre- and post-event satellite or drone imagery comparison and classification.' },
            { title: 'AI-Based Shipping Route Fuel Optimization', description: 'Minimize fuel consumption and emissions through real-time oceanographic and weather-aware route optimization.' },
            { title: 'Automated Coral Reef Health Monitoring', description: 'Computer vision-based assessment of coral health and bleaching detection using underwater AUV video feeds.' },
        ]
    }
];
