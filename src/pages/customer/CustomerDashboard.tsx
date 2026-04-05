import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/shared/StatusBadge";
import { FileText, Calendar, MessageSquare, MapPin, Search, Plus } from "lucide-react";

const CustomerDashboard = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Welcome back!</h2>
        <p className="text-muted-foreground">Here's an overview of your activity</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" asChild><Link to="/search"><Search className="mr-2 h-4 w-4" />Find Nurse</Link></Button>
        <Button asChild><Link to="/customer/requests/new"><Plus className="mr-2 h-4 w-4" />New Request</Link></Button>
      </div>
    </div>

    <div className="grid gap-4 md:grid-cols-4">
      {[
        { label: "Active Requests", value: "3", icon: <FileText className="h-5 w-5 text-primary" /> },
        { label: "Pending Responses", value: "2", icon: <MessageSquare className="h-5 w-5 text-warning" /> },
        { label: "Confirmed Bookings", value: "1", icon: <Calendar className="h-5 w-5 text-success" /> },
        { label: "Saved Addresses", value: "2", icon: <MapPin className="h-5 w-5 text-info" /> },
      ].map((s) => (
        <Card key={s.label}>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">{s.icon}</div>
            <div>
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader><CardTitle className="text-base">Recent Requests</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[
            { title: "Home Care Visit", nurse: "Sarah J.", status: "Negotiating", date: "Today" },
            { title: "IV Therapy Session", nurse: "Broadcast", status: "Awaiting Responses", date: "Yesterday" },
            { title: "Wound Care", nurse: "Michael C.", status: "Confirmed", date: "Mar 28" },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3">
              <div>
                <p className="text-sm font-medium text-foreground">{r.title}</p>
                <p className="text-xs text-muted-foreground">{r.nurse} · {r.date}</p>
              </div>
              <StatusBadge status={r.status} />
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle className="text-base">Recent Messages</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[
            { from: "Sarah J.", msg: "I can offer $50/hr for that service...", time: "5m ago", unread: true },
            { from: "Michael C.", msg: "Confirmed! See you at 2pm tomorrow.", time: "1h ago", unread: false },
          ].map((m, i) => (
            <div key={i} className={`flex items-start gap-3 rounded-lg border p-3 ${m.unread ? "border-primary/30 bg-primary/5" : "border-border"}`}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold flex-shrink-0">
                {m.from[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{m.from}</p>
                <p className="text-xs text-muted-foreground truncate">{m.msg}</p>
              </div>
              <span className="text-xs text-muted-foreground flex-shrink-0">{m.time}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
);

export default CustomerDashboard;
