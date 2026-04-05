import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, User, MapPin, Search, FileText, Calendar, MessageSquare,
  Star, Bell, Settings, LogOut, Shield, Stethoscope, Clock, Menu, X
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const customerNav: NavItem[] = [
  { href: "/customer/dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
  { href: "/customer/profile", label: "Profile", icon: <User className="h-4 w-4" /> },
  { href: "/customer/addresses", label: "Addresses", icon: <MapPin className="h-4 w-4" /> },
  { href: "/customer/requests", label: "Requests", icon: <FileText className="h-4 w-4" /> },
  { href: "/customer/bookings", label: "Bookings", icon: <Calendar className="h-4 w-4" /> },
  { href: "/customer/messages", label: "Messages", icon: <MessageSquare className="h-4 w-4" /> },
  { href: "/customer/reviews", label: "Reviews", icon: <Star className="h-4 w-4" /> },
  { href: "/customer/notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
  { href: "/customer/settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
];

const nurseNav: NavItem[] = [
  { href: "/nurse/dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
  { href: "/nurse/profile", label: "Profile", icon: <User className="h-4 w-4" /> },
  { href: "/nurse/verification", label: "Verification", icon: <Shield className="h-4 w-4" /> },
  { href: "/nurse/services", label: "Services", icon: <Stethoscope className="h-4 w-4" /> },
  { href: "/nurse/service-area", label: "Service Area", icon: <MapPin className="h-4 w-4" /> },
  { href: "/nurse/availability", label: "Availability", icon: <Clock className="h-4 w-4" /> },
  { href: "/nurse/requests", label: "Requests", icon: <FileText className="h-4 w-4" /> },
  { href: "/nurse/bookings", label: "Bookings", icon: <Calendar className="h-4 w-4" /> },
  { href: "/nurse/messages", label: "Messages", icon: <MessageSquare className="h-4 w-4" /> },
  { href: "/nurse/reviews", label: "Reviews", icon: <Star className="h-4 w-4" /> },
  { href: "/nurse/notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
  { href: "/nurse/settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
];

const adminNav: NavItem[] = [
  { href: "/admin/dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
  { href: "/admin/verifications", label: "Verifications", icon: <Shield className="h-4 w-4" /> },
  { href: "/admin/users", label: "Users", icon: <User className="h-4 w-4" /> },
  { href: "/admin/nurses", label: "Nurses", icon: <Stethoscope className="h-4 w-4" /> },
  { href: "/admin/categories", label: "Categories", icon: <FileText className="h-4 w-4" /> },
  { href: "/admin/requests", label: "Requests", icon: <Search className="h-4 w-4" /> },
  { href: "/admin/reports", label: "Reports", icon: <FileText className="h-4 w-4" /> },
  { href: "/admin/reviews", label: "Reviews", icon: <Star className="h-4 w-4" /> },
  { href: "/admin/settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
];

const navMap = { customer: customerNav, nurse: nurseNav, admin: adminNav };
const roleLabels = { customer: "Patient", nurse: "Nurse", admin: "Admin" };

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) return null;
  const navItems = navMap[user.role];

  const SidebarContent = () => (
    <>
      <div className="flex items-center gap-2 px-4 py-5 border-b border-sidebar-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <span className="text-sm font-bold text-primary-foreground">C</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-sidebar-foreground">CareConnect</span>
          <span className="text-xs text-muted-foreground">{roleLabels[user.role]} Portal</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const active = location.pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-lg px-3 py-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
            {user.name[0]?.toUpperCase()}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-sidebar-foreground">{user.name}</span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground" onClick={logout}>
          <LogOut className="h-4 w-4" /> Sign Out
        </Button>
      </div>
    </>
  );

  return (
    <div className="flex h-screen">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 flex-shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-foreground/20" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-64 flex-col border-r border-sidebar-border bg-sidebar flex">
            <SidebarContent />
          </aside>
        </div>
      )}

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center gap-3 border-b border-border bg-background px-4 md:px-6">
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">
            {navItems.find((n) => location.pathname.startsWith(n.href))?.label ?? "Dashboard"}
          </h1>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
