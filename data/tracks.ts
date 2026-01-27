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
                description: `Explanation:
Provide tourism authorities and destination management organizations with an AI-driven platform that predicts and mitigates over-tourism without intrusive controls. The system forecasts crowd surges days in advance by analyzing historical footfall, weather patterns, seasonal trends, and public holidays, enabling proactive load balancing across attractions and preservation of heritage sites.

Scenario:
Popular tourist destinations experience unpredictable crowd spikes that degrade visitor experience and accelerate environmental and cultural damage. The AI platform continuously analyzes multi-source data to anticipate congestion at key locations and dynamically recommends optimal visit windows or alternative routes and lesser-known attractions to stakeholders, tour operators, and digital information channels—without restricting visitor movement.

Example Output:
Input:
Historical visitor footfall data across 120 tourist sites, real-time weather feeds, seasonal calendars, and public holiday schedules.

Output:
 "Attraction-ID 17: Predicted crowd saturation at 92% capacity on Saturday between 11 AM–3 PM."
 "Load Redistribution Recommendation: Redirect 28% of visitors to nearby Site-ID 44 and Site-ID 51."
 "Hidden Route Insight: Alternative heritage trail projected to remain under 45% capacity."
 "Preservation Alert: Repeated overcapacity detected—temporary demand throttling advised."`
            },
            {
                title: "AI-Driven Tourism Agent Planner & Dynamic Itinerary Management",
                description: `Explanation:
Provide tourism service providers and travel platforms with an AI-driven Tourism Agent Planner that generates day-wise, time-aware, and bookable itineraries tailored to each traveler. The system analyzes user-provided inputs such as travel dates, preferred stay type, daily timing constraints, budget range, and interests to determine when to go, where to go, how long to stay, and what to book—optimizing the entire travel plan at a granular level.

Scenario:
Travelers plan trips with vague preferences but face fragmented decisions around accommodation, daily schedules, attractions, and bookings. The AI platform consolidates these inputs into a unified itinerary, allocating optimal time slots for travel, sightseeing, rest, and stays. The system dynamically adjusts the plan based on real-world factors such as weather changes, delays, or availability, ensuring the itinerary remains practical and executable for each day of the trip.

Example Output:
Input:
User travel inputs including destination, trip duration (5 days), daily availability windows, accommodation preference, budget limits, and interest categories.

Output:
 "Day 2 Plan: 9:00–11:30 AM — Heritage site visit (low crowd window); 12:00 PM — lunch near stay location."
 "Stay Optimization: Hotel selected within 1.2 km of major attractions—travel time reduced by 35%."
 "Booking Insight: Best price window detected for Day 4 activity—booking recommended within next 6 hours."
 "Schedule Adjustment: Rain forecast detected—outdoor activity shifted to Day 5; museum visit scheduled for Day 3 afternoon."`
            },
            {
                title: "Sustainable Travel Carbon Tracking & Green Decision Intelligence",
                description: `Explanation:
Provide travelers, travel platforms, and tourism stakeholders with a carbon impact intelligence system that calculates the granular carbon footprint of travel-related decisions—including transportation, accommodation, and food choices—at the time of planning or booking. The platform enables users to understand environmental impact in real time and supports informed, lower-carbon alternatives with verified offset options.

Scenario:
Travelers plan trips with vague visibility into the environmental consequences of flights, hotel stays, or daily activities. The system integrates into booking workflows via a browser extension or API, analyzing each item in a travel cart to compute carbon emissions. It then presents greener alternatives—such as lower-emission transport modes or eco-certified stays—allowing sustainability-aware choices without disrupting the booking experience.

Example Output:
Input:
Travel booking cart containing flight selection, hotel reservation, and daily meal/activity plans.

Output:
 "Flight Emissions: Route emits 320 kg CO₂—alternative train option emits 74 kg CO₂."
 "Stay Impact: Selected hotel rated high carbon intensity; eco-certified alternative reduces footprint by 28%."
 "Daily Footprint Summary: Estimated trip emissions—1.12 tons CO₂ over 6 days."
 "Offset Recommendation: Verified offset option available to neutralize 100% of trip emissions."`
            },
            {
                title: "AI-Based Urban Flood Nowcasting & Rapid Risk Intelligence",
                description: `Explanation:
Provide city authorities and disaster management agencies with an AI-driven flood nowcasting platform designed for dense urban environments. The system combines real-time satellite radar data (SAR) with social media–based distress signal analysis to generate street-level flood risk maps and short-term flood predictions with a 15-minute lead time, enabling faster and more localized emergency response.

Scenario:
Urban areas experience sudden flash floods where traditional hydrological models fail due to latency and coarse spatial resolution. The platform continuously ingests SAR satellite feeds to detect surface water expansion while simultaneously analyzing social media streams for flood-related SOS keywords and geotagged distress signals. AI models fuse these signals to produce near real-time flood intensity maps and trigger automated alerts for affected zones.

Example Output:
Input:
 Live SAR satellite imagery over metropolitan areas
 Real-time social media posts containing flood-related keywords and geolocation metadata

Output:
 "Zone C – Street-Level Alert: High flood probability (>85%) predicted within next 15 minutes."
 "SOS Signal Spike: 47 flood-related distress posts detected within 1.2 km radius."
 "Risk Map Update: Water accumulation expanding along low-lying road corridors."
 "Emergency Alert Triggered: SMS notifications dispatched to 3,200 residents in affected blocks."`
            },
            {
                title: "Scope 3 Emissions Auto-Accounting & ESG Intelligence",
                description: `Explanation:
Provide enterprises with an AI-driven Scope 3 emissions accounting platform that automatically extracts, standardizes, and aggregates indirect emissions data from supplier documents. The system uses NLP-based document parsing to analyze invoices, sustainability disclosures, and annual reports, transforming unstructured data into a unified, auditable dataset for ESG reporting and compliance.

Scenario:
Large organizations rely on hundreds of suppliers, making Scope 3 emissions tracking fragmented, manual, and error-prone. The platform ingests supplier documents across formats (PDFs, scans, spreadsheets), extracts relevant emissions and activity metrics, normalizes them against reporting standards, and consolidated the results into a centralized ESG dashboard—enabling continuous Scope 3 visibility without manual data collection.

Example Output:
Input:
Supplier invoices, procurement records, and sustainability reports from 300 vendors across multiple regions.

Output:
 "Supplier-ID 118: Estimated Scope 3 emissions—1,420 tCO₂e (logistics and raw materials)."
 "Data Standardization Alert: Emissions units normalized from kg CO₂ to tCO₂e for reporting."
 "Coverage Insight: 74% of supplier emissions data auto-extracted without manual intervention."
 "ESG Dashboard Update: Scope 3 emissions contribute 62% of total corporate carbon footprint."`
            },
            {
                title: "Automated Post-Disaster Infrastructure Damage Assessment",
                description: `Explanation:
Provide disaster management authorities and emergency response agencies with an AI-driven damage assessment platform that rapidly evaluates infrastructure safety after natural disasters. The system compares pre- and post-event satellite or drone imagery to detect structural changes and classify buildings and roads by damage severity—enabling faster situational awareness and prioritized rescue planning.

Scenario:
Following earthquakes, hurricanes, or floods, first responders struggle to identify safe routes and assess structural damage due to delayed manual inspections. The AI platform ingests recent post-disaster imagery and aligns it with historical baseline data to automatically detect changes in infrastructure integrity. Damage classifications are visualized on geospatial maps to guide rescue teams, logistics planning, and recovery operations.

Example Output:
Input:
Pre-disaster and post-disaster satellite/drone imagery covering 250 sq. km of affected urban and semi-urban regions.

Output:
 "Building-ID 771 classified as Destroyed—roof collapse and structural displacement detected."
 "Road Segment R-204 marked Damaged—surface deformation detected; avoid heavy vehicle routing."
 "Rescue Route Priority: 3 intact corridors identified for emergency vehicle access."
 "Damage Summary: 18% infrastructure destroyed, 27% damaged, 55% intact within assessed zone."`
            },
            {
                title: "AI-Based Shipping Route Fuel Optimization & Emissions Reduction",
                description: `Explanation:
Provide maritime operators and logistics companies with an AI-driven route optimization platform that minimizes fuel consumption and carbon emissions. The system uses optimization algorithms to evaluate real-time ocean currents, wind speed, and wave height, generating fuel-efficient shipping routes that outperform traditional shortest-distance navigation—directly reducing operational costs and environmental impact.

Scenario:
Cargo vessels typically follow distance-optimized routes without accounting for dynamic ocean conditions, leading to unnecessary fuel burn and higher emissions. The AI platform continuously ingests live oceanographic and weather data to compute optimal voyage paths that balance safety, time, and fuel efficiency. These recommendations integrate into fleet management and navigation systems, enabling shipping operators to cut emissions without disrupting delivery schedules.

Example Output:
Input:
 Planned voyage route between two ports
 Real-time ocean current data, wind forecasts, and wave height measurements

Output:
 "Optimized Route Generated: Fuel consumption reduced by 8.2% compared to shortest-path navigation."
 "Weather Impact Adjustment: Strong headwinds avoided by rerouting 120 nautical miles south."
 "Emissions Report: Estimated CO₂ reduction—142 tons for this voyage."
 "Operational Insight: Arrival time maintained within ±1.5 hours while improving fuel efficiency."`
            },
            {
                title: "Automated Coral Reef Health Monitoring & Bleaching Detection",
                description: `Explanation:
Provide marine conservation agencies and environmental researchers with an AI-driven reef monitoring platform that uses underwater computer vision to assess coral health at scale. The system analyzes video feeds from Autonomous Underwater Vehicles (AUVs) to identify coral species and detect early signs of coral bleaching, enabling continuous, data-driven reef conservation.

Scenario:
Marine ecosystems span vast underwater regions that cannot be monitored effectively by human divers alone. The platform processes underwater video streams captured by AUVs, automatically classifying coral types and detecting visual stress indicators such as color loss and tissue degradation. Over time, the system aggregates these observations into spatial and temporal reef health maps, helping conservation teams identify high-risk zones and measure the impact of climate stressors.

Example Output:
Input:
Underwater video feeds from AUV surveys across 40 sq. km of coral reef regions collected over multiple months.

Output:
 "Reef-Zone 12: Bleaching probability increased to 68% over last 30 days."
 "Species Detection: Acropora coral identified with visible color degradation."
 "Health Trend Map: 22% of monitored reef area classified as high-stress zone."
 "Conservation Alert: Early bleaching indicators detected—field inspection recommended."`
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
                title: "AI-Driven Clinical Decision Support & Patient Medical Report Understanding",
                description: `Explanation:
Provide hospitals and healthcare providers with an AI-driven platform that bridges the gap between clinical decision-making and patient understanding. The system ingests handwritten prescriptions, lab reports, and structured EHR data to both assist clinicians at the point of care with guideline-based insights and translate complex medical reports into clear, patient-friendly explanations.

Scenario:
During short clinical consultations, doctors must interpret lab values, imaging results, prescriptions, and constantly evolving clinical guidelines while patients leave without understanding their diagnosis or treatment plan. The platform runs alongside existing EHR systems, surfacing real-time clinical alerts—such as guideline recommendations, drug–drug interactions, and risk scores—within the clinician’s workflow, while simultaneously generating simplified explanations of reports and prescriptions for patient’s post-visit.

Example Output:
Input:
 Handwritten prescriptions and scanned lab reports
 Structured EHR data (diagnosis codes, medications, vitals, lab values)

Output:
 "Clinical Alert: Patient on Drug A + Drug B—moderate interaction risk detected per latest guideline."
 "Risk Score Update: Cardiovascular risk elevated (18%) based on lipid panel and vitals."
 "Patient Summary Generated: ‘Your blood test shows high cholesterol, which increases heart risk. The prescribed medicine helps reduce this over time.’"
 "Handwritten Prescription Parsed: Medication name, dosage, and frequency digitized and verified."`
            },
            {
                title: "AI-Powered Radiology Report Automation & Quality Assurance",
                description: `Explanation:
Provide hospitals and diagnostic centers with an AI-driven radiology reporting assistant that reduces reporting burden while improving diagnostic quality. The system analyzes radiology reports alongside imaging metadata to generate structured impressions, flag potential missed findings, and enforce standardized hospital reporting templates—supporting radiologists without replacing clinical judgment.

Scenario:
Radiologists interpret high volumes of CT, X-ray, and mammography studies under time pressure, increasing burnout and the risk of inconsistencies or missed observations. The AI assistant operates within the reporting workflow, reviewing draft reports in real time to suggest structured language, highlight discrepancies between findings and impressions, and ensure adherence to institutional and regulatory reporting standards.

Example Output:
Input:
Radiology study metadata (modality, anatomy, protocol) and draft radiology reports for CT, X-ray, and mammography exams.

Output:
 "Template Compliance Alert: Impression missing mandatory section for follow-up recommendation."
 "Potential Miss Flagged: Report mentions lung opacity but no corresponding impression statement found."
 "Structured Impression Suggested: Findings auto-mapped to standardized terminology and sections."
 "QA Summary: Report completeness score—94%; ready for final sign-off."`
            },
            {
                title: "Federated Learning Platform for Seasonal & Widespread Disease Surveillance",
                description: `Explanation:
Provide city and state public health authorities with a privacy-preserving disease surveillance platform using Federated Learning. The system enables hospitals and Primary Health Centers (PHCs) to collaboratively train outbreak detection models for seasonal and rapidly spreading diseases without sharing raw patient data, ensuring compliance with India’s ABDM framework and DPDP Act.

Scenario:
Hospitals and PHCs independently record patient symptoms, diagnoses, lab results, and prescription trends, but data silos prevent early detection of disease clusters such as dengue, influenza, or antibiotic-resistant infections. The federated platform deploys local models within each institution, aggregates encrypted model updates centrally, and detects abnormal spatial or temporal disease patterns—alerting public health officials without exposing individual patient records.

Example Output:
Input:
 De-identified EHR summaries from hospitals and PHCs (fever cases, lab trends, prescriptions)
 Federated model updates from participating institutions across a city or district

Output:
 "Outbreak Signal Detected: Dengue-like symptom cluster rising across 3 adjacent zones over 6 days."
 "Seasonal Trend Alert: Influenza cases exceeding historical baseline by 32%."
 "Resistance Pattern Insight: Increased antibiotic non-response reported across 2 hospitals."
 "Public Health Dashboard Update: City-wide risk heatmap generated using federated model outputs."`
            },
            {
                title: "Patient Experience Analytics & Automated Service Recovery",
                description: `Explanation:
Provide hospitals and healthcare networks with an AI-driven patient experience analytics platform that transforms fragmented feedback into actionable service improvements. The system ingests multi-channel patient feedback and applies sentiment analysis and issue clustering to identify systemic problems, automatically triggering service recovery workflows to close the loop with patients.

Scenario:
Hospitals collect feedback through surveys, reviews, call centers, and social platforms, but insights remain siloed and reactive. The platform continuously analyzes incoming feedback to detect negative sentiment patterns related to billing, nursing care, wait times, or facilities. When thresholds are crossed, automated workflows notify relevant departments, assign ownership, and track resolution—ensuring patient concerns are addressed in near real time.

Example Output:
Input:
 Patient satisfaction surveys
 Google reviews
 Call center transcripts
 Social media mentions related to hospital services

Output:
 "Sentiment Alert: Spike in negative feedback related to outpatient wait times over last 48 hours."
 "Issue Cluster Identified: Billing disputes reported by 23 patients across 2 departments."
 "Service Recovery Triggered: Case assigned to patient relations team with 24-hour SLA."
 "Experience Dashboard Update: Overall patient sentiment improved by 14% post-intervention."`
            },
            {
                title: "AI-Driven Chronic Disease Management for Diabetes & Cardio-Metabolic Care",
                description: `Explanation:
Provide hospitals and care networks with an AI-driven chronic disease management platform designed for diabetes and cardio-metabolic patients. The system integrates lab results, prescriptions, vitals, and follow-up records to continuously risk-stratify patients, generate personalized care plans, and proactively identify individuals who require tele-consultation or in-person clinical review—reducing preventable complications and hospital overload.

Scenario:
Hospitals in South India manage large populations of diabetes and cardiac patients, many of whom deteriorate due to missed follow-ups or late intervention. The platform aggregates longitudinal patient data from OPDs, labs, and pharmacy systems to monitor disease progression. AI models identify rising risk patterns and trigger timely care actions, enabling clinicians to intervene early while managing patient loads efficiently.

Example Output:
Input:
 Longitudinal lab data (HbA1c, lipid profile, BP readings)
 Prescription history and medication adherence indicators
 Follow-up visit records and vitals

Output:
 "Patient-ID 5521 classified as High Risk: Rising HbA1c and BP trend over last 3 months."
 "Care Plan Generated: Medication adjustment, diet plan, and 2-week tele-consult scheduled."
 "Follow-Up Alert: In-person cardiology review recommended within 72 hours."
 "Population Insight: 21% of enrolled patients escalated to proactive intervention this month."`
            },
            {
                title: "Agentic AI–Driven Clinical Documentation Improvement & Coding",
                description: `Explanation:
Provide hospitals with a domain-expert AI system that enhances clinical documentation quality and medical coding accuracy using an Agentic AI architecture. The platform reads clinician notes, detects documentation gaps, recommends precise ICD and procedure codes, and generates structured clinical summaries—helping hospitals improve care quality scores, compliance, and reimbursement outcomes.

Scenario:
Clinicians document patient encounters under time pressure, often missing key clinical details required for accurate coding and compliance. The AI expert system deploys specialized agents—documentation agents, coding agents, and compliance agents—that collaboratively analyze clinical notes in real time. The system flags missing elements, suggests appropriate codes, and structures encounter summaries before final submission to billing and quality systems.

Example Output:
Input:
Unstructured clinician notes from OPD and inpatient encounters, including diagnoses, procedures, and progress notes.

Output:
 "Documentation Alert: Missing severity descriptor for diagnosis—recommend adding ‘acute’ or ‘chronic’."
 "Coding Suggestion: ICD-10 code updated from I10 to I11.9 based on documented cardiac involvement."
 "Compliance Check: Procedure note lacks indication—add justification to meet audit standards."
 "Structured Summary Generated: Encounter converted into problem list, treatment plan, and discharge instructions."`
            },
            {
                title: "Ambient Clinical Voice Documentation (Scribe AI)",
                description: `Explanation:
Provide hospitals with an AI-driven ambient clinical documentation platform that listens to doctor–patient conversations (with consent) and automatically generates structured, template-based medical notes. The system supports international clinical language patterns, including American medical slang and conversational English, and converts them into standardized, ABDM-compliant and globally recognized clinical documentation formats.

Scenario:
In high-volume OPDs, doctors spend more time typing notes than engaging with patients, leading to burnout and reduced care quality. The Scribe AI runs in the background during consultations, capturing spoken dialogue and extracting key clinical elements—diagnosis, assessment, treatment plan, and follow-up. The platform structures this information into hospital-approved templates and international medical documentation standards, allowing clinicians to review and approve notes in seconds.

Example Output:
Input:
Live doctor–patient conversation in conversational American English, including informal clinical slang.

Example input snippet:
“Looks like your sugars are still running high. Let’s tweak the metformin dose and I’ll see you back in two weeks.”

Output:
 "SOAP Note Generated:"
o Subjective: Patient reports fatigue; home glucose readings elevated.
o Objective: HbA1c 8.4%, BP 138/86.
o Assessment: Poorly controlled Type 2 Diabetes Mellitus.
o Plan: Increase metformin to 1000 mg BID; dietary counseling; follow-up in 2 weeks.
 "Template Compliance: Hospital OPD format + ABDM clinical record structure applied."
 "Language Normalization: Informal phrase ‘sugars running high’ standardized to ‘hyperglycemia’."
 "EHR Update Ready: Structured note auto-populated for clinician review."`
            }
        ]
    }
];
