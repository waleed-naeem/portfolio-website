import { motion } from "framer-motion";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { site, scrollToSection } from "@/config/site";

const includes = [
  "A 30-minute video call — zero sales pitch, all substance",
  "A map of the 3 workflows costing you the most hours",
  "A written automation plan with realistic ROI estimates",
];

export default function Consultation() {
  const waHref = `${site.socials.whatsapp}?text=${encodeURIComponent(
    "Hi Waleed, I'd like to book my free automation audit."
  )}`;

  return (
    <section id="consultation" className="relative overflow-hidden border-t border-zinc-800" data-testid="consultation-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsl(75_100%_50%/0.08),transparent_60%)] pointer-events-none" />
      <div className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4"
          >
            Free Consultation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display font-black tracking-tighter leading-[0.95] text-4xl sm:text-5xl lg:text-6xl text-zinc-100"
            data-testid="consultation-heading"
          >
            FREE 30-MIN<br />
            <span className="text-primary">AUTOMATION AUDIT.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 max-w-lg font-mono text-sm sm:text-base leading-relaxed text-zinc-400"
          >
            Not sure where AI fits in your business? Book a free call. I'll show you exactly
            which workflows to automate first — and what it would save you.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <ul className="space-y-4 mb-10">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-mono text-sm text-zinc-300" data-testid={`consultation-include-${i}`}>
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm font-bold tracking-wider uppercase px-8 py-4 hover:scale-105 transition-transform duration-300"
              data-testid="consultation-book-button"
            >
              Claim Your Free Call
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-zinc-700 font-mono text-sm font-bold tracking-wider uppercase px-8 py-4 text-zinc-300 hover:border-primary hover:text-primary hover:-translate-y-1 transition-[transform,color,border-color] duration-300"
              data-testid="consultation-whatsapp-button"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Instead
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
