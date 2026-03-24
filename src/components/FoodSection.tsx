import { useState } from "react";
import { foods } from "@/data/travelContent";
import { useScrollReveal } from "@/hooks/useScrollEffects";
import { UtensilsCrossed } from "lucide-react";

const categories = ["All", "Main Course", "Street Food", "Soup", "Appetizer", "Dessert", "Pastry"];

export default function FoodSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, revealed } = useScrollReveal();

  const filtered = activeCategory === "All" ? foods : foods.filter((f) => f.category === activeCategory);

  return (
    <section id="food" className="py-24 px-6 max-w-7xl mx-auto">
      <div ref={ref} className={`scroll-reveal ${revealed ? "revealed" : ""}`}>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          World <span className="gradient-text">Cuisines</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Taste the world — {foods.length} iconic dishes from every corner of the globe.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === c
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((food) => (
            <div key={food.id} className="glass-card group hover:border-primary/30 transition-all duration-500">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 glass px-2 py-1 rounded-full">
                  <span className="text-xs text-primary font-medium">{food.category}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-foreground text-lg mb-1">{food.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <UtensilsCrossed className="w-3 h-3" />
                  <span>{food.origin}</span>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
