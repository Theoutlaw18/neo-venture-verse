import { useState } from "react";
import { Link } from "react-router-dom";
import { destinations } from "@/data/travelContent";
import { useScrollReveal } from "@/hooks/useScrollEffects";
import { Star, MapPin } from "lucide-react";

const regions = ["All", "Asia", "Europe", "Americas", "Africa", "Oceania", "Middle East"];

export default function DestinationsSection() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const { ref, revealed } = useScrollReveal();

  const filtered = activeRegion === "All" ? destinations : destinations.filter((d) => d.region === activeRegion);
  const displayed = showAll ? filtered : filtered.slice(0, 12);

  return (
    <section id="destinations" className="py-24 px-6 max-w-7xl mx-auto">
      <div ref={ref} className={`scroll-reveal ${revealed ? "revealed" : ""}`}>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Explore <span className="gradient-text">Destinations</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          From ancient temples to modern marvels — find your next adventure across {destinations.length} destinations.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => { setActiveRegion(r); setShowAll(false); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeRegion === r
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((dest, i) => (
            <Link
              to={`/destination/${dest.id}`}
              key={dest.id}
              className="glass-card group cursor-pointer hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 glass px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 text-primary fill-primary" />
                  <span className="text-xs text-foreground">{dest.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-foreground text-lg mb-1">{dest.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{dest.country}</span>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">{dest.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{dest.bestTime}</span>
                  <span className="text-xs font-semibold text-primary">{dest.avgCost}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length > 12 && !showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="magnetic-btn px-8 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
            >
              Show All {filtered.length} Destinations
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
