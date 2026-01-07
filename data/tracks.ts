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
    objective?: string;
    constraints?: string[];
    evaluation?: string[];
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
        title: "Track 1 – Market and Minds",
        icon: Brain,
        description: "Merge financial intelligence with market psychologies through innovative FinTech and Marketing AI solutions.",
        objective: "Design AI-driven systems that enhance marketing intelligence, financial security, risk assessment, operational efficiency, and customer decision-making across BFSI, insurance, legal, and enterprise domains—while ensuring real-time performance, explainability, and regulatory compliance.",
        constraints: [
            "Must support real-time or near-real-time decisioning",
            "Must generate explainable and auditable outputs",
            "Should handle large-scale data streams",
            "Must respect regulatory, ethical, and compliance requirements",
            "Human-in-the-loop should be supported where critical"
        ],
        evaluation: [
            "Impact on operational efficiency",
            "Accuracy and reliability of AI decisions",
            "Explainability and transparency",
            "Scalability and real-world deployability",
            "User experience (customers, agents, managers)"
        ],
        color: "border-cyan-500 text-cyan-400",
        problems: [
            {
                title: "AI-Powered Call Automation & Voice FAQ Intelligence",
                description: "Design an AI system capable of autonomously handling inbound and outbound marketing calls using voice interaction. The system should understand user intent, resolve FAQs, qualify leads, escalate high-intent cases, and generate actionable campaign analytics—while significantly reducing human call center dependency."
            },
            {
                title: "Real-Time Fraud Detection & Digital Account Opening (DAO) Identity Defense",
                description: "Build an AI-driven platform that performs millisecond-level fraud detection on live financial transactions while simultaneously preventing synthetic identity fraud during digital account onboarding using video-based KYC. The system must produce explainable decisions across behavioral, biometric, and device-level signals."
            },
            {
                title: "Intelligent Claims Processing for Insurance & BFSI",
                description: "Create an AI-powered claims processing system that automates document ingestion, data extraction, validation, fraud detection, and underwriting decisions. The platform should minimize manual intervention, reduce claim settlement time, and maintain full auditability and regulatory compliance."
            },
            {
                title: "AI-Based Document Forgery Analysis & Verification",
                description: "Design an AI system that detects forged or manipulated documents using metadata forensics, handwriting and signature analysis, linguistic inconsistency detection, and formatting inspection. The solution should generate legally defensible, explainable forensic evidence for each verification decision."
            },
            {
                title: "AI-Driven Investment Management & Decision Intelligence",
                description: "Develop an AI-assisted investment intelligence platform that analyzes real-time market data, portfolio holdings, and client risk profiles to generate transparent, explainable investment recommendations. The system must support human decision-makers rather than replace them, ensuring governance and compliance."
            },
            {
                title: "Climate Risk–Based Credit Scoring & Lending Intelligence",
                description: "Build an AI-powered Climate Risk Engine that evaluates long-term climate exposure of assets using geospatial and multi-decade climate projections. The output should integrate into lending systems to dynamically influence credit scoring, loan pricing, tenure, and insurance decisions in line with ESG and regulatory norms."
            },
            {
                title: "AI-Driven Collections & Recovery Orchestration",
                description: "Design an adaptive AI platform that personalizes loan recovery strategies based on borrower behavior, repayment intent, stress indicators, and communication sensitivity. The system should optimize recovery rates while strictly adhering to fair-practice and regulatory guidelines."
            },
            {
                title: "AI-Driven Customer 360° Financial Wellness Advisory",
                description: "Create a unified AI system that consolidates customer financial data across products to compute a holistic Financial Wellness Score. The platform should proactively detect financial stress, recommend corrective actions, and engage users via multilingual chatbot and voice interfaces—while empowering relationship managers with actionable insights."
            }
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
