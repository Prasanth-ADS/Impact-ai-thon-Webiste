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
                title: "AI-Powered Call Automation & Voice FAQ Chatbot for Marketing",
                description: `Explanation:
Provide businesses with an AI-driven call automation system integrated with a voice-enabled FAQ chatbot to handle customer inquiries, lead qualification, and campaign follow-ups. The AI agent uses natural language understanding and speech recognition to interact with customers, reduce manual call center workload, and ensure consistent, real-time engagement across marketing campaigns.

Scenario:
Marketing teams deploy AI call agents to automatically call potential leads generated from campaigns and handle inbound customer calls. The system answers frequently asked questions via voice, captures user intent, qualifies leads, and routes high-intent customers to human agents while logging all interactions for analytics and campaign optimization.

Example Output:
Input:
Live inbound and outbound call interactions from a marketing campaign targeting 5,000 potential customers.

Output:
 "Campaign Alpha: 62% of inbound calls resolved by voice FAQ chatbot without human intervention."
 "Lead-ID 3421 qualified: User expressed purchase intent and requested callback from sales team."
 "FAQ Insight: 41% of callers asked about pricing plans—recommend updating campaign messaging."
 "Call Duration Alert: Average AI-handled call time reduced by 38% compared to manual agents."`
            },
            {
                title: "Real-Time Fraud Detection & Digital Account Opening (DAO) Identity Defense",
                description: `Explanation:
Provide banks and financial institutions with an AI-agent–driven fraud prevention system that operates across real-time transactions and digital account onboarding workflows. The platform performs millisecond-level transaction risk assessment while simultaneously defending against synthetic identity fraud during Digital Account Opening (DAO) using computer vision and expertsystem logic for explainable decisions.

Scenario:
Banks process millions of transactions daily while onboarding new customers through video-based KYC. AI agents continuously monitor live transactions for anomalous patterns and instantly approve or block them before financial loss occurs. During account opening, the same system validates customer identity by analyzing live video, facial consistency, liveness signals, and government ID authenticity to detect deepfakes, spoofed documents, or synthetic identities—ensuring fraud prevention before and after account creation.

Example Output:
Input:
 Live transaction stream of 2 million transactions per day.
 Video KYC feed and identity documents from 10,000 digital account opening requests.

Output:
 "Transaction-ID 889234 rejected in 12 ms: Behavior deviates from customer baseline—high fraud probability (0.91)."
 "DAO Alert: Applicant-ID 451 detected using synthetic identity—facial mismatch across frames and ID hologram anomaly."
 "Explainability Log: Fraud decision based on velocity spike, device fingerprint change, and historical spend deviation."
 "Loss Prevention Summary: $1.8M potential fraud blocked pre-transaction and during onboarding."`
            },
            {
                title: "Intelligent Claims Processing Platform for Insurance & BFSI",
                description: `Explanation:
Provide insurers and BFSI institutions with an AI-powered claims processing platform that automates document ingestion, data extraction, validation, fraud detection, and underwriting decisions. The system replaces manual, rule-heavy workflows with intelligent agents that accelerate claim evaluation while maintaining auditability and regulatory compliance.

Scenario:
Insurance providers receive thousands of claims daily involving policy documents, bills, reports, and identity proofs. AI agents automatically extract structured data from submitted documents, verify policy coverage, flag fraudulent patterns, and trigger automated approval or escalation workflows. Human underwriters intervene only for high-risk or exceptional cases, drastically reducing turnaround time.

Example Output:
Input:
Digitally submitted claim packets (policy document, hospital bills, accident reports) from 25,000 insurance claims.

Output:
 "Claim-ID 772901 approved in 9 days: Policy verified, documents consistent, fraud score low (0.08)."
 "Claim-ID 889214 flagged: Duplicate invoice pattern detected—manual review required."
 "Workflow Insight: 68% of claims processed end-to-end without human intervention."
 "Operational Metric: Average claim settlement time reduced from 38 days to 8.5 days."`
            },
            {
                title: "AI-Based Document Forgery Analysis & Verification System",
                description: `Explanation:
Provide law enforcement agencies, banks, insurers, and enterprises with an AI-powered document forgery analysis platform that detects tampering, impersonation, and fabricated records. The system combines digital and metadata forensics, handwriting and signature analysis, and linguistic and formatting inspection to assess document authenticity with explainable forensic evidence.

Scenario:
Organizations receive critical documents such as contracts, affidavits, financial statements, and identity proofs where authenticity is legally and financially critical. AI agents analyze file metadata, image artifacts, handwriting consistency, signature dynamics, language patterns, and formatting anomalies to identify forged or manipulated documents before acceptance or legal submission.

Example Output:
Input:
Scanned and digital documents (PDF, image, DOCX) submitted for verification across legal, banking, and insurance workflows.

Output:
 "Document-ID 33421 flagged: Metadata mismatch—creation timestamp altered postsignature."
 "Signature Analysis Alert: Stroke pressure and slant deviation detected—high probability of forgery (0.87)."
 "Linguistic Inconsistency: Section 4 uses divergent syntax and vocabulary—possible content insertion."
 "Forensic Verdict: Document classified as manipulated with 92% confidence; detailed evidence logs generated."`
            },
            {
                title: "AI-Driven Investment Management & Decision Intelligence System",
                description: `Explanation:
Provide financial institutions, asset managers, and wealth management firms with an AI-powered investment management system that automates portfolio analysis, risk assessment, and decisionmaking support. The platform uses AI agents to continuously evaluate market signals, client objectives, and risk constraints, enabling data-driven investment actions with transparency and governance.

Scenario:
Investment firms manage diverse portfolios across equities, fixed income, and alternative assets while responding to volatile market conditions. AI agents ingest real-time market data, historical performance, macroeconomic indicators, and client profiles to generate portfolio insights, rebalance recommendations, and risk alerts. Human portfolio managers retain control while leveraging AI for faster, more consistent decision support.

Example Output:
Input:
Real-time market data feeds, portfolio holdings of 5,000 clients, and predefined risk and compliance constraints.

Output:
 "Portfolio-ID 10234: Risk exposure exceeds mandate due to sector concentration—rebalancing recommended."
 "Market Signal Alert: Volatility spike detected in mid-cap equities—defensive allocation suggested."
 "Client Profile Match: Conservative investor—AI reduced exposure to high-beta assets by 12%."
 "Decision Log: Investment recommendation generated with rationale based on market trends, risk metrics, and historical performance."`
            },
            {
                title: "Climate Risk–Based Credit Scoring & Lending Intelligence System",
                description: `Explanation:
Provide banks and financial institutions with a Climate Risk Engine that evaluates long-term climate exposure of assets and assigns a location-specific Climate Credit Score. The system incorporates 50-year projections of climate hazards—such as floods, heatwaves, storms, and sealevel rise—to enable risk-adjusted lending, pricing, and insurance decisions aligned with regulatory and ESG requirements.

Scenario:
Banks issue home loans, commercial mortgages, and infrastructure financing without fully accounting for future climate risks embedded in asset locations. AI-driven risk models analyze geospatial climate projections and historical climate data to score each property’s long-term exposure. The Climate Credit Score is then integrated into loan underwriting systems to dynamically adjust interest rates, loan tenure, or insurance premiums before financial exposure materializes.

Example Output:
Input:
Geolocation data for 50,000 loan-backed properties combined with long-term climate projection datasets.

Output:
 "Property-ID 98122 assigned Climate Credit Score: 42/100—high flood and cyclone risk projected over 30–50 years."
 "Loan Pricing Adjustment: Interest rate increased by 1.2% due to elevated climate exposure."
 "Portfolio Risk Alert: 18% of coastal mortgage portfolio classified as high climate risk."
 "Explainability Log: Score derived from flood frequency increase, storm intensity projections, and heat stress trends."`
            },
            {
                title: "AI-Driven Collections & Recovery Orchestration Platform",
                description: `Explanation:
Provide banks and NBFCs with an AI-powered collections and recovery platform that replaces rigid, rule-based strategies with adaptive, self-learning AI agents. The system dynamically segments delinquent customers by repayment risk, intent, and communication sensitivity, then orchestrates the optimal channel, tone, and timing for each interaction—while ensuring compliance with fair treatment and regulatory norms.

Scenario:
Traditional collections teams rely on fixed delinquency buckets and generic reminder messages, resulting in low recovery rates and rising customer dissatisfaction. The AI platform continuously analyzes borrower behavior, payment history, dispute patterns, and response outcomes to personalize recovery strategies. It integrates with existing collections systems to automate outreach, escalate cases intelligently, and learn from every interaction to improve future recovery performance.

Example Output:
Input:
Delinquency data from 80,000 loan accounts including repayment history, past communication responses, disputes, and complaint logs.

Output:
 "Customer-ID 77421 classified: High intent to pay, low stress tolerance—soft SMS reminder scheduled at 7 PM."
 "Customer-ID 55203 flagged: Low response to digital nudges—human agent call recommended."
 "Strategy Learning Update: Promise-to-pay success rate improved by 18% for personalized tone messages."
 "Compliance Log: All recovery actions aligned with RBI fair-practice guidelines—no policy breaches detected."`
            },
            {
                title: "AI-Driven Customer 360° Financial Wellness Advisory Platform",
                description: `Explanation:
Provide banks and financial institutions with an AI-agent–driven Customer 360° platform that transforms fragmented financial data into a holistic financial health view. The system unifies deposits, cards, loans, and investments to compute a Financial Wellness Score, detect risk patterns, and deliver personalized, explainable guidance—engaging customers through chatbot and voice Bot channels in local languages while empowering relationship managers with actionable insights.

Scenario:
Retail customers often hold multiple financial products but lack visibility into their overall financial health, leading to underinsurance, over-leverage, and missed growth opportunities. The AI platform continuously analyzes customer portfolios and behavioral signals to identify stress indicators and improvement opportunities. It proactively engages customers with tailored recommendations and surfaces the same intelligence to relationship managers for informed, timely interventions.

Example Output:
Input:
Unified customer data across savings accounts, credit cards, loans, insurance policies, and investment portfolios for 120,000 retail customers.

Output:
 "Financial Health Score: 58/100—high credit utilization and low emergency savings detected."
 "Risk Pattern Alert: Missed two consecutive EMI payments—early stress signal flagged."
 "Personalized Recommendation: Suggest debt consolidation plan and automated savings of ₹2,000/month."
 "Multilingual Engagement: Voicebot delivered guidance in Tamil with step-by-step explanation of actions."
 "RM Dashboard Insight: Top 15 customers in branch flagged for proactive financial wellness review."`
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
    },
    {
        id: 'care-cure',
        title: "Care and Cure",
        icon: HeartPulse,
        description: "Redefine healthcare with AI-driven MedTech solutions, focusing on patient care, diagnostics, and wellness.",
        objective: "Design AI-driven healthcare systems that augment clinical decision-making, improve patient understanding, enhance care quality, enable public-health intelligence, and reduce clinician burnout—while ensuring privacy, explainability, regulatory compliance, and real-world deployability.",
        constraints: [
            "Must ensure patient privacy and data security",
            "Outputs must be clinically explainable and auditable",
            "Should integrate with existing hospital workflows",
            "Must align with healthcare regulations and standards",
            "Human-in-the-loop validation is mandatory"
        ],
        evaluation: [
            "Clinical usefulness and workflow fit",
            "Accuracy, safety, and explainability",
            "Privacy-preserving design",
            "Scalability across hospitals or regions",
            "Impact on care quality and clinician efficiency"
        ],
        color: "border-purple-500 text-purple-400",
        problems: [
            {
                title: "AI-Driven Clinical Decision Support & Patient Report Understanding",
                description: "Design an AI platform that assists clinicians with real-time, guideline-based insights while simultaneously translating complex medical reports and prescriptions into clear, patient-friendly explanations. The system should integrate handwritten prescriptions, lab reports, and EHR data without disrupting existing clinical workflows."
            },
            {
                title: "AI-Powered Radiology Report Automation & Quality Assurance",
                description: "Build an AI assistant that reviews radiology reports in real time to improve completeness, consistency, and diagnostic quality. The system should flag potential missed findings, enforce standardized reporting templates, and support radiologists without replacing clinical judgment."
            },
            {
                title: "Federated Learning Platform for Disease Surveillance",
                description: "Create a privacy-preserving disease surveillance system using Federated Learning that enables hospitals and PHCs to collaboratively detect seasonal and emerging disease outbreaks without sharing raw patient data. The platform must comply with India’s ABDM framework and DPDP Act while supporting public-health decision-making."
            },
            {
                title: "Patient Experience Analytics & Automated Service Recovery",
                description: "Design an AI platform that analyzes multi-channel patient feedback to detect systemic experience issues and automatically trigger service recovery workflows. The system should close the feedback loop by assigning ownership, tracking resolution, and measuring post-intervention impact."
            },
            {
                title: "AI-Driven Chronic Disease Management for Diabetes & Cardio-Metabolic Care",
                description: "Build an AI-powered care management system that continuously risk-stratifies chronic patients using longitudinal clinical data and proactively triggers timely interventions. The platform should help clinicians reduce preventable complications while managing large patient populations efficiently."
            },
            {
                title: "Agentic AI–Driven Clinical Documentation Improvement & Coding",
                description: "Design a multi-agent AI expert system that improves clinical documentation quality and medical coding accuracy. The system should detect documentation gaps, recommend precise codes, ensure compliance, and generate structured summaries to support billing and quality reporting."
            },
            {
                title: "Ambient Clinical Voice Documentation (Scribe AI)",
                description: "Create an AI-driven ambient clinical documentation system that listens to doctor–patient conversations (with consent) and generates structured, standardized medical notes. The solution should normalize conversational clinical language into globally accepted documentation formats and integrate seamlessly with EHR systems."
            }
        ]
    }
];
