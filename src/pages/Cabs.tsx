import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, MapPin, Users, Clock, Star, Fuel, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import hatchbackSwift from "@/assets/cars/hatchback-swift.jpg";
import sedanHonda from "@/assets/cars/sedan-honda.jpg";
import suvToyota from "@/assets/cars/suv-toyota.jpg";
import luxuryMercedes from "@/assets/cars/luxury-mercedes.jpg";

const cabData = [
  {
    id: 1,
    type: "Hatchback",
    model: "Swift Dzire",
    image: hatchbackSwift,
    capacity: 4,
    features: ["AC", "Music System", "GPS"],
    pricePerKm: 12,
    rating: 4.5,
    category: "Economy"
  },
  {
    id: 2,
    type: "Sedan",
    model: "Honda Amaze",
    image: sedanHonda,
    capacity: 4,
    features: ["AC", "Bluetooth", "GPS", "Charging Port"],
    pricePerKm: 15,
    rating: 4.6,
    category: "Comfort"
  },
  {
    id: 3,
    type: "SUV",
    model: "Toyota Innova",
    image: suvToyota,
    capacity: 7,
    features: ["AC", "Spacious", "GPS", "Entertainment"],
    pricePerKm: 22,
    rating: 4.7,
    category: "Premium"
  },
  {
    id: 4,
    type: "Luxury",
    model: "Mercedes E-Class",
    image: luxuryMercedes,
    capacity: 4,
    features: ["Luxury Interior", "Chauffeur", "WiFi", "Refreshments"],
    pricePerKm: 45,
    rating: 4.9,
    category: "Luxury"
  }
];

const Cabs = () => {
  const [bookingType, setBookingType] = useState("local");
  const [distance, setDistance] = useState(50);

  const calculateFare = (pricePerKm: number) => {
    const baseFare = distance * pricePerKm;
    const tax = baseFare * 0.18; // 18% GST
    return baseFare + tax;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Book Your Cab
          </h1>
          <p className="text-xl text-muted-foreground">
            Reliable rides for local trips, outstation journeys, and airport transfers
          </p>
        </section>

        {/* Booking Type Tabs */}
        <Tabs value={bookingType} onValueChange={setBookingType} className="mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
            <TabsTrigger value="local">Local</TabsTrigger>
            <TabsTrigger value="outstation">Outstation</TabsTrigger>
            <TabsTrigger value="airport">Airport</TabsTrigger>
          </TabsList>

          {/* Booking Forms */}
          <TabsContent value="local">
            <Card className="glass-card mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="pickup"
                        placeholder="Enter pickup location"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="destination"
                        placeholder="Where to?"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Pickup Time</Label>
                    <Select>
                      <SelectTrigger>
                        <Clock className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Now" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="now">Now</SelectItem>
                        <SelectItem value="1hour">In 1 hour</SelectItem>
                        <SelectItem value="2hour">In 2 hours</SelectItem>
                        <SelectItem value="custom">Custom time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-end">
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      Search Cabs
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outstation">
            <Card className="glass-card mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from-city">From City</Label>
                    <Input id="from-city" placeholder="Delhi" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to-city">To City</Label>
                    <Input id="to-city" placeholder="Agra" />
                  </div>
                  <div className="space-y-2">
                    <Label>Departure Date</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Trip Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="One Way" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="oneway">One Way</SelectItem>
                        <SelectItem value="roundtrip">Round Trip</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      Search
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="airport">
            <Card className="glass-card mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Airport</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select airport" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="del">Delhi (DEL)</SelectItem>
                        <SelectItem value="bom">Mumbai (BOM)</SelectItem>
                        <SelectItem value="blr">Bangalore (BLR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Your Address</Label>
                    <Input id="address" placeholder="Enter your address" />
                  </div>
                  <div className="space-y-2">
                    <Label>Service Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pick up" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pickup">Airport Pick up</SelectItem>
                        <SelectItem value="drop">Airport Drop</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      Search
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Available Cabs */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Available Cabs</h2>
            <div className="text-sm text-muted-foreground">
              Estimated distance: {distance} km
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cabData.map((cab) => (
              <Card key={cab.id} className="glass-card hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{cab.type}</CardTitle>
                      <p className="text-muted-foreground">{cab.model}</p>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={
                        cab.category === "Luxury" ? "bg-gold/20 text-gold" :
                        cab.category === "Premium" ? "bg-royal-blue/20 text-royal-blue" :
                        "bg-indian-green/20 text-indian-green"
                      }
                    >
                      {cab.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-center h-32 bg-muted/20 rounded-lg mb-4">
                    <img 
                      src={cab.image} 
                      alt={cab.model}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Capacity</span>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{cab.capacity} seats</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rating</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-gold text-gold" />
                        <span>{cab.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rate</span>
                      <span>₹{cab.pricePerKm}/km</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cab.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-muted-foreground">Estimated Fare</span>
                      <span className="text-xl font-bold text-saffron">
                        ₹{Math.round(calculateFare(cab.pricePerKm)).toLocaleString()}
                      </span>
                    </div>
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      Book {cab.type}
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

export default Cabs;