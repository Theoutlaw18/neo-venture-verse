import { Compass, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Compass className="w-7 h-7 text-primary" />
            <span className="text-lg font-display font-bold text-foreground">Trip<span className="text-primary">Timbre</span></span>
          </Link>
          <p className="text-sm text-muted-foreground">Crafting unforgettable journeys since 2020. Your story starts here.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/#destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
            <li><Link to="/#food" className="hover:text-primary transition-colors">Cuisines</Link></li>
            <li><Link to="/#packages" className="hover:text-primary transition-colors">Packages</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>FAQ</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hello@triptimbre.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} TripTimbre. All rights reserved.
      </div>
    </footer>
  );
}
