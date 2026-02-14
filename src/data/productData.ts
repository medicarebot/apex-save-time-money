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
    tagline: "Automated scheduling that protects revenue",
    headline: "Never miss a booking opportunity again.",
    subtext: "APEX automates booking, confirmations, reminders, and calendar coordination — reducing no-shows, eliminating administrative overhead, and capturing revenue around the clock.",
    problemTitle: "The Operational Risk",
    problems: [
      "Phone-based scheduling creating bottlenecks during peak hours",
      "Manual confirmations consuming staff capacity that should drive revenue",
      "High no-show rates directly impacting operational throughput",
      "Booking opportunities lost outside business hours",
    ],
    afterTitle: "After APEX Implementation",
    afterItems: [
      "24/7 structured booking across all client-facing channels",
      "Automated reminders reducing no-shows systematically",
      "Calendar synchronization eliminating double-bookings",
      "Administrative capacity freed for higher-value activities",
    ],
    capabilitiesTitle: "Business Impact",
    capabilities: [
      { title: "Revenue Continuity", description: "Booking operates around the clock — clients schedule through their preferred channel with unified availability management." },
      { title: "No-Show Reduction", description: "Structured reminder sequences reduce missed appointments systematically, protecting operational throughput." },
      { title: "Calendar Intelligence", description: "Real-time synchronization prevents conflicts and maximizes resource utilization across locations." },
      { title: "Administrative Liberation", description: "Self-service rescheduling and automated confirmations free staff for higher-value client engagement." },
    ],
    architectureFlow: {
      input: "Booking Requests, Calendar Events, Client Messages",
      intelligence: "Master Bot — Availability + Confirmation + Reminders",
      outcome: "Confirmed Booking + Reduced No-Shows + Revenue Protected",
    },
    whoTitle: "Built for revenue-sensitive operations",
    whoItems: [
      "Medical centers with high appointment volume and costly no-shows",
      "Aesthetic clinics managing consultation and procedure scheduling",
      "Automotive dealerships scheduling service and sales appointments",
      "Any organization where scheduling gaps directly impact revenue",
    ],
    whoBlocks: [
      {
        title: "Medical Centers & Clinics",
        description: "High appointment volume with costly no-shows requiring automated reminders, confirmations, and multi-channel booking access.",
      },
      {
        title: "Aesthetic & Cosmetic Practices",
        description: "Managing consultation and procedure scheduling where calendar coordination directly impacts procedure revenue.",
      },
      {
        title: "Automotive Dealerships",
        description: "Scheduling service appointments and sales consultations across departments with centralized availability management.",
      },
      {
        title: "Professional Service Firms",
        description: "Coordinating client meetings, consultations, and follow-ups where booking gaps directly translate to lost revenue.",
      },
    ],
    primaryCta: "Start Free Trial",
    secondaryCta: "Request Demo",
    finalHeadline: "Protect revenue with structured scheduling infrastructure.",
    price: "12,990 Ft",
    priceNote: "+ VAT / user / month",
  },
  "operational-automation": {
    icon: ClipboardCheck,
    name: "Operational Automation",
    tagline: "AI coordination for internal workflows",
    headline: "Remove operational friction from your workflows.",
    subtext: "APEX structures repetitive coordination tasks, automates routing, and provides clear audit trails — reducing internal overhead and increasing operational throughput.",
    problemTitle: "The Operational Risk",
    problems: [
      "Manual follow-ups consuming management capacity across teams",
      "Task miscommunication creating delays and quality issues",
      "Operational bottlenecks in recurring processes remaining invisible",
      "Lack of visibility into task completion and team performance",
    ],
    afterTitle: "After APEX Implementation",
    afterItems: [
      "Automated task routing based on role, availability, and priority",
      "Workflow triggers that execute without manual intervention",
      "Reduced internal coordination overhead across departments",
      "Clear audit trails providing accountability at every step",
    ],
    capabilitiesTitle: "Business Impact",
    capabilities: [
      { title: "Workflow Automation", description: "Repetitive coordination eliminated through structured workflows that execute based on triggers, not manual initiation." },
      { title: "Intelligent Escalation", description: "Issues routed to the right person at the right time — automatically, with full context and documented history." },
      { title: "Cross-Team Coordination", description: "Departmental handoffs structured and tracked end-to-end, eliminating communication gaps between teams." },
      { title: "Performance Visibility", description: "Full visibility into task status, bottlenecks, and team throughput with data-driven optimization insights." },
    ],
    architectureFlow: {
      input: "Tasks, Events, Team Actions",
      intelligence: "Master Bot — Routing + Triggers + Escalation",
      outcome: "Completed Tasks + Audit Trail + Performance Data",
    },
    whoTitle: "Designed for high-volume service operations",
    whoItems: [
      "Legal firms managing complex case workflows across teams",
      "Accounting firms coordinating client deliverables and deadlines",
      "Medical centers with multi-department operational coordination",
      "Multi-location businesses requiring structured oversight across sites",
    ],
    whoBlocks: [
      {
        title: "Legal & Law Firms",
        description: "Managing complex case workflows across teams where task miscommunication creates costly delays and compliance risks.",
      },
      {
        title: "Accounting & Tax Firms",
        description: "Coordinating client deliverables and deadlines across multiple team members with structured handoff requirements.",
      },
      {
        title: "Medical Centers",
        description: "Multi-department operational coordination where internal process visibility directly impacts patient experience and compliance.",
      },
      {
        title: "Multi-Location Operations",
        description: "Requiring structured oversight across sites without losing operational granularity or local team accountability.",
      },
    ],
    primaryCta: "Start Free Trial",
    secondaryCta: "Request Demo",
    finalHeadline: "Scale operations without scaling complexity.",
    price: "Contact us",
    priceNote: "for pricing",
  },
  "reputation-retention": {
    icon: Rocket,
    name: "Reputation & Retention",
    tagline: "Systemized reputation and retention management",
    headline: "Turn satisfied customers into repeat revenue.",
    subtext: "APEX structures review collection, referral flows, and re-engagement campaigns — transforming one-time clients into long-term relationships without manual effort.",
    problemTitle: "The Operational Risk",
    problems: [
      "No structured process for capturing reviews at optimal timing",
      "Repeat revenue lost due to inconsistent post-service follow-up",
      "Referral potential untapped because no systematic program exists",
      "Client reactivation dependent on manual, inconsistent outreach",
    ],
    afterTitle: "After APEX Implementation",
    afterItems: [
      "Automated review generation timed for maximum response rates",
      "Structured referral sequences incentivizing organic growth",
      "Client reactivation campaigns triggered by engagement patterns",
      "Measurable reputation growth with clear attribution",
    ],
    capabilitiesTitle: "Business Impact",
    capabilities: [
      { title: "Reputation Automation", description: "Reviews requested at optimal moments with frictionless submission paths — building credibility without manual effort." },
      { title: "Referral Intelligence", description: "Satisfied clients guided into referral programs automatically, turning every positive experience into growth potential." },
      { title: "Client Reactivation", description: "Dormant relationships reactivated through intelligent campaign logic based on engagement patterns and service history." },
      { title: "Revenue Attribution", description: "Direct connection between retention activities and measurable revenue impact — proving ROI on every engagement." },
    ],
    architectureFlow: {
      input: "Completed Services, Client Feedback, Engagement Data",
      intelligence: "Master Bot — Timing + Triggers + Personalization",
      outcome: "Reviews + Referrals + Reactivated Revenue",
    },
    whoTitle: "Built for revenue-sensitive businesses",
    whoItems: [
      "Aesthetic clinics building and protecting online reputation",
      "Real estate agencies leveraging client relationships for referrals",
      "Automotive dealerships managing service reviews and repeat business",
      "Any high-value service operation investing in long-term client retention",
    ],
    whoBlocks: [
      {
        title: "Aesthetic & Cosmetic Clinics",
        description: "Building and protecting online reputation where reviews directly influence procedure bookings and patient trust.",
      },
      {
        title: "Real Estate Agencies",
        description: "Leveraging successful transactions into referral programs that generate qualified leads from satisfied clients.",
      },
      {
        title: "Automotive Dealerships",
        description: "Managing service reviews and repeat business cycles where customer retention drives long-term dealership profitability.",
      },
      {
        title: "Education & Training Providers",
        description: "Converting satisfied students into advocates through structured referral and review programs that build enrollment pipelines.",
      },
    ],
    primaryCta: "Start Free Trial",
    secondaryCta: "Request Demo",
    finalHeadline: "Systemize growth without increasing operational load.",
    price: "9,990 – 19,990 Ft",
    priceNote: "+ VAT / month",
  },
  "executive-intelligence": {
    icon: Users,
    name: "Executive Intelligence",
    tagline: "Real-time operational visibility for leadership",
    headline: "Real-time visibility for leadership decisions.",
    subtext: "APEX Executive Intelligence provides operational analytics across communication, scheduling, and workflow activity — enabling data-informed leadership decisions without manual reporting.",
    problemTitle: "The Leadership Risk",
    problems: [
      "No visibility into conversation volume, response times, or outcomes",
      "Performance insights dependent on manual reporting and delayed data",
      "Operational patterns and inefficiencies remaining undetected",
      "No real-time oversight of team activity or customer experience quality",
    ],
    afterTitle: "After APEX Implementation",
    afterItems: [
      "Conversation analytics across all channels in real-time",
      "Conversion tracking with full pipeline visibility",
      "Response time monitoring with performance benchmarks",
      "Operational inefficiency detection with AI-powered recommendations",
    ],
    capabilitiesTitle: "Business Impact",
    capabilities: [
      { title: "Executive Dashboards", description: "Leadership-level views consolidating operational performance across all modules into actionable intelligence." },
      { title: "Proactive Alerting", description: "Notifications triggered when metrics deviate from operational benchmarks — before issues escalate." },
      { title: "Pattern Detection", description: "AI-driven identification of operational trends, risks, and opportunities across your entire operation." },
      { title: "Strategic Recommendations", description: "Data-driven suggestions based on cross-module analysis, enabling confident resource allocation and growth planning." },
    ],
    architectureFlow: {
      input: "All Module Data, Team Activity, Client Interactions",
      intelligence: "Master Bot — Analytics + Pattern Detection + AI",
      outcome: "Executive Insights + Alerts + Strategic Recommendations",
    },
    whoTitle: "Designed for operational leadership",
    whoItems: [
      "C-level leaders seeking operational visibility without manual reporting",
      "Multi-location organizations needing unified performance oversight",
      "Growing firms requiring data-informed strategic decisions",
      "Enterprise teams managing complex service operations at scale",
    ],
    whoBlocks: [
      {
        title: "C-Level & Operations Leadership",
        description: "Seeking real-time operational visibility without relying on manual reporting cycles or fragmented data sources.",
      },
      {
        title: "Multi-Location Organizations",
        description: "Needing unified performance oversight across branches with the ability to drill down into location-specific metrics.",
      },
      {
        title: "Growing Service Firms",
        description: "Requiring data-informed strategic decisions as complexity increases with scaling client volume and team size.",
      },
      {
        title: "Enterprise Operations Teams",
        description: "Managing complex service operations at scale where pattern detection and proactive alerting prevent costly inefficiencies.",
      },
    ],
    primaryCta: "Request Executive Demo",
    secondaryCta: "Talk to Sales",
    finalHeadline: "Lead with clarity. Decide with confidence.",
    price: "Custom",
    priceNote: "pricing",
  },
};
