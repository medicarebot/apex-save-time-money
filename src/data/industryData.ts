export interface IndustryWorkflow {
  title: string;
  steps: string;
}

export interface IndustryData {
  slug: string;
  eyebrow: string;
  headline: string;
  operationalLeak: string[];
  structured: string[];
  workflows: IndustryWorkflow[];
  teamGets: string[];
  kpis: string[];
  footerNote: string;
}

const globalSubheadline =
  "APEX AI agents handle responses and follow-ups within seconds, qualify intent, and route inquiries — across your website, WhatsApp, Instagram, and email — with structured handover and full context for your team.";

const goLiveSteps = [
  "Connect your channels",
  "Define intake and routing rules",
  "Train your knowledge base (website + FAQs)",
  "Test, deploy, and monitor",
];

export { globalSubheadline, goLiveSteps };

export const industries: IndustryData[] = [
  {
    slug: "private-clinics",
    eyebrow: "Private Clinics & Medical Centers",
    headline: "Protect bookings with structured patient intake and routing.",
    operationalLeak: [
      "Patient inquiries arrive across channels with no unified ownership",
      "Response times vary by shift and staff workload",
      "Booking back-and-forth consumes front desk capacity",
      "Sensitive questions require escalation, but context gets lost",
      "No clear visibility into missed inquiries and drop-offs",
    ],
    structured: [
      "Every inquiry is captured, timestamped, and categorized",
      "Qualification collects key details (service, urgency, preferred time, contact)",
      "Routing sends the inquiry to the correct location, department, or provider",
      "Handover includes full context and history",
      "Follow-ups run automatically until resolved or closed",
    ],
    workflows: [
      {
        title: "New patient inquiry → consultation booking",
        steps: "Capture inquiry → qualify service + urgency + preferred time → route → propose next step → confirm + reminder (optional)",
      },
      {
        title: "Sensitive question → safe escalation",
        steps: "Detect sensitive intent → provide a safe response → escalate to staff with full history",
      },
      {
        title: "Abandoned booking → follow-up",
        steps: "Inquiry started → no booking → follow-up sequence → route replies → update status",
      },
    ],
    teamGets: [
      "Structured handover summary (intent, details collected, channel, timestamps)",
      "Routing rules by location, department, provider, and priority",
      "Customer record created/updated in APEX CRM (external CRM optional)",
      "Audit-friendly logs of messages, handovers, and actions",
    ],
    kpis: [
      "Median response time by channel",
      "Inquiry-to-booking conversion",
      "No-show rate (with reminders on/off)",
      "Handover rate and resolution time",
      "Unanswered inquiries beyond SLA",
    ],
    footerNote:
      "APEX supports your team and does not provide medical advice. For urgent or medical decisions, consult qualified staff.",
  },
  {
    slug: "aesthetic-clinics",
    eyebrow: "Aesthetic & Cosmetic Clinics",
    headline: "Convert more high-intent inquiries with fast, consistent responses.",
    operationalLeak: [
      "High-intent DMs arrive after hours and go cold",
      "Pricing questions aren't handled consistently",
      "Staff lose time qualifying low-intent inquiries",
      "Expectations and policies require careful, consistent language",
      "Follow-ups depend on memory, not process",
    ],
    structured: [
      "Instant replies with qualification (treatment, timeline, availability, contact)",
      "Routing to the right coordinator or provider",
      "Automated follow-ups when a lead doesn't book",
      "Consistent policy-aligned answers across channels",
      "Handover includes everything already collected",
    ],
    workflows: [
      {
        title: "Instagram DM → consultation booked",
        steps: "Qualify treatment + concerns + availability → propose next step → confirm + reminders",
      },
      {
        title: "Price inquiry → qualified lead",
        steps: "Provide configured guidance → collect readiness details → route to coordinator",
      },
      {
        title: "Post-consult follow-up → next step",
        steps: "Follow-up cadence → route replies → log outcome",
      },
    ],
    teamGets: [
      "Clean lead summary at handover (what they want + readiness)",
      "Routing by treatment type, location, and availability",
      "APEX CRM record with full conversation history",
      "Audit-friendly logging and accountability",
    ],
    kpis: [
      "DM-to-consult conversion",
      "Time to first response",
      "Qualified leads per week",
      "Follow-up completion rate",
      "Handover-to-close cycle time",
    ],
    footerNote:
      "APEX supports your team and does not replace professional judgment.",
  },
  {
    slug: "real-estate",
    eyebrow: "Real Estate Agencies",
    headline: "Stop losing leads to slow replies and untracked follow-ups.",
    operationalLeak: [
      "Leads arrive from multiple sources with unclear ownership",
      "Response delays kill viewings",
      "Qualification is inconsistent (budget, location, timeframe)",
      "Follow-ups fall through under volume",
      "No single view of lead status and outcomes",
    ],
    structured: [
      "Every inquiry captured, categorized, and assigned",
      "Qualification collects key buying/renting requirements",
      "Routing to the right agent or team based on rules",
      "Follow-ups run automatically until resolved",
      "Handover includes full context and history",
    ],
    workflows: [
      {
        title: "New listing inquiry → viewing scheduled",
        steps: "Qualify requirements → route to agent → propose viewing times → confirm",
      },
      {
        title: "Rental inquiry → pre-qualification",
        steps: "Collect criteria → route → follow-up for missing info",
      },
      {
        title: "No response → automated follow-up",
        steps: "Lead idle → follow-up sequence → route replies → update status",
      },
    ],
    teamGets: [
      "Lead summary with requirements and next-best action",
      "Routing by location, property type, and priority",
      "Central record in APEX CRM with history",
      "Audit-friendly logs for accountability",
    ],
    kpis: [
      "Lead-to-viewing rate",
      "Time to first response",
      "% qualified vs. unqualified leads",
      "Follow-up SLA compliance",
      "Agent response variance (by person/team)",
    ],
    footerNote:
      "APEX supports your team and does not replace professional judgment.",
  },
  {
    slug: "legal",
    eyebrow: "Legal & Law Firms",
    headline: "Structured consultation intake with controlled escalation.",
    operationalLeak: [
      "Sensitive inquiries require care, but responses vary",
      "Intake details are incomplete, wasting consultation time",
      "Scope and urgency aren't captured consistently",
      "Follow-ups are manual and slow",
      "Limited traceability across channels",
    ],
    structured: [
      "Controlled first responses with clear boundaries",
      "Qualification captures matter type, urgency, jurisdiction, and contact",
      "Routing to the correct intake owner or practice area",
      "Structured handover with full conversation history",
      "Follow-ups to collect missing details before consultation",
    ],
    workflows: [
      {
        title: "New inquiry → consultation intake",
        steps: "Collect basics → route to intake owner → next-step booking (optional)",
      },
      {
        title: "Sensitive message → controlled handover",
        steps: "Detect high-risk language → safe response → escalate with full context",
      },
      {
        title: "Document request → tracked completion",
        steps: "Send checklist → reminders → route replies → mark complete",
      },
    ],
    teamGets: [
      "Intake summary and completeness indicators",
      "Routing rules by practice area and priority",
      "Central log of inquiries, handovers, and outcomes",
      "APEX CRM record (external CRM optional)",
    ],
    kpis: [
      "Inquiry-to-consultation rate",
      "Intake completeness rate",
      "Time to first response",
      "Handover resolution time",
      "Unanswered inquiries beyond SLA",
    ],
    footerNote:
      "APEX supports your team and does not provide legal advice. Always apply internal policies and professional judgment.",
  },
  {
    slug: "accounting",
    eyebrow: "Accounting & Tax Firms",
    headline: "Reduce back-and-forth and keep deadlines from slipping.",
    operationalLeak: [
      "Clients ask repeated questions across channels",
      "Document collection is slow and manual",
      "Deadline season overwhelms staff",
      "Ownership of requests is unclear",
      "Follow-ups happen late",
    ],
    structured: [
      "Fast replies + qualification of request type and urgency",
      "Routing to the right specialist or team",
      "Document checklists and reminders",
      "Consistent follow-up until completion",
      "Central visibility across all channels",
    ],
    workflows: [
      {
        title: "New client inquiry → qualification + next step",
        steps: "Collect company type + needs + timeline → route to specialist",
      },
      {
        title: "Document collection → automated chase",
        steps: "Send checklist → reminders → route replies → mark complete",
      },
      {
        title: "Ongoing client request → structured ticket",
        steps: "Categorize → route → track completion",
      },
    ],
    teamGets: [
      "Request summary and status at handover",
      "Routing rules by service line and priority",
      "APEX CRM record + audit-friendly logs",
      "Clear ownership and accountability",
    ],
    kpis: [
      "Time to first response",
      "Document completion time",
      "Request backlog by owner",
      "SLA adherence",
      "Repeat-question deflection rate (knowledge impact)",
    ],
    footerNote:
      "APEX supports your team and does not replace professional judgment.",
  },
  {
    slug: "automotive",
    eyebrow: "Automotive Dealerships",
    headline: "Capture sales and service inquiries without missed messages.",
    operationalLeak: [
      "Sales and service inquiries mix together",
      "After-hours inquiries go unanswered",
      "Follow-ups are inconsistent under volume",
      "Scheduling coordination consumes staff time",
      "No unified log of outcomes",
    ],
    structured: [
      "Instant replies and qualification (sales vs. service)",
      "Routing to the right team or advisor",
      "Follow-ups and reminders keep momentum",
      "Structured handover with full context",
      "Central tracking of inquiry status",
    ],
    workflows: [
      {
        title: "Sales inquiry → qualification + routing",
        steps: "Collect model interest + budget + timeframe → route to sales",
      },
      {
        title: "Service booking → confirm + remind",
        steps: "Collect service type + preferred time → next step + reminders (optional)",
      },
      {
        title: "No response → follow-up cadence",
        steps: "Inquiry idle → follow-ups → route replies → status update",
      },
    ],
    teamGets: [
      "Clear split between sales and service inquiries",
      "Routing by department, location, and priority",
      "APEX CRM record and audit-friendly logs",
      "Structured handover that reduces re-asking questions",
    ],
    kpis: [
      "Inquiry-to-appointment rate (sales/service)",
      "Time to first response",
      "Follow-up completion rate",
      "Booking throughput",
      "Cancellation/no-show rate (with reminders on/off)",
    ],
    footerNote:
      "APEX supports your team and does not replace professional judgment.",
  },
  {
    slug: "education",
    eyebrow: "Private Education & Training",
    headline: "Convert inquiries into bookings with consistent follow-up.",
    operationalLeak: [
      "High inquiry volume during campaigns",
      "Qualification is inconsistent (level, schedule, fit)",
      "Follow-ups drop off",
      "Admin time is consumed by repetitive questions",
      "No clean view of pipeline stage",
    ],
    structured: [
      "Fast replies and qualification by program and availability",
      "Routing to admissions or the right coordinator",
      "Automated follow-ups until booking or closure",
      "Structured handover with full context",
      "Central visibility into inquiry stages",
    ],
    workflows: [
      {
        title: "Course inquiry → qualification + next step",
        steps: "Collect interest + schedule + start date → route → book intro call (optional)",
      },
      {
        title: "Trial lesson booking → reminders",
        steps: "Confirm → reminders → reschedule flow (optional)",
      },
      {
        title: "Application not completed → follow-up",
        steps: "Abandoned inquiry → sequence → route replies → update status",
      },
    ],
    teamGets: [
      "Applicant/lead summary at handover",
      "Routing rules by program and location",
      "APEX CRM record with full history",
      "Audit-friendly logs for accountability",
    ],
    kpis: [
      "Inquiry-to-enrollment conversion",
      "Time to first response",
      "Follow-up completion rate",
      "Booking rate for intro calls",
      "Drop-off reasons by stage",
    ],
    footerNote:
      "APEX supports your team and does not replace professional judgment.",
  },
];
