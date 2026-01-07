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
        title: "Market and Minds",
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
        objective: "Design AI-driven systems that address climate resilience, sustainable tourism, disaster preparedness, environmental intelligence, and emissions reduction by leveraging real-time data, geospatial intelligence, and predictive analytics—while enabling actionable decisions for governments, enterprises, and communities.",
        constraints: [
            "Must support real-time or near-real-time intelligence",
            "Should leverage geospatial, temporal, or environmental data",
            "Outputs must be explainable and decision-oriented",
            "Must demonstrate climate, sustainability, or resilience impact",
            "Should be scalable for real-world deployment"
        ],
        evaluation: [
            "Environmental and climate impact",
            "Predictive accuracy and responsiveness",
            "Practical deployability and scalability",
            "Explainability of AI outputs",
            "Value to governments, enterprises, and communities"
        ],
        color: "border-blue-500 text-blue-400",
        problems: [
            {
                title: "AI-Driven Destination Management & Invisible Crowd Control",
                description: "Design an AI platform that predicts and mitigates over-tourism by forecasting crowd surges in advance using historical footfall, weather, seasonal trends, and public events. The system should enable proactive visitor load balancing across attractions without imposing physical or digital movement restrictions."
            },
            {
                title: "AI-Driven Tourism Agent Planner & Dynamic Itinerary Management",
                description: "Build an AI-based tourism planning system that generates time-aware, day-wise, and executable travel itineraries based on user constraints such as budget, availability, interests, and stay preferences. The system must dynamically adapt itineraries to real-world changes like weather, delays, or booking availability."
            },
            {
                title: "Sustainable Travel Carbon Tracking & Green Decision Intelligence",
                description: "Create a real-time carbon intelligence platform that calculates the environmental impact of travel decisions—including transport, accommodation, and activities—during trip planning or booking. The platform should surface lower-carbon alternatives and verified offset options without disrupting the booking experience."
            },
            {
                title: "AI-Based Urban Flood Nowcasting & Rapid Risk Intelligence",
                description: "Design an AI-driven urban flood nowcasting system that produces street-level flood risk predictions with short lead times by fusing satellite radar data and social-media-based distress signals. The solution should enable rapid, localized emergency alerts and response coordination in dense urban environments."
            },
            {
                title: "Scope 3 Emissions Auto-Accounting & ESG Intelligence",
                description: "Build an AI-powered ESG platform that automatically extracts, standardizes, and aggregates Scope 3 emissions data from unstructured supplier documents. The system should produce auditable, regulation-aligned emissions insights with minimal manual intervention."
            },
            {
                title: "Automated Post-Disaster Infrastructure Damage Assessment",
                description: "Develop an AI system that rapidly assesses infrastructure damage after natural disasters by comparing pre- and post-event satellite or drone imagery. The output should classify buildings and roads by damage severity to support rescue prioritization and recovery planning."
            },
            {
                title: "AI-Based Shipping Route Fuel Optimization & Emissions Reduction",
                description: "Create an AI-driven maritime route optimization platform that minimizes fuel consumption and emissions by incorporating real-time oceanographic and weather data. The system must balance fuel efficiency, safety, and schedule reliability for shipping operators."
            },
            {
                title: "Automated Coral Reef Health Monitoring & Bleaching Detection",
                description: "Design an AI-powered marine monitoring platform that analyzes underwater video feeds to identify coral species and detect early signs of bleaching. The system should generate spatial and temporal reef health insights to support conservation and climate impact assessment."
            }
        ]
    }
];
