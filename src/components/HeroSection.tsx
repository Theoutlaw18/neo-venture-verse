import { useParallax } from "@/hooks/useScrollEffects";
import { heroImage } from "@/data/travelContent";
import { MapPin, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const offset = useParallax(0.4);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center parallax-slow"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offset}px) scale(1.1)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

      <div className="relative z-10 text-center max-w-4xl px-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">2,847+ Destinations Worldwide</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6">
          <span className="text-foreground">Where Your</span>
          <br />
          <span className="gradient-text">Story Begins</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Discover breathtaking destinations, savor world cuisines, and craft unforgettable journeys with AI-powered trip planning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="magnetic-btn px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg">
            Explore Destinations
          </button>
          <button className="magnetic-btn px-8 py-4 rounded-full border border-border text-foreground font-semibold text-lg hover:bg-secondary transition-colors">
            View Packages
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
