import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Plane, ArrowRightLeft, Calendar as CalendarIcon, Users, Clock, MapPin, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import Navigation from "@/components/Navigation";
import FlightDetailModal from "@/components/FlightDetailModal";
import airIndiaLogo from "@/assets/airlines/air-india-logo.jpg";
import indigoLogo from "@/assets/airlines/indigo-logo.jpg";
import vistaraLogo from "@/assets/airlines/vistara-logo.jpg";

const flightData = [
  {
    id: 1,
    airline: "Air India",
    logo: airIndiaLogo,
    from: "DEL",
    to: "BOM",
    departure: "06:00",
    arrival: "08:30",
    duration: "2h 30m",
    price: 8500,
    type: "Non-stop",
    class: "Economy"
  },
  {
    id: 2,
    airline: "IndiGo",
    logo: indigoLogo,
    from: "DEL",
    to: "BOM",
    departure: "10:15",
    arrival: "12:50",
    duration: "2h 35m",
    price: 7200,
    type: "Non-stop",
    class: "Economy"
  },
  {
    id: 3,
    airline: "Vistara",
    logo: vistaraLogo,
    from: "DEL",
    to: "BOM",
    departure: "14:30",
    arrival: "17:10",
    duration: "2h 40m",
    price: 9800,
    type: "Non-stop",
    class: "Premium Economy"
  },
  {
    id: 4,
    airline: "SpiceJet",
    logo: airIndiaLogo,
    from: "DEL",
    to: "BOM",
    departure: "18:45",
    arrival: "21:25",
    duration: "2h 40m",
    price: 6800,
    type: "Non-stop",
    class: "Economy"
  }
];

const Flights = () => {
  const [departDate, setDepartDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [tripType, setTripType] = useState("one-way");
  const [sortBy, setSortBy] = useState("price-low");
  const [selectedFlight, setSelectedFlight] = useState<typeof flightData[0] | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Sort flights
  const sortedFlights = [...flightData].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "duration") return a.duration.localeCompare(b.duration);
    if (sortBy === "departure") return a.departure.localeCompare(b.departure);
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
            Book Your Flight
          </h1>
          <p className="text-xl text-muted-foreground">
            Find the best deals on domestic and international flights
          </p>
        </section>

        {/* Search Form */}
        <Card className="glass-card mb-8">
          <CardContent className="p-6">
            <Tabs value={tripType} onValueChange={setTripType} className="mb-6">
              <TabsList className="grid grid-cols-3 w-96">
                <TabsTrigger value="one-way">One-way</TabsTrigger>
                <TabsTrigger value="round-trip">Round Trip</TabsTrigger>
                <TabsTrigger value="multi-city">Multi-city</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <div className="relative">
                  <Plane className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="from"
                    placeholder="Delhi (DEL)"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex items-end justify-center">
                <Button variant="ghost" size="icon" className="mb-2">
                  <ArrowRightLeft className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="to"
                    placeholder="Mumbai (BOM)"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Departure</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departDate ? format(departDate, "PPP") : "Pick date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={departDate}
                      onSelect={setDepartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {tripType === "round-trip" && (
                <div className="space-y-2">
                  <Label>Return</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {returnDate ? format(returnDate, "PPP") : "Pick date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              )}
              
              <div className="space-y-2">
                <Label>Passengers</Label>
                <Select>
                  <SelectTrigger>
                    <Users className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="1 Adult" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4 Adults</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-gradient-hero hover:opacity-90">
                  Search Flights
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Flight Results */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Available Flights</h2>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
                <SelectItem value="departure">Departure Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {sortedFlights.map((flight) => (
            <Card key={flight.id} className="glass-card hover-lift">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                  {/* Airline Info */}
                   <div className="flex items-center gap-3">
                     <img 
                       src={flight.logo} 
                       alt={flight.airline}
                       className="w-12 h-12 rounded-lg object-contain bg-white p-1"
                     />
                     <div>
                       <div className="font-semibold">{flight.airline}</div>
                       <div className="text-sm text-muted-foreground">{flight.class}</div>
                     </div>
                   </div>

                  {/* Flight Times */}
                  <div className="text-center">
                    <div className="text-2xl font-bold">{flight.departure}</div>
                    <div className="text-sm text-muted-foreground">{flight.from}</div>
                  </div>

                  {/* Duration */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className="h-px bg-border flex-1"></div>
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <div className="h-px bg-border flex-1"></div>
                    </div>
                    <div className="text-sm text-muted-foreground">{flight.duration}</div>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {flight.type}
                    </Badge>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold">{flight.arrival}</div>
                    <div className="text-sm text-muted-foreground">{flight.to}</div>
                  </div>

                  {/* Price and Book */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-saffron mb-2">
                      ₹{flight.price.toLocaleString()}
                    </div>
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <FlightDetailModal
        flight={selectedFlight}
        open={isDetailModalOpen}
        onOpenChange={setIsDetailModalOpen}
      />
    </div>
  );
};

export default Flights;