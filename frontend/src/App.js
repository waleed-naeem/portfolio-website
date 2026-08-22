import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MarqueeStrip from "@/components/Marquee";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Results from "@/components/Results";
import Consultation from "@/components/Consultation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { Toaster } from "@/components/ui/sonner";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen" data-testid="app-root">
      <div className="noise-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <MarqueeStrip />
        <Services />
        <CaseStudies />
        <Results />
        <Consultation />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBubble />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
