import { Calendar, MessageSquare, ClipboardCheck, Rocket, Users } from "lucide-react";

export interface ProductInfo {
  icon: typeof Calendar;
  name: string;
  tagline: string;
  headline: string;
  subtext: string;
  problemTitle: string;
  problems: string[];
  afterTitle: string;
  afterItems: string[];
  capabilitiesTitle: string;
  capabilities: { title: string; description: string }[];
  whoTitle: string;
  whoItems: string[];
  architectureFlow: { input: string; intelligence: string; outcome: string };
  primaryCta: string;
  secondaryCta: string;
  finalHeadline: string;
  price: string;
  priceNote: string;
}

export const productData: Record<string, ProductInfo> = {
  "communication-infrastructure": {
    icon: MessageSquare,
    name: "Communication Infrastructure",
    tagline: "Structured communication across every channel",
    headline: "Structured communication across every channel.",
    subtext: "APEX centralizes, qualifies, and routes every customer interaction — across website, WhatsApp, Instagram, and email — ensuring no inquiry is lost and every response is operationally structured.",
    problemTitle: "The Operational Risk",
    problems: [
      "Revenue leakage from untracked inquiries across fragmented channels",
      "Inconsistent response times eroding client trust and conversion rates",
      "No structured tracking or memory across customer conversations",
      "Qualified leads lost due to delayed or missing follow-up",
    ],
    afterTitle: "After APEX Implementation",
    afterItems: [
      "Centralized communication across all channels with full context",
      "Automated qualification and intelligent routing within seconds",
      "Structured follow-up sequences that run without manual effort",
      "Seamless human handover with complete conversation history",
    ],
    capabilitiesTitle: "Business Impact",
    capabilities: [
      { title: "Multi-channel structured intake", description: "Every interaction logged and structured for long-term relationship visibility." },
      { title: "Conversation memory", description: "Full context continuity across sessions, channels, and team members." },
      { title: "Lead qualification logic", description: "AI-driven scoring and routing based on intent, urgency, and value." },
      { title: "Automated follow-up", description: "No lead forgotten. Follow-up logic runs without manual effort." },
      { title: "CRM synchronization", description: "Every touchpoint flows into your existing systems automatically." },
      { title: "Human escalation", description: "Intelligent handover with full context when human judgment is needed." },
    ],
    architectureFlow: {
      input: "Website, WhatsApp, Instagram, Email",
      intelligence: "Master Bot — Memory + Routing + Context",
      outcome: "Qualified Lead + Structured Follow-up + Escalation",
    },
    whoTitle: "Who This Is For",
    whoItems: [
      "Private clinics managing patient inquiry volume across multiple channels",
      "Legal firms handling high-value consultation requests",
      "Real estate agencies responding to multi-channel property inquiries",
      "High-value service operators where response speed directly impacts revenue",
      "Multi-location businesses needing structured communication oversight",
    ],
    primaryCta: "Start Free Trial",
    secondaryCta: "Request Demo",
    finalHeadline: "Build operational capacity without expanding headcount.",
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
      { title: "Multi-channel booking logic", description: "Clients book through their preferred channel — website, WhatsApp, or chat — with unified availability." },
      { title: "Intelligent availability management", description: "Real-time calendar sync preventing conflicts and maximizing utilization." },
      { title: "Automated confirmations", description: "Instant booking confirmation across channels without staff involvement." },
      { title: "Reminder automation", description: "Structured reminder sequences reducing no-show rates systematically." },
      { title: "Rescheduling workflows", description: "Self-service rescheduling that fills cancellations automatically." },
      { title: "Revenue analytics", description: "Visibility into booking patterns, conversion rates, and capacity utilization." },
    ],
    architectureFlow: {
      input: "Booking Requests, Calendar Events, Client Messages",
      intelligence: "Master Bot — Availability + Confirmation + Reminders",
      outcome: "Confirmed Booking + Reduced No-Shows + Revenue Protected",
    },
    whoTitle: "Who This Is For",
    whoItems: [
      "Medical centers with high appointment volume and costly no-shows",
      "Aesthetic clinics managing consultation and procedure scheduling",
      "Automotive dealerships scheduling service and sales appointments",
      "Any organization where scheduling gaps directly impact revenue",
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
      { title: "Internal task automation", description: "Repetitive coordination eliminated through structured workflows." },
      { title: "Escalation logic", description: "Issues routed to the right person at the right time, automatically." },
      { title: "Cross-team coordination", description: "Departmental handoffs structured and tracked end-to-end." },
      { title: "Trigger-based actions", description: "Events trigger workflows without waiting for human initiation." },
      { title: "Completion tracking", description: "Full visibility into task status, bottlenecks, and team throughput." },
      { title: "Process optimization", description: "Data-driven insights revealing workflow inefficiencies over time." },
    ],
    architectureFlow: {
      input: "Tasks, Events, Team Actions",
      intelligence: "Master Bot — Routing + Triggers + Escalation",
      outcome: "Completed Tasks + Audit Trail + Performance Data",
    },
    whoTitle: "Who This Is For",
    whoItems: [
      "Legal firms managing complex case workflows across teams",
      "Accounting firms coordinating client deliverables and deadlines",
      "Medical centers with multi-department operational coordination",
      "Multi-location businesses requiring structured oversight across sites",
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
      { title: "Post-service automation", description: "Every completed engagement triggers structured follow-up automatically." },
      { title: "Reputation flow automation", description: "Reviews requested at optimal moments with frictionless submission paths." },
      { title: "Referral triggers", description: "Satisfied clients guided into referral programs without manual outreach." },
      { title: "Structured re-engagement", description: "Dormant relationships reactivated through intelligent campaign logic." },
      { title: "Performance tracking", description: "Clear visibility into reputation metrics, referral conversion, and retention rates." },
      { title: "Revenue attribution", description: "Direct connection between retention activities and measurable revenue impact." },
    ],
    architectureFlow: {
      input: "Completed Services, Client Feedback, Engagement Data",
      intelligence: "Master Bot — Timing + Triggers + Personalization",
      outcome: "Reviews + Referrals + Reactivated Revenue",
    },
    whoTitle: "Who This Is For",
    whoItems: [
      "Aesthetic clinics building and protecting online reputation",
      "Real estate agencies leveraging client relationships for referrals",
      "Automotive dealerships managing service reviews and repeat business",
      "Any high-value service operation investing in long-term client retention",
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
      { title: "Executive dashboards", description: "Leadership-level views consolidating operational performance across all modules." },
      { title: "Performance alerts", description: "Proactive notifications when metrics deviate from operational benchmarks." },
      { title: "Pattern detection", description: "AI-driven identification of operational trends, risks, and opportunities." },
      { title: "AI-powered recommendations", description: "Strategic suggestions based on cross-module data analysis." },
      { title: "Cross-module reporting", description: "Unified reporting connecting communication, booking, and operational data." },
      { title: "Capacity planning", description: "Data-driven insights for resource allocation and growth planning." },
    ],
    architectureFlow: {
      input: "All Module Data, Team Activity, Client Interactions",
      intelligence: "Master Bot — Analytics + Pattern Detection + AI",
      outcome: "Executive Insights + Alerts + Strategic Recommendations",
    },
    whoTitle: "Who This Is For",
    whoItems: [
      "C-level leaders seeking operational visibility without manual reporting",
      "Multi-location organizations needing unified performance oversight",
      "Growing firms requiring data-informed strategic decisions",
      "Enterprise teams managing complex service operations at scale",
    ],
    primaryCta: "Request Executive Demo",
    secondaryCta: "Talk to Sales",
    finalHeadline: "Lead with clarity. Decide with confidence.",
    price: "Custom",
    priceNote: "pricing",
  },
};
