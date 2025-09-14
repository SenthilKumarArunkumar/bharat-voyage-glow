import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Bus, MapPin, Calendar as CalendarIcon, Clock, Star, Wifi, Snowflake, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import SeatSelectionModal from "@/components/SeatSelectionModal";

const busData = [
  {
    id: 1,
    operator: "RedBus Travels",
    type: "AC Sleeper",
    from: "Delhi",
    to: "Manali",
    departure: "22:00",
    arrival: "10:00",
    duration: "12h 00m",
    price: 1200,
    rating: 4.3,
    amenities: ["AC", "WiFi", "Charging Port", "Blanket"],
    seatsAvailable: 18
  },
  {
    id: 2,
    operator: "Punjab Roadways",
    type: "Volvo AC",
    from: "Delhi",
    to: "Manali",
    departure: "20:30",
    arrival: "08:30",
    duration: "12h 00m",
    price: 1500,
    rating: 4.5,
    amenities: ["AC", "Comfortable Seats", "Entertainment", "Refreshments"],
    seatsAvailable: 12
  },
  {
    id: 3,
    operator: "HRTC",
    type: "Semi Sleeper",
    from: "Delhi",
    to: "Manali",
    departure: "21:15",
    arrival: "09:15",
    duration: "12h 00m",
    price: 950,
    rating: 4.1,
    amenities: ["Semi AC", "Reclining Seats", "Reading Light"],
    seatsAvailable: 25
  }
];

const Buses = () => {
  const [travelDate, setTravelDate] = useState<Date>();
  const [sortBy, setSortBy] = useState("departure");
  const [filterBy, setFilterBy] = useState("all");
  const [fromCity, setFromCity] = useState("Delhi");
  const [toCity, setToCity] = useState("Manali");
  const [selectedBus, setSelectedBus] = useState<typeof busData[0] | null>(null);
  const [isSeatModalOpen, setIsSeatModalOpen] = useState(false);

  // Filter and sort bus data
  const filteredAndSortedBuses = busData
    .filter(bus => {
      if (filterBy === "all") return true;
      if (filterBy === "ac") return bus.amenities.includes("AC");
      if (filterBy === "sleeper") return bus.type.includes("Sleeper");
      if (filterBy === "rating") return bus.rating >= 4.0;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "departure") return a.departure.localeCompare(b.departure);
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
            Bus Booking
          </h1>
          <p className="text-xl text-muted-foreground">
            Travel comfortably across India with our bus booking service
          </p>
        </section>

        {/* Search Form */}
        <Card className="glass-card mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="from"
                    placeholder="Delhi"
                    className="pl-10"
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="to"
                    placeholder="Manali"
                    className="pl-10"
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Travel Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {travelDate ? format(travelDate, "PPP") : "Pick date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={travelDate}
                      onSelect={setTravelDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label>Bus Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All buses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Buses</SelectItem>
                    <SelectItem value="ac">AC Buses</SelectItem>
                    <SelectItem value="sleeper">Sleeper</SelectItem>
                    <SelectItem value="seater">Seater</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-gradient-hero hover:opacity-90">
                  <Bus className="mr-2 h-4 w-4" />
                  Search Buses
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          <Badge 
            variant={filterBy === "all" ? "default" : "outline"} 
            className="whitespace-nowrap cursor-pointer"
            onClick={() => setFilterBy("all")}
          >
            All Buses
          </Badge>
          <Badge 
            variant={filterBy === "ac" ? "default" : "outline"} 
            className="whitespace-nowrap cursor-pointer"
            onClick={() => setFilterBy("ac")}
          >
            AC Buses
          </Badge>
          <Badge 
            variant={filterBy === "sleeper" ? "default" : "outline"} 
            className="whitespace-nowrap cursor-pointer"
            onClick={() => setFilterBy("sleeper")}
          >
            Sleeper
          </Badge>
          <Badge 
            variant={filterBy === "rating" ? "default" : "outline"} 
            className="whitespace-nowrap cursor-pointer"
            onClick={() => setFilterBy("rating")}
          >
            Rating 4.0+
          </Badge>
        </div>

        {/* Bus Results */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Available Buses</h2>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="departure">Departure Time</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filteredAndSortedBuses.map((bus) => (
              <Card key={bus.id} className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 items-center">
                    {/* Bus Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-saffron/20 rounded-lg flex items-center justify-center">
                          <Bus className="w-5 h-5 text-saffron" />
                        </div>
                        <div>
                          <div className="font-semibold">{bus.operator}</div>
                          <div className="text-sm text-muted-foreground">{bus.type}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-gold text-gold" />
                        <span>{bus.rating}</span>
                        <span className="text-muted-foreground ml-2">{bus.seatsAvailable} seats left</span>
                      </div>
                    </div>

                    {/* Timing */}
                    <div className="text-center">
                      <div className="text-xl font-bold">{bus.departure}</div>
                      <div className="text-sm text-muted-foreground">{bus.from}</div>
                    </div>

                    {/* Duration */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <div className="h-px bg-border flex-1"></div>
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <div className="h-px bg-border flex-1"></div>
                      </div>
                      <div className="text-sm text-muted-foreground">{bus.duration}</div>
                    </div>

                    <div className="text-center">
                      <div className="text-xl font-bold">{bus.arrival}</div>
                      <div className="text-sm text-muted-foreground">{bus.to}</div>
                    </div>

                    {/* Amenities */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {bus.amenities.slice(0, 3).map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                      {bus.amenities.length > 3 && (
                        <div className="text-xs text-muted-foreground">
                          +{bus.amenities.length - 3} more
                        </div>
                      )}
                    </div>

                    {/* Price and Book */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-saffron mb-2">
                        ₹{bus.price}
                      </div>
                      <Button 
                        className="w-full bg-gradient-hero hover:opacity-90 mb-2"
                        onClick={() => {
                          setSelectedBus(bus);
                          setIsSeatModalOpen(true);
                        }}
                      >
                        Select Seats
                      </Button>
                      <Button variant="outline" className="w-full text-xs">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Filters */}
        <Card className="glass-card mt-8">
          <CardHeader>
            <CardTitle>Popular Routes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Delhi → Manali",
                "Mumbai → Goa",
                "Bangalore → Chennai",
                "Delhi → Dharamshala",
                "Mumbai → Pune",
                "Delhi → Rishikesh",
                "Bangalore → Mysore",
                "Chennai → Pondicherry"
              ].map((route, index) => (
                <Button key={index} variant="outline" className="justify-start">
                  {route}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      
      {selectedBus && (
        <SeatSelectionModal
          open={isSeatModalOpen}
          onOpenChange={setIsSeatModalOpen}
          vehicleType="bus"
          vehicleName={selectedBus.operator}
          totalSeats={selectedBus.seatsAvailable + 20}
          price={selectedBus.price}
        />
      )}
    </div>
  );
};

export default Buses;