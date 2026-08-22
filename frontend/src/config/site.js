// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — edit this file to rebrand the site.
// Name, tagline, links, chapters, metrics and reviews all live here.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Waleed Naeem",
  brand: "WALEED//AI",
  role: "AI Automation Engineer",
  tagline: "I build AI systems that sell, support and scale — while you sleep.",
  location: "Remote — Worldwide",
  availability: "Booking 2 slots for Q3",

  email: "waleednaeem090@gmail.com",

  socials: {
    linkedin: "https://www.linkedin.com/in/waleednaeem",
    github: "https://github.com/waleed-naeem",
    whatsapp: "https://wa.me/923253412675",
  },

  profileImage: "/profile.png",
  heroBackdrop:
    "https://images.unsplash.com/photo-1690127137880-1ad0871a83bd?auto=format&fit=crop&w=1800&q=60",

  marquee: [
    "AI AUTOMATION",
    "WORKFLOW DESIGN",
    "LLM INTEGRATION",
    "CHAT AGENTS",
    "LEAD PIPELINES",
    "PROCESS MINING",
    "RAG SYSTEMS",
    "ZAPIER / MAKE / N8N",
  ],

  chapters: [
    {
      id: "01",
      title: "The Problem",
      body: "Your team drowns in repetitive work — copy-pasting leads, answering the same questions, chasing invoices. Every hour spent on busywork is an hour not spent growing the business.",
    },
    {
      id: "02",
      title: "The Method",
      body: "I map your workflows end to end, then rebuild them with AI agents, LLM pipelines and battle-tested automation stacks. No bloated retainers. One engineer, full accountability, systems that ship in weeks.",
    },
    {
      id: "03",
      title: "The Outcome",
      body: "Businesses that run themselves. Leads qualified at 3am, support tickets resolved before breakfast, reports written while you're on holiday. You get your time back — the machines get the grind.",
    },
  ],

  metrics: [
    { value: 40, suffix: "+", label: "Hours saved per client, every week" },
    { value: 120, suffix: "+", label: "Automations shipped to production" },
    { value: 3, suffix: "x", label: "Average lead-response speed increase" },
    { value: 98, suffix: "%", label: "Client retention across engagements" },
  ],

  services: [
    {
      id: "01",
      icon: "Globe",
      title: "AI-Powered Websites",
      desc: "Sites that think. Built to convert and wired with AI that personalizes, answers and sells around the clock.",
    },
    {
      id: "02",
      icon: "Bot",
      title: "Custom AI Chatbots",
      desc: "Chatbots trained on your business data — answering customers on your site and WhatsApp like your best employee.",
    },
    {
      id: "03",
      icon: "Workflow",
      title: "AI Automation Systems",
      desc: "End-to-end workflows that move data, chase invoices and run ops — no copy-paste, no dropped balls.",
    },
    {
      id: "04",
      icon: "Headset",
      title: "AI Receptionist Solutions",
      desc: "A front desk that never sleeps — answers every call and message, books appointments, logs everything to your CRM.",
    },
    {
      id: "05",
      icon: "Mic",
      title: "AI Voice Agents",
      desc: "Natural-sounding phone agents for inbound and outbound calls — qualification, reminders and follow-ups at scale.",
    },
    {
      id: "06",
      icon: "Target",
      title: "Smart Lead Generation",
      desc: "Systems that find, enrich and qualify your ideal prospects, then start the conversation before competitors wake up.",
    },
  ],

  caseStudies: [
    {
      id: "01",
      client: "E-commerce Brand",
      title: "Support Inbox Autopilot",
      before:
        "Two support agents drowning in 300+ tickets a week. Average first response: 6 hours. Customers churning over unanswered refund requests.",
      after:
        "An AI agent triages, drafts and resolves 80% of tickets overnight — refunds, order tracking, FAQs — while humans only handle VIP escalations.",
      stat: "40s",
      statLabel: "average response time, down from 6 hours",
    },
    {
      id: "02",
      client: "Real Estate Agency",
      title: "24/7 Lead Qualification Machine",
      before:
        "Portals leads sat in spreadsheets for days. Agents followed up with 1 in 8 leads. Weekend enquiries were simply lost.",
      after:
        "Every lead gets an instant WhatsApp conversation — budget, location, timeline qualified automatically, hot leads booked straight into agents' calendars.",
      stat: "3.2x",
      statLabel: "more property viewings booked per month",
    },
    {
      id: "03",
      client: "Marketing Agency",
      title: "Self-Writing Client Reports",
      before:
        "Account managers spent 15 hours a week copy-pasting analytics into slide decks. Reports were late, inconsistent and hated by everyone.",
      after:
        "A pipeline pulls live data every Sunday night, writes plain-English summaries, and ships branded reports to clients before Monday coffee.",
      stat: "60h",
      statLabel: "saved every month across the team",
    },
  ],

  reviews: [
    {
      quote:
        "Waleed rebuilt our entire lead pipeline. What used to take two full-time hires now runs on autopilot — and converts better than the humans did.",
      name: "Sarah Linden",
      role: "COO, Northwind Logistics",
      avatar:
        "https://images.unsplash.com/photo-1762291629616-3e2c044c79a0?auto=format&fit=crop&w=200&q=60",
    },
    {
      quote:
        "The support agent he deployed handles 80% of our tickets overnight. Our response time went from 6 hours to 40 seconds. Genuinely absurd.",
      name: "Marcus Webb",
      role: "Founder, Forge & Field",
      avatar:
        "https://images.pexels.com/photos/33290996/pexels-photo-33290996.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      quote:
        "One person, three weeks, and our reporting stack was fully automated. Best money we spent all year — I've already referred him twice.",
      name: "Priya Nair",
      role: "Head of Ops, Lumen Retail",
      avatar:
        "https://images.unsplash.com/photo-1762291629616-3e2c044c79a0?auto=format&fit=crop&w=200&q=60",
    },
  ],
};

export const scrollToSection = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72 });
  else el.scrollIntoView({ behavior: "smooth" });
};
