import { destinations } from "@/data/travelContent";
import { useScrollReveal } from "@/hooks/useScrollEffects";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function WorldMap() {
  const { ref, revealed } = useScrollReveal();
  const [hovered, setHovered] = useState<string | null>(null);

  const toSVG = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 800;
    const y = ((90 - lat) / 180) * 400;
    return { x, y };
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div ref={ref} className={`scroll-reveal ${revealed ? "revealed" : ""}`}>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Interactive <span className="gradient-text">World Map</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Click any destination pin to explore details.
        </p>

        <div className="glass-card p-6 overflow-x-auto">
          <svg viewBox="0 0 800 400" className="w-full h-auto min-w-[600px]">
            {/* Simplified world outline */}
            <rect x="0" y="0" width="800" height="400" fill="none" />
            <ellipse cx="400" cy="200" rx="380" ry="180" fill="none" stroke="hsl(220,15%,18%)" strokeWidth="0.5" />
            {/* Grid lines */}
            {[...Array(7)].map((_, i) => (
              <line key={`h${i}`} x1="20" y1={57 * i + 28} x2="780" y2={57 * i + 28} stroke="hsl(220,15%,12%)" strokeWidth="0.3" />
            ))}
            {[...Array(13)].map((_, i) => (
              <line key={`v${i}`} x1={61.5 * i + 20} y1="20" x2={61.5 * i + 20} y2="380" stroke="hsl(220,15%,12%)" strokeWidth="0.3" />
            ))}

            {destinations.map((dest) => {
              const { x, y } = toSVG(dest.lat, dest.lng);
              const isHovered = hovered === dest.id;
              return (
                <Link to={`/destination/${dest.id}`} key={dest.id}>
                  <g
                    onMouseEnter={() => setHovered(dest.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={x}
                      cy={y}
                      r={isHovered ? 6 : 4}
                      fill={isHovered ? "hsl(38,90%,55%)" : "hsl(340,75%,55%)"}
                      opacity={isHovered ? 1 : 0.8}
                      className="transition-all duration-300"
                    />
                    {isHovered && (
                      <>
                        <circle cx={x} cy={y} r="12" fill="none" stroke="hsl(38,90%,55%)" strokeWidth="1" opacity="0.5" />
                        <rect x={x - 50} y={y - 30} width="100" height="22" rx="4" fill="hsl(220,18%,8%)" stroke="hsl(220,15%,18%)" strokeWidth="0.5" />
                        <text x={x} y={y - 15} textAnchor="middle" fill="hsl(45,20%,92%)" fontSize="8" fontFamily="DM Sans">{dest.name}</text>
                      </>
                    )}
                  </g>
                </Link>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
