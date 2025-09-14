import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Coffee, Users, Phone, Mail } from "lucide-react";

interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  amenities: string[];
  category: string;
}

interface HotelDetailModalProps {
  hotel: Hotel | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HotelDetailModal = ({ hotel, open, onOpenChange }: HotelDetailModalProps) => {
  if (!hotel) return null;

  const hotelDetails = {
    description: `Experience luxury and comfort at ${hotel.name}. Located in the heart of ${hotel.location}, this ${hotel.category.toLowerCase()} property offers world-class amenities and exceptional service.`,
    facilities: [
      "24/7 Front Desk", "Room Service", "Laundry Service", "Concierge", 
      "Fitness Center", "Swimming Pool", "Spa & Wellness", "Business Center"
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours before check-in",
      children: "Children of all ages are welcome"
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{hotel.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img 
                src={hotel.image} 
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-3 left-3 bg-saffron text-white">
                {hotel.category}
              </Badge>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="font-medium">{hotel.rating}</span>
                  <span className="text-sm text-muted-foreground">({hotel.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-muted-foreground">{hotelDetails.description}</p>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity, index) => (
                    <Badge key={index} variant="secondary">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Facilities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {hotelDetails.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-saffron rounded-full"></div>
                      {facility}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Hotel Policies</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Check-in:</strong> {hotelDetails.policies.checkIn}</div>
                  <div><strong>Check-out:</strong> {hotelDetails.policies.checkOut}</div>
                  <div><strong>Cancellation:</strong> {hotelDetails.policies.cancellation}</div>
                  <div><strong>Children:</strong> {hotelDetails.policies.children}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-saffron">
                  ₹{hotel.price.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">per night</div>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-gradient-hero hover:opacity-90">
                  Book Now
                </Button>
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Hotel
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Hotel
                </Button>
              </div>
            </div>
            
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border">
              <h4 className="font-semibold mb-3">Quick Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4" />
                  Free WiFi Available
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Free Parking
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4" />
                  Restaurant On-site
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Family Friendly
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HotelDetailModal;