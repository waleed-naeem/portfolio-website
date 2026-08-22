import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Github, MessageCircle, ArrowDown } from "lucide-react";
import { site, scrollToSection } from "@/config/site";

const EASE = [0.76, 0, 0.24, 1];
const lines = ["AI SYSTEMS", "THAT WORK", "WHILE YOU SLEEP."];

function MaskedLine({ children, delay, accent }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block font-display font-black tracking-tighter leading-[0.95] text-[13vw] sm:text-6xl lg:text-[5rem] ${
          accent ? "text-primary" : "text-zinc-100"
        }`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const socials = [
    { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin, testid: "hero-linkedin-link" },
    { label: "GitHub", href: site.socials.github, icon: Github, testid: "hero-github-link" },
    { label: "WhatsApp", href: site.socials.whatsapp, icon: MessageCircle, testid: "hero-whatsapp-link" },
  ];

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <img src={site.heroBackdrop} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </motion.div>

      <div className="w-full px-6 md:px-12 lg:px-24 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-8 flex items-center gap-3"
            data-testid="hero-availability"
          >
            <span className="inline-block w-2 h-2 bg-primary animate-pulse" />
            {site.availability}
          </motion.p>

          <h1 data-testid="hero-headline">
            {lines.map((line, i) => (
              <MaskedLine key={line} delay={0.15 + i * 0.12} accent={i === 2}>
                {line}
              </MaskedLine>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: EASE }}
            className="mt-8 max-w-md font-mono text-sm sm:text-base leading-relaxed text-zinc-400"
            data-testid="hero-tagline"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-glow flex items-center gap-2 border border-zinc-800 px-5 py-3 font-mono text-xs tracking-widest uppercase text-zinc-300 hover:border-primary hover:text-primary hover:-translate-y-1 transition-[transform,color,border-color] duration-300"
                data-testid={s.testid}
              >
                <s.icon className="w-4 h-4" />
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: EASE }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-8 bg-[radial-gradient(circle_at_50%_30%,hsl(75_100%_50%/0.14),transparent_65%)] pointer-events-none" />
          <div className="relative border border-zinc-800 overflow-hidden" data-testid="hero-profile-frame">
            <motion.img
              style={{ y: imgY, scale: 1.15 }}
              src={site.profileImage}
              alt={`${site.name} — ${site.role}`}
              className="w-full aspect-[4/5] object-cover grayscale"
              data-testid="hero-profile-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="font-display font-bold text-lg text-zinc-100" data-testid="hero-profile-name">{site.name}</p>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary">{site.role}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-6 md:left-12 lg:left-24 flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-primary transition-colors"
        data-testid="hero-scroll-cue"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
        Scroll
      </motion.button>
    </section>
  );
}
