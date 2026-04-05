import { useState } from "react";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NurseCard from "@/components/shared/NurseCard";

const mockNurses = [
  { id: "1", name: "Sarah Johnson", rating: 4.9, reviewCount: 128, services: ["Home Care", "Wound Care", "IV Therapy"], priceInfo: "From $45/hr", availability: "Available Now", distance: "2.3 mi", responseTime: "~15 min", verified: true },
  { id: "2", name: "Michael Chen", rating: 4.7, reviewCount: 89, services: ["Pediatric Care", "Vaccinations", "Check-ups"], priceInfo: "Negotiable", availability: "Available Today", distance: "3.1 mi", responseTime: "~30 min", verified: true },
  { id: "3", name: "Emily Rodriguez", rating: 4.8, reviewCount: 64, services: ["Elder Care", "Medication Mgmt", "Rehab"], priceInfo: "From $50/hr", availability: "Available Now", distance: "1.8 mi", responseTime: "~10 min", verified: true },
  { id: "4", name: "David Kim", rating: 4.6, reviewCount: 45, services: ["Physical Therapy", "Post-Op Care"], priceInfo: "From $55/hr", availability: "Busy", distance: "4.5 mi", responseTime: "~1 hr", verified: false },
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="py-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find a Nurse</h1>
          <p className="text-muted-foreground">Search verified healthcare professionals near you</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Service or keyword..." value={query} onChange={(e) => setQuery(e.target.value)} className="pl-10" />
          </div>
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Location..." value={location} onChange={(e) => setLocation(e.target.value)} className="pl-10" />
          </div>
          <Button variant="outline" className="gap-2"><SlidersHorizontal className="h-4 w-4" /> Filters</Button>
          <Button>Search</Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {["Home Care", "Pediatric", "Elder Care", "Injections", "Rehab", "Check-ups"].map((cat) => (
            <Button key={cat} variant="outline" size="sm" className="rounded-full">{cat}</Button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">{mockNurses.length} nurses found</span>
          <select className="text-sm border border-input rounded-md px-2 py-1 bg-background">
            <option>Sort by: Distance</option>
            <option>Sort by: Rating</option>
            <option>Sort by: Newest</option>
            <option>Sort by: Response Speed</option>
          </select>
        </div>

        <div className="space-y-4">
          {mockNurses.map((nurse) => (
            <NurseCard key={nurse.id} {...nurse} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
