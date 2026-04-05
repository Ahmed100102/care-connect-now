import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/shared/StatusBadge";
import { FileText, Calendar, MessageSquare, Clock, Shield, Users } from "lucide-react";

const NurseDashboard = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Nurse Dashboard</h2>
        <p className="text-muted-foreground">Manage your requests and schedule</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">Status:</span>
        <StatusBadge status="Available Now" />
        <Button variant="outline" size="sm">Change</Button>
      </div>
    </div>

    <div className="grid gap-4 md:grid-cols-4">
      {[
        { label: "New Requests", value: "5", icon: <FileText className="h-5 w-5 text-primary" /> },
        { label: "Active Negotiations", value: "3", icon: <MessageSquare className="h-5 w-5 text-warning" /> },
        { label: "Today's Visits", value: "2", icon: <Calendar className="h-5 w-5 text-success" /> },
        { label: "Verification", value: "Approved", icon: <Shield className="h-5 w-5 text-success" /> },
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
        <CardHeader><CardTitle className="text-base">Incoming Requests</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[
            { title: "Home Care Visit", type: "Direct", status: "New", time: "10 min ago", area: "Downtown" },
            { title: "IV Therapy", type: "Broadcast", status: "New", time: "25 min ago", area: "Midtown" },
            { title: "Wound Care Follow-up", type: "Direct", status: "Negotiating", time: "1h ago", area: "Uptown" },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3">
              <div>
                <p className="text-sm font-medium text-foreground">{r.title}</p>
                <p className="text-xs text-muted-foreground">{r.type} · {r.area} · {r.time}</p>
              </div>
              <StatusBadge status={r.status} />
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle className="text-base">Today's Schedule</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[
            { time: "10:00 AM", title: "Wound Care - John D.", status: "Confirmed" },
            { time: "2:00 PM", title: "Home Visit - Maria L.", status: "In Progress" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-border p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.time}</p>
              </div>
              <StatusBadge status={s.status} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
);

export default NurseDashboard;
