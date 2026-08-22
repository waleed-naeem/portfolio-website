import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site, scrollToSection } from "@/config/site";

const links = [
  { label: "Profile", hash: "#about", testid: "nav-profile-link" },
  { label: "Services", hash: "#services", testid: "nav-services-link" },
  { label: "Work", hash: "#work", testid: "nav-work-link" },
  { label: "Results", hash: "#results", testid: "nav-results-link" },
  { label: "Contact", hash: "#contact", testid: "nav-contact-link" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-xl"
      data-testid="site-nav"
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <button
          onClick={() => scrollToSection("#top")}
          className="font-mono text-sm font-bold tracking-[0.25em] text-zinc-100 hover:text-primary transition-colors duration-300"
          data-testid="nav-brand-button"
        >
          {site.brand}
        </button>
        <nav className="flex items-center gap-6 md:gap-10">
          {links.map((l) => (
            <button
              key={l.hash}
              onClick={() => scrollToSection(l.hash)}
              className="hidden sm:block font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-primary transition-colors duration-300"
              data-testid={l.testid}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#contact")}
            className="flex items-center gap-1 bg-primary text-primary-foreground font-mono text-xs font-bold tracking-wider uppercase px-4 py-2 hover:scale-105 transition-transform duration-300"
            data-testid="nav-cta-button"
          >
            Let's Talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
