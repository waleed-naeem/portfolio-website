import Marquee from "react-fast-marquee";
import { site } from "@/config/site";

export default function MarqueeStrip() {
  return (
    <div className="border-y border-zinc-800 py-6 overflow-hidden" data-testid="services-marquee">
      <Marquee speed={35} gradient={false} pauseOnHover>
        {site.marquee.map((item) => (
          <span
            key={item}
            className="font-mono text-xl md:text-3xl font-bold tracking-wide text-zinc-700 hover:text-primary transition-colors duration-300 mx-8 flex items-center gap-8"
          >
            {item}
            <span className="text-primary text-base">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
