import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, MapPin, Users, Calendar, Camera } from "lucide-react";
import Navigation from "@/components/Navigation";

const tourDetailsData: Record<string, any> = {
  "taj-mahal": {
    title: "Taj Mahal, Agra",
    description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal.",
    image: "/src/assets/taj-mahal-hero.jpg",
    rating: 4.9,
    duration: "2-3 hours",
    category: "Historical",
    price: "₹50",
    location: "Agra, Uttar Pradesh",
    bestTime: "October to March",
    highlights: [
      "UNESCO World Heritage Site",
      "One of the Seven Wonders of the World",
      "Best viewed at sunrise and sunset",
      "Intricate marble inlay work",
      "Beautiful Mughal gardens"
    ],
    inclusions: [
      "Entry ticket to Taj Mahal",
      "Professional guide",
      "Photography spots",
      "Historical insights"
    ],
    itinerary: [
      "06:00 AM - Sunrise viewing (recommended)",
      "07:00 AM - Entry to main complex",
      "08:00 AM - Guided tour of the mausoleum",
      "09:00 AM - Explore the gardens",
      "10:00 AM - Visit the mosque and guest house"
    ]
  }
};

const TourDetails = () => {
  const { id } = useParams();
  const tour = tourDetailsData[id || ""];

  if (!tour) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold">Tour not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img 
            src={tour.image} 
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <Badge className="mb-2 bg-saffron">{tour.category}</Badge>
            <h1 className="text-4xl font-bold mb-2">{tour.title}</h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span>{tour.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{tour.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Experience</h2>
                <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                <ul className="space-y-2">
                  {tour.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-saffron rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  <Calendar className="w-6 h-6 inline mr-2" />
                  Suggested Itinerary
                </h2>
                <div className="space-y-3">
                  {tour.itinerary.map((item: string, index: number) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-8 h-8 bg-saffron/20 text-saffron rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="glass-card sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-saffron mb-2">{tour.price}</div>
                  <div className="text-sm text-muted-foreground">per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best Time</span>
                    <span className="font-medium">{tour.bestTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Group Size</span>
                    <span className="font-medium">2-15 people</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-hero hover:opacity-90 mb-4">
                  Book Now
                </Button>

                <Button variant="outline" className="w-full">
                  <Camera className="w-4 h-4 mr-2" />
                  View Photos
                </Button>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">What's Included</h3>
                <ul className="space-y-2">
                  {tour.inclusions.map((inclusion: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-indian-green rounded-full" />
                      <span>{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TourDetails;