import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Hotel, Plane, Car, Bus, Train } from "lucide-react";
import { Link } from "react-router-dom";
import tajMahalHero from "@/assets/taj-mahal-hero.jpg";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("hotels");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url(${tajMahalHero})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-saffron/20 rounded-full animate-float blur-xl" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-royal-blue/20 rounded-full animate-float blur-xl" style={{animationDelay: "2s"}} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gold/30 rounded-full animate-float blur-xl" style={{animationDelay: "4s"}} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Hero Text */}
        <div className="mb-12 animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Incredible India
            </span>
            <br />
            <span className="text-white">Awaits You</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light">
            Discover, Travel, Experience the magic of India's rich heritage,
            stunning landscapes, and vibrant culture
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/tours">
              <Button className="bg-gradient-hero hover:opacity-90 px-8 py-3 text-lg hover-glow">
                Explore Destinations
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-background px-8 py-3 text-lg">
              Watch Video
            </Button>
          </div>
        </div>

        {/* Interactive Search Bar */}
        <Card className="glass-strong max-w-4xl mx-auto animate-slide-up border-white/20">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-5 mb-6 glass">
                <TabsTrigger value="hotels" className="flex items-center gap-2">
                  <Hotel className="w-4 h-4" />
                  <span className="hidden sm:inline">Hotels</span>
                </TabsTrigger>
                <TabsTrigger value="flights" className="flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  <span className="hidden sm:inline">Flights</span>
                </TabsTrigger>
                <TabsTrigger value="cabs" className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  <span className="hidden sm:inline">Cabs</span>
                </TabsTrigger>
                <TabsTrigger value="buses" className="flex items-center gap-2">
                  <Bus className="w-4 h-4" />
                  <span className="hidden sm:inline">Buses</span>
                </TabsTrigger>
                <TabsTrigger value="trains" className="flex items-center gap-2">
                  <Train className="w-4 h-4" />
                  <span className="hidden sm:inline">Trains</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="hotels">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Destination" className="bg-white/90" />
                  <Input type="date" className="bg-white/90" />
                  <Input type="date" className="bg-white/90" />
                  <Link to="/hotels">
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      <Search className="w-4 h-4 mr-2" />
                      Search Hotels
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="flights">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <Input placeholder="From" className="bg-white/90" />
                  <Input placeholder="To" className="bg-white/90" />
                  <Input type="date" className="bg-white/90" />
                  <Input placeholder="Passengers" className="bg-white/90" />
                  <Link to="/flights">
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      <Search className="w-4 h-4 mr-2" />
                      Search Flights
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="cabs">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Pickup Location" className="bg-white/90" />
                  <Input placeholder="Destination" className="bg-white/90" />
                  <Input type="datetime-local" className="bg-white/90" />
                  <Link to="/cabs">
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      <Search className="w-4 h-4 mr-2" />
                      Book Cab
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="buses">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="From" className="bg-white/90" />
                  <Input placeholder="To" className="bg-white/90" />
                  <Input type="date" className="bg-white/90" />
                  <Link to="/buses">
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      <Search className="w-4 h-4 mr-2" />
                      Search Buses
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="trains">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="From Station" className="bg-white/90" />
                  <Input placeholder="To Station" className="bg-white/90" />
                  <Input type="date" className="bg-white/90" />
                  <Link to="/trains">
                    <Button className="w-full bg-gradient-hero hover:opacity-90">
                      <Search className="w-4 h-4 mr-2" />
                      Search Trains
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;