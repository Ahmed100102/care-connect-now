import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Shield, MessageSquare, Star, ArrowRight, Heart, Stethoscope, Syringe, Baby, Brain, Pill } from "lucide-react";

const categories = [
  { icon: <Heart className="h-6 w-6" />, name: "Home Care", count: 124 },
  { icon: <Stethoscope className="h-6 w-6" />, name: "Check-ups", count: 89 },
  { icon: <Syringe className="h-6 w-6" />, name: "Injections", count: 67 },
  { icon: <Baby className="h-6 w-6" />, name: "Pediatric", count: 45 },
  { icon: <Brain className="h-6 w-6" />, name: "Rehab", count: 56 },
  { icon: <Pill className="h-6 w-6" />, name: "Medication", count: 78 },
];

const steps = [
  { step: "1", title: "Search & Discover", desc: "Find nurses by service, location, and availability." },
  { step: "2", title: "Request & Negotiate", desc: "Send requests, discuss details, and agree on pricing via chat." },
  { step: "3", title: "Confirm & Receive Care", desc: "Once agreed, confirm your booking and receive quality care at home." },
];

const LandingPage = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-background py-20 md:py-28">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl mb-6 animate-fade-in">
            Healthcare,{" "}
            <span className="text-primary">On Your Terms</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Connect with verified nurses in your area. Request services, negotiate pricing, and book care — all from one platform.
          </p>

          <div className="mx-auto max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="h-12 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Your location"
                  className="h-12 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button size="lg" className="h-12 px-8" asChild>
                <Link to="/search">Search</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
    </section>

    {/* Categories */}
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Browse by Category</h2>
          <p className="text-muted-foreground">Explore services tailored to your healthcare needs</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link to="/search" key={cat.name}>
              <Card className="group cursor-pointer transition-all hover:shadow-md hover:border-primary/30">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{cat.name}</h3>
                  <span className="text-xs text-muted-foreground">{cat.count} nurses</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">How It Works</h2>
          <p className="text-muted-foreground">Simple, transparent, and on your terms</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust */}
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted & Verified Professionals</h2>
            <p className="text-muted-foreground mb-6">Every nurse on CareConnect goes through a thorough verification process including license checks, background screening, and credential validation.</p>
            <ul className="space-y-3">
              {[
                { icon: <Shield className="h-5 w-5 text-primary" />, text: "License & credential verification" },
                { icon: <MessageSquare className="h-5 w-5 text-primary" />, text: "Direct chat before booking" },
                { icon: <Star className="h-5 w-5 text-primary" />, text: "Transparent ratings & reviews" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-72 w-full max-w-sm rounded-2xl bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
              <Shield className="h-24 w-24 text-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTAs */}
    <section className="bg-primary py-16 md:py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-primary-foreground mb-3">Need Care?</h2>
            <p className="text-primary-foreground/80 mb-5">Find and book a verified nurse near you in minutes.</p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">Find a Nurse <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-primary-foreground mb-3">Are You a Nurse?</h2>
            <p className="text-primary-foreground/80 mb-5">Join our platform, set your terms, and grow your practice.</p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/register">Join as a Nurse <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default LandingPage;
