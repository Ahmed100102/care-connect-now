import { Card, CardContent } from "@/components/ui/card";
import StatusBadge from "@/components/shared/StatusBadge";
import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NurseCardProps {
  id: string;
  name: string;
  photo?: string;
  rating: number;
  reviewCount: number;
  services: string[];
  priceInfo: string;
  availability: string;
  distance?: string;
  responseTime?: string;
  verified: boolean;
}

const NurseCard = ({ id, name, photo, rating, reviewCount, services, priceInfo, availability, distance, responseTime, verified }: NurseCardProps) => (
  <Card className="group overflow-hidden transition-shadow hover:shadow-md">
    <CardContent className="p-4">
      <div className="flex gap-4">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
          {photo ? <img src={photo} alt={name} className="h-full w-full rounded-full object-cover" /> : name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{name}</h3>
            {verified && <StatusBadge status="Verified" />}
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
            <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-warning text-warning" />{rating} ({reviewCount})</span>
            {distance && <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{distance}</span>}
            {responseTime && <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{responseTime}</span>}
          </div>
          <div className="flex flex-wrap gap-1 mb-2">
            {services.slice(0, 3).map((s) => (
              <span key={s} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">{s}</span>
            ))}
            {services.length > 3 && <span className="text-xs text-muted-foreground">+{services.length - 3}</span>}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">{priceInfo}</span>
              <StatusBadge status={availability} />
            </div>
            <Button size="sm" asChild><Link to={`/nurses/${id}`}>View</Link></Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default NurseCard;
