import { Link } from "react-router-dom";
import { Shield, MessageSquare, Star, Search, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { title: "Search", desc: "Browse nurses by service, location, and availability.", icon: <Search className="h-6 w-6" /> },
  { title: "Request", desc: "Send a request to one or multiple nurses. Chat starts immediately.", icon: <MessageSquare className="h-6 w-6" /> },
  { title: "Negotiate", desc: "Discuss details, pricing, and timing directly with nurses.", icon: <Star className="h-6 w-6" /> },
  { title: "Book", desc: "Confirm the agreed terms and receive care at your location.", icon: <MapPin className="h-6 w-6" /> },
];

const AboutPage = () => (
  <div>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-foreground mb-6">How CareConnect Works</h1>
        <p className="text-lg text-muted-foreground">
          CareConnect is a healthcare marketplace where patients connect directly with verified nurses.
          Prices are negotiable, communication is instant, and care happens on your terms.
        </p>
      </div>
    </section>

    <section className="bg-muted/30 py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">{s.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Why CareConnect?</h2>
        <div className="space-y-4">
          {[
            { icon: <Shield className="h-5 w-5 text-primary" />, title: "Verified Professionals", desc: "Every nurse is verified with license and credential checks." },
            { icon: <MessageSquare className="h-5 w-5 text-primary" />, title: "Transparent Negotiation", desc: "Chat and negotiate before committing to a booking." },
            { icon: <MapPin className="h-5 w-5 text-primary" />, title: "Privacy First", desc: "Your exact address stays hidden until you confirm a booking." },
          ].map((f) => (
            <div key={f.title} className="flex gap-4 rounded-lg border border-border p-4">
              <div className="flex-shrink-0 mt-0.5">{f.icon}</div>
              <div>
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button size="lg" asChild><Link to="/register">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
