import { motion } from "framer-motion";
import { Globe, Bot, Workflow, Headset, Mic, Target } from "lucide-react";
import { site } from "@/config/site";

const icons = { Globe, Bot, Workflow, Headset, Mic, Target };

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40 border-t border-zinc-800" data-testid="services-section">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4"
      >
        Services
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 mb-20 md:mb-28"
        data-testid="services-heading"
      >
        WHAT I <span className="text-primary">BUILD.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
        {site.services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className="group bg-background p-8 md:p-12 hover:bg-zinc-900 transition-colors duration-300"
              data-testid={`service-card-${s.id}`}
            >
              <div className="flex items-start justify-between mb-10">
                <Icon className="w-8 h-8 text-zinc-500 group-hover:text-primary transition-colors duration-300" />
                <span className="font-display text-outline font-black text-3xl">{s.id}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-zinc-100 mb-4 group-hover:text-primary transition-colors duration-300">
                {s.title}
              </h3>
              <p className="font-mono text-sm leading-relaxed text-zinc-500">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
