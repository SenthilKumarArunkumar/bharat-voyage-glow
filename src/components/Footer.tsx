import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Incredible India
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover the magic of India through our carefully curated travel experiences. 
              From majestic monuments to serene backwaters, adventure awaits at every turn.
            </p>
            <div className="flex space-x-2">
              <Button size="icon" variant="outline" className="hover:bg-saffron hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-saffron hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-saffron hover:text-white">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-saffron hover:text-white">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/tours" className="block text-muted-foreground hover:text-saffron transition-colors">
                Tours & Attractions
              </Link>
              <Link to="/hotels" className="block text-muted-foreground hover:text-saffron transition-colors">
                Hotels
              </Link>
              <Link to="/flights" className="block text-muted-foreground hover:text-saffron transition-colors">
                Flights
              </Link>
              <Link to="/cabs" className="block text-muted-foreground hover:text-saffron transition-colors">
                Cabs
              </Link>
              <Link to="/buses" className="block text-muted-foreground hover:text-saffron transition-colors">
                Buses
              </Link>
              <Link to="/trains" className="block text-muted-foreground hover:text-saffron transition-colors">
                Trains
              </Link>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Destinations</h3>
            <div className="space-y-2 text-sm">
              <Link to="/state/rajasthan" className="block text-muted-foreground hover:text-saffron transition-colors">
                Rajasthan
              </Link>
              <Link to="/state/kerala" className="block text-muted-foreground hover:text-saffron transition-colors">
                Kerala
              </Link>
              <Link to="/state/goa" className="block text-muted-foreground hover:text-saffron transition-colors">
                Goa
              </Link>
              <Link to="/state/kashmir" className="block text-muted-foreground hover:text-saffron transition-colors">
                Jammu & Kashmir
              </Link>
              <Link to="/state/himachal" className="block text-muted-foreground hover:text-saffron transition-colors">
                Himachal Pradesh
              </Link>
              <Link to="/tour/taj-mahal" className="block text-muted-foreground hover:text-saffron transition-colors">
                Taj Mahal
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 1234 567 890</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@incredibleindia.com</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Tourism Bhawan, New Delhi, India</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="text-sm"
                />
                <Button size="sm" className="bg-gradient-hero hover:opacity-90">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Incredible India Tourism. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="#" className="hover:text-saffron transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-saffron transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-saffron transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;