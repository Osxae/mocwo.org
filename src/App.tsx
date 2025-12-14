// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";

// Existing pages
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Partnership from "./pages/Partnership";
import MOCWO from "./pages/MOCWO";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GivePage from "./pages/GivePage";
import LivePage from "./pages/LivePage";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// New pages for Schools + Media + Report
import SchoolVisits from "./pages/SchoolVisits";
import MediaPage from "./pages/MediaPage";
import ReportPage from "./pages/ReportPage";

// <-- NEW: import FHC and Rev Prince pages
import FHC from "./pages/FHC";
import RevPrinceMinistries from "./pages/RevPrinceMinistries";

import PrayerAI from "./pages/PrayerAI";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
       <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/resources" element={<Resources />} />
  <Route path="/partnership" element={<Partnership />} />
  <Route path="/mocwo" element={<MOCWO />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/give/:type" element={<GivePage />} />
  <Route path="/live" element={<LivePage />} />
  <Route path="/admin" element={<Admin />} />

  {/* FHC */}
  <Route path="/fhc" element={<FHC />} />

  {/* ✅ PRAYER AI */}
  <Route path="/prayer-ai" element={<PrayerAI />} />

  {/* Other ministries */}
  <Route path="/rev-prince-ministries" element={<RevPrinceMinistries />} />

  {/* Schools + Media + Report */}
  <Route path="/schools" element={<SchoolVisits />} />
  <Route path="/media/:id" element={<MediaPage />} />
  <Route path="/report/:id" element={<ReportPage />} />

  {/* Catch-all MUST be last */}
  <Route path="*" element={<NotFound />} />
</Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
