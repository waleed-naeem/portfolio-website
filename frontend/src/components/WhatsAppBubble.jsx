import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/config/site";

export default function WhatsAppBubble() {
  const href = `${site.socials.whatsapp}?text=${encodeURIComponent(
    "Hi Waleed, I saw your portfolio and want to talk about an automation project."
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-0 hover:gap-3 bg-primary text-primary-foreground p-4 hover:pr-6 transition-[padding,gap] duration-300 shadow-[0_0_24px_hsl(75_100%_50%/0.35)] group"
      data-testid="whatsapp-bubble"
    >
      <span className="relative flex">
        <span className="absolute inline-flex w-full h-full bg-primary opacity-60 animate-ping" />
        <MessageCircle className="relative w-6 h-6" />
      </span>
      <span className="max-w-0 overflow-hidden group-hover:max-w-[8rem] transition-[max-width] duration-300 font-mono text-xs font-bold tracking-wider uppercase whitespace-nowrap">
        Chat now
      </span>
    </motion.a>
  );
}
