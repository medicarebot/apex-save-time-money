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
  capabilities: string[];
  whoTitle: string;
  whoItems: string[];
  primaryCta: string;
  secondaryCta: string;
  price: string;
  priceNote: string;
}

export const productData: Record<string, ProductInfo> = {
  chat: {
    icon: MessageSquare,
    name: "Customer Chat & Sales",
    tagline: "Structured communication across every channel",
    headline: "Never lose a qualified inquiry again.",
    subtext: "APEX structures, tracks, and manages customer communication across every channel — ensuring faster response times, higher conversion rates, and zero lost opportunities.",
    problemTitle: "The Operational Problem",
    problems: [
      "Inquiries scattered across channels",
      "Slow or inconsistent response times",
      "No structured tracking of conversations",
      "Sales lost due to delays",
    ],
    afterTitle: "After APEX Implementation",
    afterItems: [
      "All inquiries centralized",
      "Response times reduced to seconds",
      "Automatic qualification and routing",
      "Seamless human escalation",
    ],
    capabilitiesTitle: "Operational Capabilities",
    capabilities: [
      "Multi-channel structured intake",
      "Conversation memory across sessions",
      "Lead qualification logic",
      "Automated follow-up sequences",
      "CRM synchronization",
    ],
    whoTitle: "Who This Is For",
    whoItems: [
      "Private clinics managing patient inquiries",
      "Legal firms handling consultation requests",
      "Real estate agencies responding to property inquiries",
      "Any high-value service operation with multi-channel communication",
    ],
    primaryCta: "Deploy Structured Communication",
    secondaryCta: "Talk to Sales",
    price: "From 49,990 Ft",
    priceNote: "+ VAT / month",
  },
  scheduling: {
    icon: Calendar,
    name: "Smart Scheduling",
    tagline: "Automated booking without administrative overhead",
    headline: "Structured scheduling without administrative overload.",
    subtext: "APEX automates booking, confirmations, reminders, and calendar coordination — reducing no-shows and freeing administrative capacity.",
    problemTitle: "The Operational Problem",
    problems: [
      "Phone-based scheduling chaos",
      "Manual confirmations consuming staff time",
      "High no-show rates",
      "Staff tied to calendar coordination",
    ],
    afterTitle: "After APEX Implementation",
    afterItems: [
      "24/7 structured booking",
      "Automated reminders across channels",
      "Calendar synchronization",
      "Reduced no-shows through automation",
    ],
    capabilitiesTitle: "Operational Capabilities",
    capabilities: [
      "Multi-channel booking logic",
      "Availability management",
      "Automated confirmations",
      "Reminder automation",
      "Rescheduling workflows",
    ],
    whoTitle: "Who This Is For",
    whoItems: [
      "Medical centers with high appointment volume",
      "Aesthetic clinics managing consultations",
      "Automotive dealerships scheduling service appointments",
      "Any organization where booking coordination consumes operational capacity",
    ],
    primaryCta: "Automate Appointment Flow",
    secondaryCta: "Talk to Sales",
    price: "12,990 Ft",
    priceNote: "+ VAT / user / month",
  },
  operations: {
    icon: ClipboardCheck,
    name: "Operations & Tasks",
    tagline: "AI coordination for internal workflows",
    headline: "AI coordination for internal operational workflows.",
    subtext: "APEX reduces internal friction by structuring repetitive coordination tasks across teams.",
    problemTitle: "The Operational Problem",
    problems: [
      "Manual follow-ups consuming management time",
      "Task miscommunication between teams",
      "Operational bottlenecks in recurring processes",
      "Lack of visibility into task completion",
    ],
    afterTitle: "After APEX Implementation",
    afterItems: [
      "Automated task routing",
      "Workflow triggers based on events",
      "Reduced internal coordination overhead",
      "Clear audit trails for every action",
    ],
    capabilitiesTitle: "Operational Capabilities",
    capabilities: [
      "Internal task automation",
      "Escalation logic",
      "Cross-team coordination",
      "Trigger-based actions",
      "Completion tracking and reporting",
    ],
    whoTitle: "Who This Is For",
    whoItems: [
      "Legal firms managing case workflows",
      "Accounting firms coordinating client deliverables",
      "Medical centers with multi-department operations",
      "Any organization with recurring internal coordination tasks",
    ],
    primaryCta: "Automate Internal Workflows",
    secondaryCta: "Talk to Sales",
    price: "Contact us",
    priceNote: "for pricing",
  },
  growth: {
    icon: Rocket,
    name: "Growth Pack",
    tagline: "Systemized reputation and retention management",
    headline: "Systemized reputation and retention management.",
    subtext: "APEX structures review requests, referral flows, and re-engagement campaigns — without manual effort.",
    problemTitle: "The Operational Problem",
    problems: [
      "No structured review collection process",
      "Lost repeat business from lack of follow-up",
      "Inconsistent post-service engagement",
      "Manual referral tracking",
    ],
    afterTitle: "After APEX Implementation",
    afterItems: [
      "Automated review generation at optimal timing",
      "Structured referral sequences",
      "Client reactivation campaigns",
      "Measurable reputation growth",
    ],
    capabilitiesTitle: "Operational Capabilities",
    capabilities: [
      "Post-service automation",
      "Reputation flow automation",
      "Referral triggers",
      "Structured re-engagement sequences",
      "Performance tracking",
    ],
    whoTitle: "Who This Is For",
    whoItems: [
      "Aesthetic clinics building online reputation",
      "Real estate agencies leveraging client referrals",
      "Automotive dealerships managing service reviews",
      "Any high-value service operation investing in retention",
    ],
    primaryCta: "Activate Growth Automation",
    secondaryCta: "Talk to Sales",
    price: "9,990 – 19,990 Ft",
    priceNote: "+ VAT / month",
  },
  "digital-board": {
    icon: Users,
    name: "Digital Board",
    tagline: "Executive-level operational intelligence",
    headline: "Executive-level visibility powered by AI.",
    subtext: "APEX Digital Board provides operational intelligence across communication, scheduling, and workflow activity — enabling data-informed leadership decisions.",
    problemTitle: "The Leadership Problem",
    problems: [
      "No visibility into conversation volume and outcomes",
      "No performance insights across operations",
      "No operational pattern detection",
      "No real-time oversight of team activity",
    ],
    afterTitle: "After APEX Implementation",
    afterItems: [
      "Conversation analytics across all channels",
      "Conversion tracking and pipeline visibility",
      "Response time monitoring",
      "Operational inefficiency detection",
    ],
    capabilitiesTitle: "Operational Capabilities",
    capabilities: [
      "Executive dashboards",
      "Performance alerts",
      "Pattern detection",
      "AI-powered recommendations",
      "Cross-module reporting",
    ],
    whoTitle: "Who This Is For",
    whoItems: [
      "C-level leaders seeking operational visibility",
      "Multi-location organizations needing unified reporting",
      "Growing firms requiring data-informed decisions",
      "Enterprise teams managing complex service operations",
    ],
    primaryCta: "Request Executive Demo",
    secondaryCta: "Talk to Sales",
    price: "Custom",
    priceNote: "pricing",
  },
};
