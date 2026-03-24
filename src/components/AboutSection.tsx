import { useScrollReveal } from "@/hooks/useScrollEffects";
import { Globe, Users, Award, Heart } from "lucide-react";

const stats = [
  { icon: Globe, label: "Destinations", value: "2,847+" },
  { icon: Users, label: "Happy Travelers", value: "1.2M+" },
  { icon: Award, label: "Awards Won", value: "150+" },
  { icon: Heart, label: "5-Star Reviews", value: "98%" },
];

export default function AboutSection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div ref={ref} className={`scroll-reveal ${revealed ? "revealed" : ""}`}>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          About <span className="gradient-text">TripTimbre</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          We believe every journey has a unique rhythm. TripTimbre helps you find yours — with AI-powered planning, curated experiences, and a community of passionate travelers.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-500">
              <s.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-display font-bold text-foreground mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
