import { motion } from "framer-motion";
import { site } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40" data-testid="about-section">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4"
      >
        The Manifesto
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 mb-20 md:mb-28"
        data-testid="about-heading"
      >
        WHY I BUILD.
      </motion.h2>

      <div className="space-y-0">
        {site.chapters.map((ch, i) => (
          <motion.div
            key={ch.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
            className="grid grid-cols-4 md:grid-cols-12 gap-6 py-12 md:py-16 border-t border-zinc-800"
            data-testid={`about-chapter-${ch.id}`}
          >
            <div className="col-span-4 md:col-span-2">
              <span className="font-display text-outline font-black text-6xl md:text-8xl leading-none">
                {ch.id}
              </span>
            </div>
            <div className="col-span-4 md:col-span-10 md:pl-8">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 mb-6">
                {ch.title}
              </h3>
              <p className="font-mono text-sm sm:text-base leading-relaxed text-zinc-400 max-w-2xl">
                {ch.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
