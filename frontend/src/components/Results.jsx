import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { site } from "@/config/site";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-black text-5xl md:text-7xl text-primary tracking-tighter">
      {display}
      {suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section id="results" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40" data-testid="results-section">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4"
      >
        Proof, not promises
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 mb-20 md:mb-28"
        data-testid="results-heading"
      >
        RESULTS & REVIEWS.
      </motion.h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 mb-24 md:mb-32">
        {site.metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            className="bg-background p-8 md:p-10"
            data-testid={`metric-card-${i}`}
          >
            <Counter value={m.value} suffix={m.suffix} />
            <p className="mt-4 font-mono text-xs md:text-sm text-zinc-500 leading-relaxed">{m.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {site.reviews.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
            className={`bg-zinc-900 border border-zinc-800 p-8 md:p-10 hover:border-primary transition-colors duration-300 ${
              i === 1 ? "md:translate-y-10" : ""
            }`}
            data-testid={`review-card-${i}`}
          >
            <blockquote className="font-mono text-sm leading-relaxed text-zinc-300 mb-8">
              “{r.quote}”
            </blockquote>
            <figcaption className="flex items-center gap-4">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-12 h-12 object-cover grayscale border border-zinc-700"
              />
              <div>
                <p className="font-display text-sm font-semibold text-zinc-100">{r.name}</p>
                <p className="font-mono text-xs text-zinc-500">{r.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
