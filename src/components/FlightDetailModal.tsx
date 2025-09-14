import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Clock, Users, Luggage, Wifi, Coffee } from "lucide-react";

interface Flight {
  id: number;
  airline: string;
  logo: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  type: string;
  class: string;
}

interface FlightDetailModalProps {
  flight: Flight | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FlightDetailModal = ({ flight, open, onOpenChange }: FlightDetailModalProps) => {
  if (!flight) return null;

  const flightDetails = {
    baggage: {
      cabin: "7 kg",
      checkin: "15 kg"
    },
    amenities: ["In-flight entertainment", "Meal service", "Wi-Fi available", "USB charging"],
    policies: {
      cancellation: "Cancellable with fee",
      dateChange: "Date change allowed with fee",
      refund: "Partially refundable"
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <img src={flight.logo} alt={flight.airline} className="w-8 h-8" />
            {flight.airline} - {flight.from} to {flight.to}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Flight Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">{flight.departure}</div>
                  <div className="text-lg font-medium">{flight.from}</div>
                  <div className="text-sm text-muted-foreground">Departure</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="h-px bg-border flex-1"></div>
                    <Plane className="w-5 h-5 text-saffron" />
                    <div className="h-px bg-border flex-1"></div>
                  </div>
                  <div className="text-sm font-medium">{flight.duration}</div>
                  <div className="text-xs text-muted-foreground">
                    {flight.type}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold">{flight.arrival}</div>
                  <div className="text-lg font-medium">{flight.to}</div>
                  <div className="text-sm text-muted-foreground">Arrival</div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><strong>Class:</strong> {flight.class}</div>
                  <div><strong>Flight Type:</strong> {flight.type}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Baggage Information</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Luggage className="w-5 h-5 text-saffron" />
                  <div>
                    <div className="font-medium">Cabin Baggage</div>
                    <div className="text-sm text-muted-foreground">{flightDetails.baggage.cabin}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Luggage className="w-5 h-5 text-saffron" />
                  <div>
                    <div className="font-medium">Check-in Baggage</div>
                    <div className="text-sm text-muted-foreground">{flightDetails.baggage.checkin}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">In-flight Amenities</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {flightDetails.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-saffron rounded-full"></div>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Booking Policies</h3>
              
              <div className="space-y-2 text-sm">
                <div><strong>Cancellation:</strong> {flightDetails.policies.cancellation}</div>
                <div><strong>Date Change:</strong> {flightDetails.policies.dateChange}</div>
                <div><strong>Refund:</strong> {flightDetails.policies.refund}</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-saffron">
                  ₹{flight.price.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">per person</div>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-gradient-hero hover:opacity-90">
                  Book Now
                </Button>
                <Button variant="outline" className="w-full">
                  Add to Wishlist
                </Button>
              </div>
            </div>
            
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border">
              <h4 className="font-semibold mb-3">Quick Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  On-time Performance: 85%
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Economy Class
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4" />
                  Wi-Fi Available
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4" />
                  Complimentary Meals
                </div>
              </div>
            </div>
            
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border">
              <h4 className="font-semibold mb-3">Fare Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Base Fare:</span>
                  <span>₹{Math.round(flight.price * 0.7).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees:</span>
                  <span>₹{Math.round(flight.price * 0.3).toLocaleString()}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>₹{flight.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FlightDetailModal;