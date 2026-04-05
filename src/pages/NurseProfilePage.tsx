import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StatusBadge from "@/components/shared/StatusBadge";
import { Star, MapPin, Clock, Shield, MessageSquare } from "lucide-react";

const NurseProfilePage = () => {
  const { id } = useParams();

  // Mock data
  const nurse = {
    id,
    name: "Sarah Johnson",
    bio: "Experienced registered nurse with 8+ years in home healthcare. Specialized in wound care, IV therapy, and post-operative care. Passionate about providing compassionate, personalized care.",
    rating: 4.9,
    reviewCount: 128,
    verified: true,
    availability: "Available Now",
    responseTime: "~15 min",
    languages: ["English", "Spanish"],
    experience: "8 years",
    services: [
      { name: "Home Care Visit", price: "From $45/hr", negotiable: true },
      { name: "Wound Care", price: "From $60/visit", negotiable: true },
      { name: "IV Therapy", price: "From $80/session", negotiable: true },
      { name: "Medication Management", price: "From $40/visit", negotiable: false },
    ],
    reviews: [
      { author: "John D.", rating: 5, text: "Sarah was incredibly professional and caring. Highly recommend!", date: "2 weeks ago" },
      { author: "Maria L.", rating: 5, text: "Great experience. She explained everything thoroughly and made me feel comfortable.", date: "1 month ago" },
      { author: "Tom R.", rating: 4, text: "Very knowledgeable and punctual. Would book again.", date: "2 months ago" },
    ],
  };

  return (
    <div className="py-8">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start mb-8">
          <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary text-3xl font-bold">
            {nurse.name[0]}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-foreground">{nurse.name}</h1>
              {nurse.verified && <StatusBadge status="Verified" />}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-warning text-warning" />{nurse.rating} ({nurse.reviewCount} reviews)</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{nurse.responseTime}</span>
              <span className="flex items-center gap-1"><Shield className="h-4 w-4" />{nurse.experience} experience</span>
            </div>
            <StatusBadge status={nurse.availability} />
          </div>
          <Button size="lg" className="gap-2" asChild>
            <Link to={`/customer/requests/new?nurse=${id}`}>
              <MessageSquare className="h-4 w-4" /> Request Service
            </Link>
          </Button>
        </div>

        {/* Bio */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="font-semibold text-foreground mb-2">About</h2>
            <p className="text-sm text-muted-foreground">{nurse.bio}</p>
            <div className="mt-4 flex gap-4 text-sm">
              <div><span className="text-muted-foreground">Languages:</span> <span className="text-foreground">{nurse.languages.join(", ")}</span></div>
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="font-semibold text-foreground mb-4">Services</h2>
            <div className="space-y-3">
              {nurse.services.map((s) => (
                <div key={s.name} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <span className="text-sm font-medium text-foreground">{s.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{s.price}</span>
                    {s.negotiable && <span className="text-xs text-primary font-medium">Negotiable</span>}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Service Area */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="font-semibold text-foreground mb-2">Service Area</h2>
            <div className="h-48 rounded-lg bg-muted flex items-center justify-center">
              <MapPin className="h-8 w-8 text-muted-foreground" />
              <span className="ml-2 text-sm text-muted-foreground">Map preview — Downtown & surrounding areas</span>
            </div>
          </CardContent>
        </Card>

        {/* Reviews */}
        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold text-foreground mb-4">Reviews</h2>
            <div className="space-y-4">
              {nurse.reviews.map((r, i) => (
                <div key={i} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">{r.author}</span>
                      <div className="flex">{Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-3 w-3 fill-warning text-warning" />)}</div>
                    </div>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NurseProfilePage;
