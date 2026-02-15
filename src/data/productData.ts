import { Calendar, MessageSquare, ClipboardCheck, Rocket, Users } from "lucide-react";

export interface WhoBlock {
  title: string;
  description: string;
}

export interface OperationalScenario {
  headline: string;
  intro: string;
  withoutTitle: string;
  withoutItems: string[];
  withTitle: string;
  withItems: string[];
  closing: string;
}

export interface ProductInfo {
  icon: typeof Calendar;
  name: string;
  tagline: string;
  headline: string;
  subtext: string;
  heroExtra?: string;
  problemTitle: string;
  problems: string[];
  afterTitle: string;
  afterItems: string[];
  executiveClarity?: { title: string; blocks: { title: string; description: string }[] };
  operationalScenario?: OperationalScenario;
  saasClarity?: { headline: string; steps: string[]; closing: string[] };
  capabilitiesTitle: string;
  capabilities: { title: string; description: string }[];
  securityPosture?: { title: string; intro: string; points: string[] };
  whoTitle: string;
  whoItems: string[];
  whoBlocks: WhoBlock[];
  whoClosing?: string;
  architectureFlow: { input: string; intelligence: string; outcome: string };
  infrastructureCharacteristics?: string[];
  stabilitySection?: { title: string; intro: string; points: string[] };
  positioningClose?: { lines: string[] };
  primaryCta: string;
  secondaryCta: string;
  finalHeadline: string;
  finalSubtext?: string;
  price: string;
  priceNote: string;
}

