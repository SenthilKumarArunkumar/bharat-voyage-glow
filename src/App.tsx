import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ToursAttractions from "./pages/ToursAttractions";
import TourDetails from "./pages/TourDetails";
import StateDetails from "./pages/StateDetails";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import Cabs from "./pages/Cabs";
import Buses from "./pages/Buses";
import Trains from "./pages/Trains";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tours" element={<ToursAttractions />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/state/:id" element={<StateDetails />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/cabs" element={<Cabs />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/trains" element={<Trains />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
