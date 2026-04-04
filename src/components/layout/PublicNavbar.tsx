import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell } from "lucide-react";
import { useState } from "react";

const PublicNavbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/search", label: "Find a Nurse" },
    { href: "/about", label: "How It Works" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">C</span>
          </div>
          <span className="text-xl font-bold text-foreground">CareConnect</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === l.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isAuthenticated && user ? (
            <>
              <Button variant="ghost" size="icon" asChild>
                <Link to={`/${user.role}/notifications`}><Bell className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to={`/${user.role}/dashboard`}>Dashboard</Link>
              </Button>
              <Button variant="outline" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild><Link to="/login">Sign In</Link></Button>
              <Button asChild><Link to="/register">Get Started</Link></Button>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <Link key={l.href} to={l.href} onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted">
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              {isAuthenticated && user ? (
                <>
                  <Button variant="ghost" asChild><Link to={`/${user.role}/dashboard`} onClick={() => setMobileOpen(false)}>Dashboard</Link></Button>
                  <Button variant="outline" onClick={() => { logout(); setMobileOpen(false); }}>Logout</Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" asChild><Link to="/login" onClick={() => setMobileOpen(false)}>Sign In</Link></Button>
                  <Button asChild><Link to="/register" onClick={() => setMobileOpen(false)}>Get Started</Link></Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default PublicNavbar;
