import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: string;
}

const statusStyles: Record<string, string> = {
  available: "bg-success/10 text-success border-success/20",
  "available now": "bg-success/10 text-success border-success/20",
  "available today": "bg-info/10 text-info border-info/20",
  busy: "bg-warning/10 text-warning border-warning/20",
  offline: "bg-muted text-muted-foreground border-border",
  pending: "bg-warning/10 text-warning border-warning/20",
  approved: "bg-success/10 text-success border-success/20",
  rejected: "bg-destructive/10 text-destructive border-destructive/20",
  confirmed: "bg-success/10 text-success border-success/20",
  completed: "bg-primary/10 text-primary border-primary/20",
  cancelled: "bg-destructive/10 text-destructive border-destructive/20",
  negotiating: "bg-accent/10 text-accent-foreground border-accent/20",
  sent: "bg-info/10 text-info border-info/20",
  draft: "bg-muted text-muted-foreground border-border",
  "in progress": "bg-info/10 text-info border-info/20",
  expired: "bg-muted text-muted-foreground border-border",
  verified: "bg-success/10 text-success border-success/20",
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const style = statusStyles[status.toLowerCase()] ?? "bg-muted text-muted-foreground border-border";
  return (
    <Badge variant="outline" className={`${style} capitalize text-xs font-medium`}>
      {status}
    </Badge>
  );
};

export default StatusBadge;