export const productData: Record<string, ProductInfo> = {
  "communication-infrastructure": {
    icon: MessageSquare,
    name: "Communication Infrastructure",
    tagline: "Revenue-grade operational infrastructure",
    headline: "Revenue-Grade Communication. Delivered as SaaS.",
    subtext: "APEX centralizes, qualifies, and routes every inbound inquiry across website, WhatsApp, Instagram, and email — transforming fragmented conversations into structured operational flow.",
    heroExtra: "Deploy in minutes. Operate with control.",
    problemTitle: "The Hidden Revenue Leak",
    problems: [
      "Inquiries arrive across multiple channels without structure",
      "Response speed varies by team member",
      "No centralized visibility or accountability",
      "Follow-ups depend on manual effort",
    ],
    afterTitle: "What Structured Communication Looks Like",
    afterItems: [
      "Every inquiry is centralized and timestamped",
      "AI qualification logic activates instantly",
      "Routing happens automatically by department, location, or intent",
      "Follow-ups run without manual dependency",
      "Human escalation includes full conversation history",
    ],
    operationalScenario: {
      headline: "A Typical Revenue-Sensitive Environment",
      intro: "Example: A private clinic may receive 40–70 inquiries daily across website forms, WhatsApp, Instagram, and email.",
      withoutTitle: "Without structured routing:",
      withoutItems: [
        "Messages are answered at inconsistent intervals",
        "Some inquiries are delayed or overlooked",
        "No unified visibility across teams",
      ],
      withTitle: "With APEX:",
      withItems: [
        "Every inquiry is logged in real time",
        "Intent is classified automatically",
        "Urgent requests are prioritized",
        "Follow-up logic activates automatically",
        "Management maintains full oversight",
      ],
      closing: "Revenue continuity becomes controlled — not reactive.",
    },
    saasClarity: {
      headline: "How It Works",
      steps: [
        "Connect your channels (website, WhatsApp, email, etc.)",
        "Define routing & intake logic",
        "Activate AI agents",
        "Monitor performance in real time",
      ],
      closing: [
        "No infrastructure rebuild required.",
        "No custom development needed.",
        "Live in minutes.",
      ],
    },
    capabilitiesTitle: "Infrastructure Capabilities",
    capabilities: [
      { title: "Persistent Conversation Memory", description: "Full context retained across sessions and channels." },
      { title: "Intelligent Routing Framework", description: "Automatically directs inquiries to the correct person, branch, or workflow." },
      { title: "CRM Synchronization", description: "Captured in APEX CRM. External CRM integration available." },
      { title: "Structured Escalation", description: "Human handover with full history and timestamped traceability." },
      { title: "Multi-Location Logic", description: "Built for distributed teams and multi-branch operations." },
      { title: "Secure Data Handling", description: "Security-conscious handling designed for compliance-sensitive operations." },
    ],
    securityPosture: {
      title: "Security & Privacy Posture",
      intro: "APEX is designed with security-conscious handling of customer communications and operational traceability.",
      points: [
        "Access control and role-based visibility (where configured)",
        "Audit-friendly logging for inquiries, responses, and escalations",
        "Operational design encourages structured and intentional data capture",
        "Secure integration approach for connected channels and third-party systems",
        "Retention and deletion controls (based on client configuration)",
      ],
    },
    architectureFlow: {
      input: "Website, WhatsApp, Instagram, Email",
      intelligence: "Master Bot — Memory + Routing + Context",
      outcome: "Qualified Lead + Structured Follow-up + Escalation",
    },
    whoTitle: "Who This Is Designed For",
    whoItems: [],
    whoBlocks: [
      {
        title: "Private Clinics",
        description: "Managing high-value patient inquiries.",
      },
      {
        title: "Legal & Advisory Firms",
        description: "Handling consultation intake.",
      },
      {
        title: "Real Estate Agencies",
        description: "Where speed determines conversion.",
      },
      {
        title: "Multi-Location Operators",
        description: "Needing centralized visibility.",
      },
    ],
    whoClosing: "If response speed impacts revenue — structure matters.",
    stabilitySection: {
      title: "Built for Operational Stability",
      intro: "APEX is not a chatbot plugin.\nIt is structured communication infrastructure delivered as SaaS — designed to protect revenue, enforce routing discipline, and scale with your operations.",
      points: [],
    },
    positioningClose: {
      lines: [
        "Deploy structure. Maintain control.",
      ],
    },
    primaryCta: "Start Free Trial",
    secondaryCta: "Request Strategic Demo",
    finalHeadline: "Build Structured Operational Capacity",
    finalSubtext: "Deploy communication infrastructure that protects revenue without expanding headcount.",
    price: "From 49,990 Ft",
    priceNote: "+ VAT / month",
  },
  "revenue-capture": {
    icon: Calendar,
    name: "Revenue Capture",
    tagline: "Revenue Capture",
    headline: "Revenue-Protected Scheduling Infrastructure",
    subtext: "APEX captures booking intent across channels, enforces availability rules, and coordinates confirmations and reminders — turning scheduling into a controlled operational flow that reduces no-shows and protects revenue.",
    heroExtra: "Deploy quickly. Operate with control.",
    problemTitle: "The Hidden Revenue Leak",
    problems: [
      "Calls and manual scheduling create bottlenecks during peak hours",
      "Booking requests outside business hours go unhandled",
      "Confirmations and reschedules consume staff capacity",
      "No-show patterns repeat because follow-up is inconsistent",
      "Double-bookings and availability errors damage trust and throughput",
    ],
    afterTitle: "What Structured Scheduling Looks Like",
    afterItems: [
      "24/7 booking capture across website, WhatsApp, Instagram, and email",
      "Availability rules applied consistently (per service, resource, and location)",
      "Confirmations and reminders sent automatically",
      "Rescheduling flows handled without manual back-and-forth",
      "Staff handover includes full booking context and history",
    ],
    operationalScenario: {
      headline: "A Typical Revenue-Sensitive Scheduling Environment",
      intro: "Example: A clinic or service operator may coordinate dozens of appointments daily across multiple channels and team members.",
      withoutTitle: "Without Structured Scheduling:",
      withoutItems: [
        "Requests pile up during busy hours",
        "Staff miss messages across channels",
        "Availability is inconsistent across locations/providers",
        "No-shows repeat due to weak confirmation cadence",
      ],
      withTitle: "With APEX:",
      withItems: [
        "Booking intent is captured 24/7",
        "Availability rules stay consistent across channels",
        "Reminders reduce no-shows systematically",
        "Management has visibility into booking flow and outcomes",
      ],
      closing: "Capacity becomes controlled — not reactive.",
    },
    saasClarity: {
      headline: "How It Works",
      steps: [
        "Connect your channels and booking entry points",
        "Define availability rules (services, resources, locations)",
        "Activate booking, confirmation, and reminder agents",
        "Track bookings and outcomes with audit-friendly logging",
      ],
      closing: [
        "No infrastructure rebuild required.",
        "No custom development required.",
        "Go live quickly.",
      ],
    },
    capabilitiesTitle: "Infrastructure Capabilities",
    capabilities: [
      { title: "Availability Governance", description: "Rules-based availability per service, provider, and location." },
      { title: "Multi-Channel Booking Capture", description: "Capture booking intent across channels into one scheduling flow." },
      { title: "Calendar Coordination", description: "Coordinates availability on your calendar and prevents booking conflicts." },
      { title: "No-Show Reduction Engine", description: "Automated confirmation and reminder sequences reduce missed appointments." },
      { title: "Reschedule & Cancellation Flows", description: "Self-service changes without manual back-and-forth." },
      { title: "Audit-Friendly Logging", description: "Timestamped traceability for booking requests, confirmations, and changes." },
    ],
    securityPosture: {
      title: "Security & Privacy Posture",
      intro: "APEX is designed with security-conscious handling of scheduling data and operational traceability.",
      points: [
        "Access control and role-based visibility (where configured)",
        "Audit-friendly logging for bookings, confirmations, and changes",
        "Secure integration approach for connected channels and calendar providers",
        "Retention and deletion controls (based on client configuration)",
      ],
    },
    architectureFlow: {
      input: "Booking Requests, Google Calendar Availability, Client Messages",
      intelligence: "Master Bot — Availability + Confirmation + Reminders",
      outcome: "Confirmed Booking + Fewer No-Shows + Revenue Protected",
    },
    whoTitle: "Who This Is Designed For",
    whoItems: [],
    whoBlocks: [
      {
        title: "Medical Centers & Clinics",
        description: "High appointment volume where no-shows reduce throughput and revenue.",
      },
      {
        title: "Aesthetic & Cosmetic Practices",
        description: "Consultations and procedures where scheduling discipline protects capacity.",
      },
      {
        title: "Automotive Dealerships",
        description: "Service bookings and consultations across departments and advisors.",
      },
      {
        title: "Professional Service Firms",
        description: "Consultations and client meetings where gaps translate to lost revenue.",
      },
    ],
    whoClosing: "If capacity is revenue — scheduling must be governed.",
    stabilitySection: {
      title: "Built for Operational Stability",
      intro: "APEX is not a scheduling plugin.\nIt is structured scheduling infrastructure delivered as SaaS — designed to protect revenue, enforce availability discipline, and scale with your operations.",
      points: [],
    },
    positioningClose: {
      lines: [
        "Deploy governed availability. Protect capacity.",
      ],
    },
    primaryCta: "Start Free Trial",
    secondaryCta: "Request Strategic Demo",
    finalHeadline: "Protect revenue with structured scheduling infrastructure.",
    finalSubtext: "Deploy governed availability, confirmations, and reminders — without expanding headcount.",
    price: "12,990 Ft",
    priceNote: "+ VAT / user / month",
  },
  "operational-automation": {
    icon: ClipboardCheck,
    name: "Operational Automation",
    tagline: "Operational Automation",
    headline: "Operational Governance Infrastructure for Internal Execution",
    subtext: "APEX structures internal coordination into controlled workflows — routing tasks, enforcing escalation paths, and logging execution history — so execution stays predictable across teams without adding management overhead.",
    heroExtra: "Deploy quickly. Operate with control.",
    problemTitle: "The Hidden Operational Leak",
    problems: [
      "Manual follow-ups consume management time and attention",
      "Ownership is unclear, so tasks stall between roles",
      "Recurring processes drift when volume increases",
      "Bottlenecks remain invisible until quality drops",
      "Accountability depends on memory, not structure",
    ],
    afterTitle: "What Controlled Execution Looks Like",
    afterItems: [
      "Tasks routed automatically by role, priority, and availability",
      "Standard operating flows triggered without manual coordination",
      "Escalation paths enforced with full context and history",
      "Handoffs tracked end-to-end across departments",
      "Managers gain visibility into status, bottlenecks, and throughput",
    ],
    operationalScenario: {
      headline: "A Typical High-Volume Operating Environment",
      intro: "Example: a clinic, legal firm, or service operator coordinates dozens of internal actions daily across roles and locations.",
      withoutTitle: "Without Governed Workflows:",
      withoutItems: [
        "Tasks live in chats and inboxes",
        "Ownership changes without traceability",
        "Escalations happen late or not at all",
        "Managers chase status instead of driving outcomes",
      ],
      withTitle: "With APEX:",
      withItems: [
        "Tasks are created and routed with defined ownership",
        "Escalation rules activate automatically",
        "Every action is timestamped and reviewable",
        "Operational throughput becomes measurable and controllable",
      ],
      closing: "Execution becomes structured — not dependent on constant supervision.",
    },
    saasClarity: {
      headline: "How It Works",
      steps: [
        "Define workflows and routing rules (roles, priorities, triggers)",
        "Connect your intake points (forms, inboxes, internal requests)",
        "Activate routing, escalation, and follow-up agents",
        "Track task flow and outcomes with audit-friendly logging",
      ],
      closing: [
        "No infrastructure rebuild required.",
        "No custom development required.",
        "Deploy quickly.",
      ],
    },
    capabilitiesTitle: "Infrastructure Capabilities",
    capabilities: [
      { title: "Workflow Triggers", description: "Actions initiate automatically based on defined events and rules." },
      { title: "Role-Based Routing", description: "Tasks routed to the correct owner with priority and context." },
      { title: "Escalation Governance", description: "Escalations activate predictably when conditions are met." },
      { title: "Cross-Team Handoffs", description: "Structured transitions between departments with traceability." },
      { title: "Audit-Friendly Logging", description: "Timestamped history of tasks, actions, and decisions." },
      { title: "Operational Visibility", description: "Clear view of task status, bottlenecks, and throughput." },
    ],
    securityPosture: {
      title: "Security & Privacy Posture",
      intro: "APEX is designed with security-conscious handling of operational data and traceability.",
      points: [
        "Access control and role-based visibility (where configured)",
        "Audit-friendly logging for tasks, actions, and escalations",
        "Secure integration approach for connected systems and channels",
        "Retention and deletion controls (based on client configuration)",
      ],
    },
    architectureFlow: {
      input: "Tasks, Events, Team Requests",
      intelligence: "Master Bot — Routing + Triggers + Escalation",
      outcome: "Completed Workflows + Audit Trail + Operational Visibility",
    },
    whoTitle: "Who This Is Designed For",
    whoItems: [],
    whoBlocks: [
      {
        title: "Legal & Advisory Firms",
        description: "Case execution and internal handoffs where delays and traceability matter.",
      },
      {
        title: "Accounting & Tax Firms",
        description: "Recurring deadlines and deliverables requiring structured ownership and follow-up.",
      },
      {
        title: "Medical Centers",
        description: "Multi-role operational coordination where execution quality impacts client/patient experience.",
      },
      {
        title: "Multi-Location Operators",
        description: "Central oversight with local accountability across branches and teams.",
      },
    ],
    whoClosing: "If execution quality impacts revenue — workflows must be governed.",
    stabilitySection: {
      title: "Built for Operational Stability",
      intro: "APEX is not a task tool.\nIt is operational governance infrastructure delivered as SaaS — designed to enforce routing discipline, escalation control, and traceable execution across teams.",
      points: [],
    },
    positioningClose: {
      lines: [
        "Deploy governed workflows. Scale with control.",
      ],
    },
    primaryCta: "Start Free Trial",
    secondaryCta: "Request Strategic Demo",
    finalHeadline: "Scale operations without scaling complexity.",
    finalSubtext: "Deploy governed workflows, escalation, and visibility — without expanding headcount.",
    price: "Contact us",
    priceNote: "for pricing",
  },
  "reputation-retention": {
    icon: Rocket,
    name: "Reputation & Retention",
    tagline: "Reputation & Retention",
    headline: "Reputation and Retention Infrastructure for Revenue Continuity",
    subtext: "APEX systemizes post-service follow-up into controlled flows — review requests, referral prompts, and reactivation sequences — so reputation and repeat revenue grow without manual dependency.",
    heroExtra: "Deploy quickly. Operate with control.",
    problemTitle: "The Hidden Revenue Leak",
    problems: [
      "Reviews are requested inconsistently or at the wrong moment",
      "Positive experiences are not captured into public proof",
      "Referrals rely on chance, not a defined process",
      "Past clients go silent because follow-up is manual and sporadic",
      "The business has no visibility into retention performance",
    ],
    afterTitle: "What Systemized Retention Looks Like",
    afterItems: [
      "Review requests triggered at the right moment with minimal friction",
      "Referral prompts routed to satisfied clients through a defined sequence",
      "Reactivation campaigns triggered by time and service history",
      "Responses routed and tracked with full context",
      "Management sees what is working and what is leaking",
    ],
    operationalScenario: {
      headline: "A Typical Revenue-Sensitive Post-Service Environment",
      intro: "Example: a clinic or service operator completes dozens of jobs weekly — but revenue ends early when there is no structured follow-up.",
      withoutTitle: "Without Systemized Retention:",
      withoutItems: [
        "Happy clients leave without a review prompt",
        "Referrals are never asked for at the right time",
        "Past clients are not re-engaged",
        "Reputation growth depends on random behavior",
      ],
      withTitle: "With APEX:",
      withItems: [
        "Review requests are triggered and tracked",
        "Referrals are prompted when satisfaction is high",
        "Reactivation sequences bring dormant clients back",
        "Retention becomes measurable and controllable",
      ],
      closing: "Reputation becomes operational — not accidental.",
    },
    saasClarity: {
      headline: "How It Works",
      steps: [
        "Define triggers (service completed, satisfaction signals, time windows)",
        "Choose flows (reviews, referrals, reactivation)",
        "Activate agents across channels (email, WhatsApp, website, etc.)",
        "Track activity and results with audit-friendly logging",
      ],
      closing: [
        "No infrastructure rebuild required.",
        "No custom development required.",
        "Deploy quickly.",
      ],
    },
    capabilitiesTitle: "Infrastructure Capabilities",
    capabilities: [
      { title: "Review Request Timing", description: "Prompts triggered when response likelihood is highest." },
      { title: "Frictionless Review Paths", description: "Direct, simple submission flows across devices and channels." },
      { title: "Referral Sequences", description: "Structured prompts that convert satisfied clients into referrals." },
      { title: "Reactivation Campaign Logic", description: "Bring past clients back based on time and service history." },
      { title: "Response Routing", description: "Route replies to the right team member with context." },
      { title: "Audit-Friendly Logging", description: "Timestamped traceability for every prompt, response, and outcome." },
    ],
    securityPosture: {
      title: "Security & Privacy Posture",
      intro: "APEX is designed with security-conscious handling of customer relationship data and operational traceability.",
      points: [
        "Access control and role-based visibility (where configured)",
        "Audit-friendly logging for prompts, responses, and follow-up actions",
        "Secure integration approach for connected channels and systems",
        "Retention and deletion controls (based on client configuration)",
      ],
    },
    architectureFlow: {
      input: "Completed Services, Client Signals, Engagement Activity",
      intelligence: "Master Bot — Timing + Triggers + Personalization",
      outcome: "Reviews + Referrals + Reactivated Revenue",
    },
    whoTitle: "Who This Is Designed For",
    whoItems: [],
    whoBlocks: [
      {
        title: "Aesthetic & Cosmetic Clinics",
        description: "Where reviews directly influence booking confidence and patient trust.",
      },
      {
        title: "Real Estate Agencies",
        description: "Converting successful deals into referrals through defined sequences.",
      },
      {
        title: "Automotive Dealerships",
        description: "Repeat service cycles where retention drives long-term profitability.",
      },
      {
        title: "Education & Training Providers",
        description: "Turning satisfied students into advocates through structured follow-up.",
      },
    ],
    whoClosing: "If trust drives revenue — retention must be systemized.",
    stabilitySection: {
      title: "Built for Operational Stability",
      intro: "APEX is not a marketing add-on.\nIt is reputation and retention infrastructure delivered as SaaS — designed to systemize follow-up discipline and protect long-term revenue continuity.",
      points: [],
    },
    positioningClose: {
      lines: [
        "Deploy systemized retention. Protect revenue continuity.",
      ],
    },
    primaryCta: "Start Free Trial",
    secondaryCta: "Request Strategic Demo",
    finalHeadline: "Protect revenue with systemized retention infrastructure.",
    finalSubtext: "Deploy review, referral, and reactivation flows — without increasing operational load.",
    price: "9,990 – 19,990 Ft",
    priceNote: "+ VAT / month",
  },
  "executive-intelligence": {
    icon: Users,
    name: "Executive Intelligence",
    tagline: "Executive Intelligence (Enterprise)",
    headline: "Your Digital Board for Operational Control",
    subtext: "Executive Intelligence turns APEX operational activity into leadership-grade visibility — consolidating communication, scheduling, workflow execution, and retention signals into one executive layer with alerts, patterns, and decision support.",
    heroExtra: "Enterprise tier. Enabled after operational modules are live.",
    problemTitle: "The Leadership Blind Spot",
    problems: [
      "Leadership decisions rely on delayed summaries and manual reporting",
      "No unified view across channels, scheduling, and internal execution",
      "Early warning signals are missed until conversion, quality, or throughput drops",
      "Performance variance across teams/locations remains hidden",
      "Accountability is difficult without traceable operational data",
    ],
    afterTitle: "What Executive Intelligence Changes",
    afterItems: [
      "One consolidated view across modules: communication, bookings, workflows, retention",
      "Real-time operational visibility with drill-down by team, location, channel, and stage",
      "Response and throughput monitoring tied to conversion and capacity",
      "Proactive alerts when performance deviates from defined operating thresholds",
      "Pattern detection that surfaces bottlenecks, leakage points, and operational risk",
    ],
    executiveClarity: {
      title: "The Digital Board",
      blocks: [
        { title: "Digital CEO (Direction)", description: "Sets weekly focus based on operational reality — priorities, attention allocation, and what must change first." },
        { title: "Digital COO (Execution Control)", description: "Surfaces bottlenecks, SLA breaches, and workflow drift — then recommends rule changes and escalation thresholds." },
        { title: "Digital CFO (Revenue Integrity)", description: "Connects operational activity to revenue continuity — leakage signals, capacity utilization, and performance variance." },
        { title: "Digital CMO (Pipeline Quality)", description: "Analyzes inquiry patterns and drop-off points — recommends script/follow-up adjustments and conversion discipline." },
        { title: "Quality & Compliance Oversight (Optional)", description: "Flags sensitive flows and ensures policy-aligned handling where governance and traceability matter." },
      ],
    },
    saasClarity: {
      headline: "How It Works",
      steps: [
        "Enable data capture across communication, scheduling, and workflows",
        "Define operating thresholds (SLA, booking throughput, follow-up discipline, etc.)",
        "Activate executive dashboards, alerts, and board-level oversight",
        "Review recommendations and apply changes through governed controls",
      ],
      closing: [
        "No manual reporting cycles.",
        "Oversight becomes continuous.",
      ],
    },
    capabilitiesTitle: "Business Impact",
    capabilities: [
      { title: "Executive Dashboards", description: "Leadership views built on live operational data — not manual summaries." },
      { title: "Proactive Alerting", description: "Signals triggered when thresholds are breached — before issues become losses." },
      { title: "Operational Pattern Detection", description: "Identifies recurring friction, leakage points, and performance variance across teams and locations." },
      { title: "Governed Recommendations", description: "Recommendations tied to observed data with traceability — enabling confident changes to rules and processes." },
    ],
    securityPosture: {
      title: "Security & Privacy Posture",
      intro: "Executive Intelligence is designed with security-conscious handling of operational data and traceability.",
      points: [
        "Role-based visibility and access controls (where configured)",
        "Audit-friendly logging for executive views, alerts, and governance actions",
        "Secure integration approach for connected channels and systems",
        "Retention and deletion controls (based on client configuration)",
      ],
    },
    architectureFlow: {
      input: "All Module Activity, Team Actions, Customer Signals",
      intelligence: "Executive Intelligence — Analytics + Alerts + Pattern Detection",
      outcome: "Executive Insights + Risk Signals + Governed Recommendations",
    },
    whoTitle: "Who This Is Designed For",
    whoItems: [],
    whoBlocks: [
      {
        title: "Multi-Location Operators",
        description: "Unified oversight across branches with drill-down into local performance.",
      },
      {
        title: "Leadership Teams (CEO/COO/CFO)",
        description: "Operational control without relying on delayed summaries or fragmented sources.",
      },
      {
        title: "High-Volume Service Organizations",
        description: "Where response discipline, booking throughput, and workflow execution determine revenue continuity.",
      },
      {
        title: "Governance-Sensitive Operations",
        description: "Where traceability, accountability, and controlled escalation reduce risk.",
      },
    ],
    whoClosing: "If operational variance impacts revenue — leadership needs live oversight.",
    stabilitySection: {
      title: "Enterprise Tier by Design",
      intro: "Executive Intelligence is not a dashboard add-on.\nIt is a governance layer — built to provide leadership-grade visibility, controlled alerting, and board-level decision support across the APEX operational stack.",
      points: [],
    },
    primaryCta: "Request Executive Demo",
    secondaryCta: "Talk to Sales",
    finalHeadline: "Lead with clarity. Govern with control.",
    finalSubtext: "Activate executive oversight across communication, scheduling, workflows, and retention — without manual reporting.",
    price: "Custom",
    priceNote: "pricing",
  },
};
