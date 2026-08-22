import { Linkedin, Github, MessageCircle } from "lucide-react";
import { site, scrollToSection } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 md:px-12 lg:px-24 py-12" data-testid="site-footer">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <button
          onClick={() => scrollToSection("#top")}
          className="font-mono text-sm font-bold tracking-[0.25em] text-zinc-100 hover:text-primary transition-colors"
          data-testid="footer-brand-button"
        >
          {site.brand}
        </button>
        <div className="flex items-center gap-6">
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-500 hover:text-primary transition-colors" data-testid="footer-linkedin-link">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-500 hover:text-primary transition-colors" data-testid="footer-github-link">
            <Github className="w-5 h-5" />
          </a>
          <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-zinc-500 hover:text-primary transition-colors" data-testid="footer-whatsapp-link">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
        <p className="font-mono text-xs text-zinc-600" data-testid="footer-copyright">
          © {new Date().getFullYear()} {site.name}. Built with intent.
        </p>
      </div>
    </footer>
  );
}
