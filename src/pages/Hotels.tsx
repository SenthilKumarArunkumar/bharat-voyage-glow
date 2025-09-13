import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, Star, Wifi, Car, Coffee, MapPin, Users, Calendar as CalendarIcon, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import Navigation from "@/components/Navigation";
import tajLakePalace from "@/assets/hotels/taj-lake-palace.jpg";
import heritageHaveli from "@/assets/hotels/heritage-haveli.jpg";
import keralaBackwaters from "@/assets/kerala-backwaters.jpg";

const hotelData = [
  {
    id: 1,
    name: "Taj Lake Palace",
    location: "Udaipur, Rajasthan",
    image: tajLakePalace,
    rating: 4.8,
    reviews: 1250,
    price: 25000,
    amenities: ["Free WiFi", "Parking", "Restaurant", "Spa"],
    category: "Luxury"
  },
  {
    id: 2,
    name: "Backwater Retreat",
    location: "Alleppey, Kerala",
    image: keralaBackwaters,
    rating: 4.6,
    reviews: 890,
    price: 8500,
    amenities: ["Free WiFi", "Restaurant", "Pool", "Boat Tours"],
    category: "Resort"
  },
  {
    id: 3,
    name: "Heritage Haveli",
    location: "Jaipur, Rajasthan",
    image: heritageHaveli,
    rating: 4.5,
    reviews: 650,
    price: 12000,
    amenities: ["Free WiFi", "Parking", "Restaurant", "Heritage"],
    category: "Heritage"
  },
  {
    id: 4,
    name: "Goa Beach Resort",
    location: "Calangute, Goa",
    image: keralaBackwaters,
    rating: 4.4,
    reviews: 520,
    price: 6800,
    amenities: ["Free WiFi", "Beach Access", "Pool", "Bar"],
    category: "Beach"
  },
  {
    id: 5,
    name: "Mountain View Hotel",
    location: "Manali, Himachal Pradesh", 
    image: tajLakePalace,
    rating: 4.3,
    reviews: 380,
    price: 4500,
    amenities: ["Free WiFi", "Mountain View", "Restaurant", "Heating"],
    category: "Hill Station"
  }
];

const Hotels = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [sortBy, setSortBy] = useState("popularity");
  const [filterBy, setFilterBy] = useState("all");

  // Filter and sort hotels
  const filteredAndSortedHotels = hotelData
    .filter(hotel => {
      if (filterBy === "all") return true;
      if (filterBy === "luxury") return hotel.category === "Luxury";
      if (filterBy === "budget") return hotel.price < 10000;
      if (filterBy === "rating") return hotel.rating >= 4.5;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "popularity") return b.reviews - a.reviews;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

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
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-muted-foreground">
            From luxury palaces to cozy homestays across India
          </p>
        </section>

        {/* Search Form */}
        <Card className="glass-card mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="destination"
                    placeholder="Where are you going?"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Check-in</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkIn ? format(checkIn, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label>Check-out</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOut ? format(checkOut, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label>Guests</Label>
                <Select>
                  <SelectTrigger>
                    <Users className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="2 guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 guest</SelectItem>
                    <SelectItem value="2">2 guests</SelectItem>
                    <SelectItem value="3">3 guests</SelectItem>
                    <SelectItem value="4">4 guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-gradient-hero hover:opacity-90">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters and Sorting */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4 overflow-x-auto">
            <Badge 
              variant={filterBy === "all" ? "default" : "outline"}
              className="whitespace-nowrap cursor-pointer"
              onClick={() => setFilterBy("all")}
            >
              All Hotels
            </Badge>
            <Badge 
              variant={filterBy === "luxury" ? "default" : "outline"}
              className="whitespace-nowrap cursor-pointer"
              onClick={() => setFilterBy("luxury")}
            >
              Luxury
            </Badge>
            <Badge 
              variant={filterBy === "budget" ? "default" : "outline"}
              className="whitespace-nowrap cursor-pointer"
              onClick={() => setFilterBy("budget")}
            >
              Budget Friendly
            </Badge>
            <Badge 
              variant={filterBy === "rating" ? "default" : "outline"}
              className="whitespace-nowrap cursor-pointer"
              onClick={() => setFilterBy("rating")}
            >
              Top Rated
            </Badge>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Hotel Cards */}
        <div className="space-y-6">
          {filteredAndSortedHotels.map((hotel) => (
            <Card key={hotel.id} className="glass-card hover-lift overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-saffron text-white">
                    {hotel.category}
                  </Badge>
                </div>
                
                <div className="lg:col-span-2 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{hotel.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="font-medium">{hotel.rating}</span>
                      <span className="text-sm text-muted-foreground">({hotel.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{hotel.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Wifi className="w-4 h-4" />
                      Free WiFi
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="w-4 h-4" />
                      Parking
                    </div>
                    <div className="flex items-center gap-1">
                      <Coffee className="w-4 h-4" />
                      Restaurant
                    </div>
                  </div>
                </div>
                
                <div className="p-6 lg:border-l border-border">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-saffron mb-1">
                      ₹{hotel.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">per night</div>
                    
                    <Button className="w-full bg-gradient-hero hover:opacity-90 mb-2">
                      Book Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Hotels;