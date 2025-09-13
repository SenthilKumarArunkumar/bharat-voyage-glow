import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Camera, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";

const stateDetailsData: Record<string, any> = {
  "kerala": {
    name: "Kerala",
    tagline: "God's Own Country",
    description: "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals.",
    image: "/src/assets/kerala-backwaters.jpg",
    bestTime: "October to March",
    attractions: [
      {
        name: "Alleppey Backwaters",
        description: "Network of canals, rivers and lakes",
        image: "/src/assets/kerala-backwaters.jpg",
        rating: 4.8,
        category: "Nature"
      },
      {
        name: "Munnar Tea Gardens",
        description: "Rolling hills covered with tea plantations",
        image: "/placeholder.svg",
        rating: 4.7,
        category: "Nature"
      },
      {
        name: "Fort Kochi",
        description: "Historic port city with colonial architecture",
        image: "/placeholder.svg",
        rating: 4.6,
        category: "Historical"
      }
    ]
  },
  "rajasthan": {
    name: "Rajasthan",
    tagline: "Land of Kings",
    description: "Rajasthan is a state in northern India known for its historic palaces, forts, and desert landscapes. The Pink City of Jaipur is its capital.",
    image: "/src/assets/rajasthan-desert.jpg",
    bestTime: "October to March",
    attractions: [
      {
        name: "Thar Desert Safari",
        description: "Camel rides and desert camping",
        image: "/src/assets/rajasthan-desert.jpg",
        rating: 4.7,
        category: "Adventure"
      },
      {
        name: "Amber Fort, Jaipur",
        description: "Majestic hilltop fort with stunning architecture",
        image: "/placeholder.svg",
        rating: 4.8,
        category: "Historical"
      },
      {
        name: "Lake Palace, Udaipur",
        description: "Floating palace on Lake Pichola",
        image: "/placeholder.svg",
        rating: 4.9,
        category: "Heritage"
      }
    ]
  }
};

const StateDetails = () => {
  const { id } = useParams();
  const state = stateDetailsData[id || ""];

  if (!state) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold">State not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img 
            src={state.image} 
            alt={state.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-5xl font-bold mb-2">{state.name}</h1>
            <p className="text-xl opacity-90 mb-4">{state.tagline}</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Best Time: {state.bestTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{state.attractions.length} Top Attractions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <Card className="glass-card mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">About {state.name}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{state.description}</p>
          </CardContent>
        </Card>

        {/* Attractions */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Top Attractions in {state.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {state.attractions.map((attraction: any, index: number) => (
              <Card key={index} className="glass-card hover-lift group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 left-3 bg-saffron text-white">
                    {attraction.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{attraction.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="text-sm font-medium">{attraction.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{attraction.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-hero hover:opacity-90">
                      Book Tour
                    </Button>
                    <Button variant="outline" size="icon">
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default StateDetails;