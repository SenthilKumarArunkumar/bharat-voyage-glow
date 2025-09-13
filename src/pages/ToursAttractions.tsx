import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const topAttractionsData = [
  {
    id: "taj-mahal",
    title: "Taj Mahal, Agra",
    description: "Wonder of the World, Mughal architecture masterpiece",
    image: "/src/assets/taj-mahal-hero.jpg",
    rating: 4.9,
    duration: "2-3 hours",
    category: "Historical",
    price: "₹50"
  },
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters",
    description: "Alleppey and Kumarakom houseboat cruises",
    image: "/src/assets/kerala-backwaters.jpg",
    rating: 4.8,
    duration: "Full day",
    category: "Nature",
    price: "₹2,500"
  },
  {
    id: "rajasthan-desert",
    title: "Rajasthan's Thar Desert",
    description: "Camel safaris and desert camping in Jaisalmer",
    image: "/src/assets/rajasthan-desert.jpg",
    rating: 4.7,
    duration: "2-3 days",
    category: "Adventure",
    price: "₹5,000"
  },
  {
    id: "golden-temple",
    title: "Golden Temple, Amritsar",
    description: "Sikh spiritual center with golden architecture",
    image: "/placeholder.svg",
    rating: 4.9,
    duration: "2-3 hours",
    category: "Spiritual",
    price: "Free"
  },
  {
    id: "varanasi-ghats",
    title: "Varanasi Ghats",
    description: "Ganga Aarti ceremony and spiritual vibes",
    image: "/placeholder.svg",
    rating: 4.6,
    duration: "Half day",
    category: "Spiritual",
    price: "₹200"
  },
  {
    id: "leh-ladakh",
    title: "Leh-Ladakh",
    description: "Pangong Lake, monasteries, and road trips",
    image: "/src/assets/himalayas-landscape.jpg",
    rating: 4.8,
    duration: "7-10 days",
    category: "Adventure",
    price: "₹25,000"
  }
];

const stateData = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    highlights: "Temples, Marina Beach, Ooty hills",
    image: "/placeholder.svg",
    attractions: 45
  },
  {
    id: "kerala",
    name: "Kerala",
    highlights: "Munnar tea gardens, Ayurveda, backwaters",
    image: "/src/assets/kerala-backwaters.jpg",
    attractions: 38
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    highlights: "Jaipur forts, Jodhpur blue city, Udaipur lakes",
    image: "/src/assets/rajasthan-desert.jpg",
    attractions: 52
  },
  {
    id: "kashmir",
    name: "Jammu & Kashmir",
    highlights: "Srinagar Dal Lake, Gulmarg, Sonamarg",
    image: "/src/assets/himalayas-landscape.jpg",
    attractions: 28
  },
  {
    id: "goa",
    name: "Goa",
    highlights: "Beaches, nightlife, Portuguese heritage",
    image: "/placeholder.svg",
    attractions: 32
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    highlights: "Shimla, Manali, Dharamshala",
    image: "/placeholder.svg",
    attractions: 35
  }
];

const ToursAttractions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Tours & Attractions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover India's most incredible destinations and experiences
          </p>
        </section>

        <Tabs defaultValue="top-attractions" className="w-full">
          <TabsList className="grid w-full grid-cols-2 glass-card mb-8">
            <TabsTrigger value="top-attractions">Top Things To Do</TabsTrigger>
            <TabsTrigger value="by-states">Trending by States</TabsTrigger>
          </TabsList>

          {/* Top Attractions */}
          <TabsContent value="top-attractions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topAttractionsData.map((attraction) => (
                <Card key={attraction.id} className="glass-card hover-lift group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={attraction.image} 
                      alt={attraction.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-3 left-3 bg-saffron text-white">
                      {attraction.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{attraction.title}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-gold text-gold" />
                        <span className="text-sm font-medium">{attraction.rating}</span>
                      </div>
                    </div>
                    <CardDescription>{attraction.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {attraction.duration}
                      </div>
                      <div className="font-semibold text-saffron">{attraction.price}</div>
                    </div>
                    
                    <Link to={`/tour/${attraction.id}`}>
                      <Button className="w-full bg-gradient-hero hover:opacity-90">
                        Explore Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* By States */}
          <TabsContent value="by-states">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateData.map((state) => (
                <Card key={state.id} className="glass-card hover-lift group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={state.image} 
                      alt={state.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{state.name}</h3>
                      <p className="text-sm opacity-90">{state.attractions} attractions</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{state.highlights}</p>
                    
                    <Link to={`/state/${state.id}`}>
                      <Button className="w-full bg-gradient-hero hover:opacity-90">
                        <MapPin className="w-4 h-4 mr-2" />
                        Explore {state.name}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ToursAttractions;