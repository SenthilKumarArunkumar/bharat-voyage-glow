import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Check } from "lucide-react";

interface SeatSelectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicleType: "bus" | "train";
  vehicleName: string;
  totalSeats: number;
  price: number;
}

const SeatSelectionModal = ({ 
  open, 
  onOpenChange, 
  vehicleType, 
  vehicleName, 
  totalSeats,
  price 
}: SeatSelectionModalProps) => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  
  // Generate seat layout
  const generateSeats = () => {
    const seats = [];
    const occupiedSeats = [5, 12, 18, 23, 31, 34]; // Random occupied seats
    
    for (let i = 1; i <= totalSeats; i++) {
      seats.push({
        number: i,
        isOccupied: occupiedSeats.includes(i),
        isSelected: selectedSeats.includes(i)
      });
    }
    return seats;
  };
  
  const seats = generateSeats();
  
  const toggleSeat = (seatNumber: number) => {
    const seat = seats.find(s => s.number === seatNumber);
    if (seat?.isOccupied) return;
    
    setSelectedSeats(prev => 
      prev.includes(seatNumber) 
        ? prev.filter(s => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };
  
  const getSeatColor = (seat: any) => {
    if (seat.isOccupied) return "bg-red-500 text-white cursor-not-allowed";
    if (seat.isSelected) return "bg-green-500 text-white";
    return "bg-background border-2 border-border hover:border-saffron cursor-pointer";
  };
  
  const totalPrice = selectedSeats.length * price;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Select Seats - {vehicleName}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="mb-4 flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-background border-2 border-border rounded"></div>
                Available
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                Selected
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                Occupied
              </div>
            </div>
            
            {vehicleType === "bus" ? (
              <div className="space-y-4">
                <div className="text-center text-sm text-muted-foreground mb-4">
                  Driver
                </div>
                <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
                  {seats.map((seat) => (
                    <button
                      key={seat.number}
                      onClick={() => toggleSeat(seat.number)}
                      className={`w-12 h-12 rounded text-sm font-medium transition-colors ${getSeatColor(seat)}`}
                      disabled={seat.isOccupied}
                    >
                      {seat.number}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center text-sm text-muted-foreground mb-4">
                  Coach Layout
                </div>
                <div className="grid grid-cols-6 gap-2 max-w-md mx-auto">
                  {seats.map((seat) => (
                    <button
                      key={seat.number}
                      onClick={() => toggleSeat(seat.number)}
                      className={`w-10 h-10 rounded text-xs font-medium transition-colors ${getSeatColor(seat)}`}
                      disabled={seat.isOccupied}
                    >
                      {seat.number}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border">
              <h3 className="font-semibold mb-3">Booking Summary</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{vehicleType === "bus" ? "Bus" : "Train"}:</span>
                  <span className="font-medium">{vehicleName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Seats:</span>
                  <span className="font-medium">
                    {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Price per seat:</span>
                  <span className="font-medium">₹{price}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span className="text-saffron">₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            {selectedSeats.length > 0 && (
              <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Selected Seats</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedSeats.map(seat => (
                    <Badge key={seat} variant="default" className="bg-green-500">
                      <Check className="w-3 h-3 mr-1" />
                      {seat}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <Button 
              className="w-full bg-gradient-hero hover:opacity-90"
              disabled={selectedSeats.length === 0}
            >
              <Users className="w-4 h-4 mr-2" />
              Proceed to Payment
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SeatSelectionModal;