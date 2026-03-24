import { useParams, Link } from "react-router-dom";
import { destinations } from "@/data/travelContent";
import { ArrowLeft, Star, MapPin, Clock, DollarSign, Sparkles } from "lucide-react";

export default function DestinationDetail() {
  const { id } = useParams();
  const dest = destinations.find((d) => d.id === id);

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Destination Not Found</h2>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Destinations</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-2">{dest.name}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {dest.country}</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-primary fill-primary" /> {dest.rating}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">About this destination</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{dest.description}</p>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {dest.highlights.map((h) => (
                <div key={h} className="glass-card p-4 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="glass-card p-6 sticky top-24">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">Trip Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Best Time</div>
                    <div className="text-foreground font-medium">{dest.bestTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Avg. Cost</div>
                    <div className="text-foreground font-medium">{dest.avgCost}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Region</div>
                    <div className="text-foreground font-medium">{dest.region}</div>
                  </div>
                </div>
              </div>
              <button className="magnetic-btn w-full mt-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">
                Plan Trip Here
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-20">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8">More in {dest.region}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations
              .filter((d) => d.region === dest.region && d.id !== dest.id)
              .slice(0, 4)
              .map((d) => (
                <Link to={`/destination/${d.id}`} key={d.id} className="glass-card group">
                  <div className="h-36 overflow-hidden">
                    <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-3">
                    <h4 className="font-display font-semibold text-foreground text-sm">{d.name}</h4>
                    <span className="text-xs text-muted-foreground">{d.country}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
