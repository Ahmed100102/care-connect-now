import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Stethoscope, Shield, FileText, AlertTriangle, Star } from "lucide-react";

const AdminDashboard = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-foreground">Admin Dashboard</h2>
      <p className="text-muted-foreground">Platform overview and management</p>
    </div>

    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
      {[
        { label: "Total Users", value: "1,245", icon: <Users className="h-5 w-5 text-primary" /> },
        { label: "Total Nurses", value: "312", icon: <Stethoscope className="h-5 w-5 text-primary" /> },
        { label: "Pending Verifications", value: "8", icon: <Shield className="h-5 w-5 text-warning" /> },
        { label: "Active Requests", value: "47", icon: <FileText className="h-5 w-5 text-info" /> },
        { label: "Flagged Content", value: "3", icon: <AlertTriangle className="h-5 w-5 text-destructive" /> },
        { label: "Avg Rating", value: "4.7", icon: <Star className="h-5 w-5 text-warning" /> },
      ].map((s) => (
        <Card key={s.label}>
          <CardContent className="flex flex-col items-center p-4 text-center">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">{s.icon}</div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader><CardTitle className="text-base">Pending Verifications</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[
            { name: "Alice Brown", submitted: "2 days ago", docs: 3 },
            { name: "Robert Wilson", submitted: "3 days ago", docs: 2 },
            { name: "Lisa Park", submitted: "5 days ago", docs: 4 },
          ].map((v, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3">
              <div>
                <p className="text-sm font-medium text-foreground">{v.name}</p>
                <p className="text-xs text-muted-foreground">{v.docs} documents · Submitted {v.submitted}</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-md bg-success/10 px-3 py-1 text-xs font-medium text-success hover:bg-success/20">Approve</button>
                <button className="rounded-md bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive hover:bg-destructive/20">Reject</button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle className="text-base">Recent Disputes</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {[
            { title: "Service quality complaint", parties: "John D. vs Sarah J.", status: "Open" },
            { title: "Pricing disagreement", parties: "Maria L. vs Michael C.", status: "Under Review" },
          ].map((d, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3">
              <div>
                <p className="text-sm font-medium text-foreground">{d.title}</p>
                <p className="text-xs text-muted-foreground">{d.parties}</p>
              </div>
              <span className="rounded-full bg-warning/10 px-2.5 py-0.5 text-xs font-medium text-warning">{d.status}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
);

export default AdminDashboard;
