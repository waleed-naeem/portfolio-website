import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";

export default function CaseStudies() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 border-t border-zinc-800" data-testid="case-studies-section">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4"
      >
        Case Studies
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 mb-20 md:mb-28"
        data-testid="case-studies-heading"
      >
        BEFORE <span className="text-primary">&</span> AFTER.
      </motion.h2>

      <div className="space-y-px bg-zinc-800 border border-zinc-800">
        {site.caseStudies.map((cs, i) => (
          <motion.article
            key={cs.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            className="bg-background grid grid-cols-1 lg:grid-cols-12 gap-0 group"
            data-testid={`case-study-${cs.id}`}
          >
            <div className="lg:col-span-3 p-8 md:p-12 lg:border-r border-zinc-800">
              <span className="font-display text-outline font-black text-5xl md:text-6xl leading-none block mb-6">
                {cs.id}
              </span>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">{cs.client}</p>
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-zinc-100 group-hover:text-primary transition-colors duration-300">
                {cs.title}
              </h3>
            </div>

            <div className="lg:col-span-6 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:border-r border-zinc-800">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-600 mb-4">Before</p>
                <p className="font-mono text-sm leading-relaxed text-zinc-500">{cs.before}</p>
              </div>
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4 flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5" />
                  After
                </p>
                <p className="font-mono text-sm leading-relaxed text-zinc-300">{cs.after}</p>
              </div>
            </div>

            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <span className="font-display font-black text-5xl md:text-6xl text-primary tracking-tighter" data-testid={`case-study-stat-${cs.id}`}>
                {cs.stat}
              </span>
              <p className="mt-3 font-mono text-xs text-zinc-500 leading-relaxed">{cs.statLabel}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
