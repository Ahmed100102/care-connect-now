import { Outlet } from "react-router-dom";
import PublicNavbar from "./PublicNavbar";

const PublicLayout = () => (
  <div className="min-h-screen flex flex-col">
    <PublicNavbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">C</span>
              </div>
              <span className="text-lg font-bold">CareConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">Connecting patients with trusted healthcare professionals, on your terms.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">For Patients</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Find a Nurse</li><li>How It Works</li><li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">For Nurses</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Join as a Nurse</li><li>Verification</li><li>Resources</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About</li><li>Contact</li><li>Privacy</li><li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 CareConnect. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
);

export default PublicLayout;
