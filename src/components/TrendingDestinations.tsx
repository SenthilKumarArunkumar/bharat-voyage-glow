import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import keralaBG from "@/assets/kerala-backwaters.jpg";
import rajasthanBG from "@/assets/rajasthan-desert.jpg";
import himalayasBG from "@/assets/himalayas-landscape.jpg";

const destinations = [
  {
    id: "goa",
    name: "Goa",
    tagline: "Beaches & Portuguese Heritage",
    image: "/src/assets/destinations/goa-beach.jpg",
    rating: 4.6,
    bestTime: "Nov - Feb",
    highlights: ["Pristine Beaches", "Vibrant Nightlife", "Colonial Architecture"],
    priceRange: "₹8,000 - ₹15,000"
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    image: keralaBG,
    rating: 4.8,
    bestTime: "Oct - Mar",
    highlights: ["Backwaters", "Ayurveda", "Tea Gardens"],
    priceRange: "₹12,000 - ₹25,000"
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "Land of Kings",
    image: rajasthanBG,
    rating: 4.7,
    bestTime: "Oct - Mar",
    highlights: ["Royal Palaces", "Desert Safari", "Rich Culture"],
    priceRange: "₹10,000 - ₹30,000"
  },
  {
    id: "kashmir",
    name: "Jammu & Kashmir",
    tagline: "Paradise on Earth",
    image: himalayasBG,
    rating: 4.9,
    bestTime: "May - Oct",
    highlights: ["Dal Lake", "Snow Mountains", "Houseboats"],
    priceRange: "₹15,000 - ₹35,000"
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    tagline: "Land of Snow",
    image: "/src/assets/himachal.jpg",
    rating: 4.5,
    bestTime: "Mar - Jun",
    highlights: ["Hill Stations", "Adventure Sports", "Apple Orchards"],
    priceRange: "₹8,000 - ₹20,000"
  }
];

const TrendingDestinations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Trending Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover India's most popular travel destinations loved by millions of travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="glass-card hover-lift group overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Floating Rating */}
                <div className="absolute top-4 right-4 glass-strong rounded-full px-3 py-1">
                  <div className="flex items-center gap-1 text-white">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>

                {/* Destination Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-sm opacity-90 mb-3">{destination.tagline}</p>
                  
                  <div className="flex items-center gap-2 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>Best Time: {destination.bestTime}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Price Range */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-muted-foreground">From</span>
                      <div className="font-semibold text-saffron">{destination.priceRange}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">per person</div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link to={`/state/${destination.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-hero hover:opacity-90">
                        <MapPin className="w-4 h-4 mr-2" />
                        Explore
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/tours">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 px-8 py-3">
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
