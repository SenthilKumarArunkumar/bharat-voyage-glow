import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Train, MapPin, Calendar as CalendarIcon, Clock, Search, CreditCard } from "lucide-react";
import { format } from "date-fns";
import Navigation from "@/components/Navigation";

const trainData = [
  {
    id: 1,
    name: "Shatabdi Express",
    number: "12002",
    from: "NDLS",
    to: "AGC",
    departure: "06:00",
    arrival: "08:30",
    duration: "2h 30m",
    days: "Daily",
    classes: [
      { name: "CC", price: 715, available: 45 },
      { name: "EC", price: 1430, available: 12 }
    ]
  },
  {
    id: 2,
    name: "Taj Express",
    number: "12280",
    from: "NDLS",
    to: "AGC",
    departure: "07:15",
    arrival: "10:05",
    duration: "2h 50m",
    days: "Daily",
    classes: [
      { name: "CC", price: 495, available: 62 },
      { name: "2A", price: 1125, available: 8 },
      { name: "3A", price: 805, available: 23 }
    ]
  },
  {
    id: 3,
    name: "Gatimaan Express",
    number: "12050",
    from: "NDLS",
    to: "AGC",
    departure: "08:10",
    arrival: "09:50",
    duration: "1h 40m",
    days: "Tue, Wed, Fri, Sat, Sun",
    classes: [
      { name: "CC", price: 1095, available: 28 },
      { name: "EC", price: 2095, available: 5 }
    ]
  }
];

const Trains = () => {
  const [travelDate, setTravelDate] = useState<Date>();
  const [activeTab, setActiveTab] = useState("booking");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Train Booking
          </h1>
          <p className="text-xl text-muted-foreground">
            Book train tickets, check PNR status, and track live train schedules
          </p>
        </section>

        {/* Service Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
            <TabsTrigger value="booking">Book Tickets</TabsTrigger>
            <TabsTrigger value="pnr">Check PNR</TabsTrigger>
            <TabsTrigger value="live">Live Status</TabsTrigger>
          </TabsList>

          {/* Train Booking */}
          <TabsContent value="booking">
            {/* Search Form */}
            <Card className="glass-card mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from-station">From</Label>
                    <div className="relative">
                      <Train className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="from-station"
                        placeholder="New Delhi (NDLS)"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="to-station">To</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="to-station"
                        placeholder="Agra Cantt (AGC)"
                        className="pl-10"
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
                    <Label>Class</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Classes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Classes</SelectItem>
                        <SelectItem value="sl">Sleeper (SL)</SelectItem>
                        <SelectItem value="3a">3A AC</SelectItem>
                        <SelectItem value="2a">2A AC</SelectItem>
                        <SelectItem value="1a">1A AC</SelectItem>
                        <SelectItem value="cc">Chair Car</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-end">
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      <Search className="mr-2 h-4 w-4" />
                      Search Trains
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Train Results */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Available Trains</h2>
                <div className="text-sm text-muted-foreground">
                  {trainData.length} trains found for {travelDate ? format(travelDate, "dd MMM") : "selected date"}
                </div>
              </div>

              <div className="space-y-4">
                {trainData.map((train) => (
                  <Card key={train.id} className="glass-card hover-lift">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Train Info */}
                        <div className="lg:col-span-2">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-indian-green/20 rounded-lg flex items-center justify-center">
                              <Train className="w-6 h-6 text-indian-green" />
                            </div>
                            <div>
                              <div className="font-bold text-lg">{train.name}</div>
                              <div className="text-sm text-muted-foreground">#{train.number}</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-xl font-bold">{train.departure}</div>
                              <div className="text-sm text-muted-foreground">{train.from}</div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="h-px bg-border flex-1"></div>
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <div className="h-px bg-border flex-1"></div>
                              </div>
                              <div className="text-sm text-muted-foreground">{train.duration}</div>
                            </div>
                            <div>
                              <div className="text-xl font-bold">{train.arrival}</div>
                              <div className="text-sm text-muted-foreground">{train.to}</div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Badge variant="outline" className="text-xs">
                              Runs: {train.days}
                            </Badge>
                          </div>
                        </div>

                        {/* Classes and Pricing */}
                        <div className="lg:col-span-2">
                          <div className="grid gap-3">
                            {train.classes.map((cls, index) => (
                              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/20 transition-colors">
                                <div>
                                  <div className="font-medium">{cls.name}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {cls.available} seats available
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-lg font-bold text-saffron">
                                    ₹{cls.price}
                                  </div>
                                  <Button size="sm" className="bg-gradient-hero hover:opacity-90">
                                    Book
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* PNR Status */}
          <TabsContent value="pnr">
            <Card className="glass-card max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Check PNR Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pnr">PNR Number</Label>
                  <Input 
                    id="pnr"
                    placeholder="Enter 10-digit PNR number"
                    maxLength={10}
                  />
                </div>
                <Button className="w-full bg-gradient-hero hover:opacity-90">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Check Status
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Live Train Status */}
          <TabsContent value="live">
            <Card className="glass-card max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Live Train Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="train-number">Train Number</Label>
                  <Input 
                    id="train-number"
                    placeholder="e.g., 12002"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {travelDate ? format(travelDate, "PPP") : "Select date"}
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
                <Button className="w-full bg-gradient-hero hover:opacity-90">
                  <Train className="mr-2 h-4 w-4" />
                  Track Train
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Trains;