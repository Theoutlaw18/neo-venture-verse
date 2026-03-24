import { travelPackages } from "@/data/travelContent";
import { useScrollReveal } from "@/hooks/useScrollEffects";
import { Clock, MapPin } from "lucide-react";

export default function PackagesSection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="packages" className="py-24 px-6 max-w-7xl mx-auto">
      <div ref={ref} className={`scroll-reveal ${revealed ? "revealed" : ""}`}>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Curated <span className="gradient-text">Packages</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Handpicked travel packages for every kind of traveler.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {travelPackages.map((pkg) => (
            <div key={pkg.id} className="glass-card group hover:border-primary/30 transition-all duration-500 flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/2 h-56 md:h-auto overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-bold text-foreground text-2xl mb-3">{pkg.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.destinations.join(" → ")}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                  <button className="magnetic-btn px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
