import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Mountain, 
  Waves, 
  Building, 
  TreePine, 
  Sun,
  ArrowRight,
  Clock,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import tajMahalHero from "@/assets/taj-mahal-hero.jpg";

const featuredExperiences = [
  {
    id: "taj-mahal",
    title: "Taj Mahal Sunrise Tour",
    description: "Witness the magnificent Taj Mahal at golden hour when it glows in the soft morning light",
    image: tajMahalHero,
    icon: Camera,
    duration: "4 hours",
    groupSize: "2-15 people",
    price: "₹2,500",
    category: "Historical"
  },
  {
    id: "kerala-backwaters",
    title: "Kerala Houseboat Cruise",
    description: "Peaceful journey through emerald backwaters on traditional houseboats",
    image: "/src/assets/kerala-backwaters.jpg",
    icon: Waves,
    duration: "Full day",
    groupSize: "2-8 people",
    price: "₹6,500",
    category: "Nature"
  },
  {
    id: "rajasthan-safari",
    title: "Thar Desert Safari",
    description: "Camel rides across golden sand dunes with overnight desert camping",
    image: "/src/assets/rajasthan-desert.jpg",
    icon: Mountain,
    duration: "2 days",
    groupSize: "4-12 people",
    price: "₹8,500",
    category: "Adventure"
  },
  {
    id: "temple-tour",
    title: "South India Temple Trail",
    description: "Explore ancient temples showcasing incredible Dravidian architecture",
    image: "/placeholder.svg",
    icon: Building,
    duration: "6 hours",
    groupSize: "5-20 people",
    price: "₹3,200",
    category: "Spiritual"
  },
  {
    id: "hill-stations",
    title: "Himalayan Hill Stations",
    description: "Scenic mountain retreats with snow-capped peaks and fresh air",
    image: "/src/assets/himalayas-landscape.jpg",
    icon: TreePine,
    duration: "3 days",
    groupSize: "2-10 people",
    price: "₹12,000",
    category: "Nature"
  },
  {
    id: "beaches",
    title: "Goa Beach Paradise",
    description: "Pristine beaches, water sports, and vibrant coastal culture",
    image: "/placeholder.svg",
    icon: Sun,
    duration: "2 days",
    groupSize: "2-8 people",
    price: "₹5,500",
    category: "Beach"
  }
];

const FeaturedSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Top Things To Do in India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in incredible experiences that showcase India's rich heritage, 
            natural beauty, and cultural diversity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExperiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <Card 
                key={experience.id} 
                className="glass-card hover-lift group overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <Badge className="absolute top-3 left-3 bg-saffron text-white">
                    {experience.category}
                  </Badge>
                  
                  <div className="absolute top-3 right-3 w-10 h-10 glass-strong rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-saffron transition-colors">
                    {experience.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {experience.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {/* Details */}
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{experience.groupSize}</span>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground">From</span>
                        <div className="text-lg font-bold text-saffron">{experience.price}</div>
                      </div>
                      <Link to={`/tour/${experience.id}`}>
                        <Button className="bg-gradient-hero hover:opacity-90 group/btn">
                          Explore
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/tours">
            <Button size="lg" variant="outline" className="px-8 py-3 hover:bg-gradient-hero hover:text-white transition-all">
              View All Experiences
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;