import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import RoleGuard from "@/components/RoleGuard";
import PublicLayout from "@/components/layout/PublicLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import LandingPage from "@/pages/LandingPage";
import AboutPage from "@/pages/AboutPage";
import SearchPage from "@/pages/SearchPage";
import NurseProfilePage from "@/pages/NurseProfilePage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import CustomerDashboard from "@/pages/customer/CustomerDashboard";
import NurseDashboard from "@/pages/nurse/NurseDashboard";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import PlaceholderPage from "@/pages/PlaceholderPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/nurses" element={<SearchPage />} />
              <Route path="/nurses/:id" element={<NurseProfilePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<PlaceholderPage title="Reset Password" description="Enter your new password" />} />
            </Route>

            {/* Customer routes */}
            <Route element={<RoleGuard allowedRoles={["customer"]}><DashboardLayout /></RoleGuard>}>
              <Route path="/customer/dashboard" element={<CustomerDashboard />} />
              <Route path="/customer/profile" element={<PlaceholderPage title="My Profile" description="Manage your personal information" />} />
              <Route path="/customer/addresses" element={<PlaceholderPage title="Saved Addresses" description="Manage your delivery addresses" />} />
              <Route path="/customer/requests" element={<PlaceholderPage title="My Requests" description="View and manage your service requests" />} />
              <Route path="/customer/requests/new" element={<PlaceholderPage title="New Request" description="Create a new service request" />} />
              <Route path="/customer/requests/:id" element={<PlaceholderPage title="Request Details" description="View request details and negotiations" />} />
              <Route path="/customer/bookings" element={<PlaceholderPage title="Bookings" description="View your upcoming and past bookings" />} />
              <Route path="/customer/messages" element={<PlaceholderPage title="Messages" description="Chat with nurses about your requests" />} />
              <Route path="/customer/reviews" element={<PlaceholderPage title="Reviews" description="Your reviews and ratings" />} />
              <Route path="/customer/notifications" element={<PlaceholderPage title="Notifications" description="Stay updated on your requests" />} />
              <Route path="/customer/settings" element={<PlaceholderPage title="Settings" description="Manage your account settings" />} />
            </Route>

            {/* Nurse routes */}
            <Route element={<RoleGuard allowedRoles={["nurse"]}><DashboardLayout /></RoleGuard>}>
              <Route path="/nurse/dashboard" element={<NurseDashboard />} />
              <Route path="/nurse/profile" element={<PlaceholderPage title="Profile Editor" description="Edit your public nurse profile" />} />
              <Route path="/nurse/verification" element={<PlaceholderPage title="Verification" description="Manage your verification documents" />} />
              <Route path="/nurse/services" element={<PlaceholderPage title="Services" description="Manage your offered services" />} />
              <Route path="/nurse/service-area" element={<PlaceholderPage title="Service Area" description="Define your coverage area on the map" />} />
              <Route path="/nurse/availability" element={<PlaceholderPage title="Availability" description="Set your working hours and status" />} />
              <Route path="/nurse/requests" element={<PlaceholderPage title="Incoming Requests" description="View and respond to service requests" />} />
              <Route path="/nurse/requests/:id" element={<PlaceholderPage title="Request Details" description="View and manage request details" />} />
              <Route path="/nurse/bookings" element={<PlaceholderPage title="Schedule" description="View your appointments and visits" />} />
              <Route path="/nurse/messages" element={<PlaceholderPage title="Messages" description="Chat with patients about requests" />} />
              <Route path="/nurse/reviews" element={<PlaceholderPage title="Reviews" description="View your ratings and reviews" />} />
              <Route path="/nurse/notifications" element={<PlaceholderPage title="Notifications" description="Stay updated on your requests" />} />
              <Route path="/nurse/settings" element={<PlaceholderPage title="Settings" description="Manage your account settings" />} />
            </Route>

            {/* Admin routes */}
            <Route element={<RoleGuard allowedRoles={["admin"]}><DashboardLayout /></RoleGuard>}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/verifications" element={<PlaceholderPage title="Verification Management" description="Review and approve nurse verifications" />} />
              <Route path="/admin/users" element={<PlaceholderPage title="User Management" description="Manage platform users" />} />
              <Route path="/admin/nurses" element={<PlaceholderPage title="Nurse Management" description="Manage registered nurses" />} />
              <Route path="/admin/categories" element={<PlaceholderPage title="Service Categories" description="Manage service categories" />} />
              <Route path="/admin/requests" element={<PlaceholderPage title="Request Monitoring" description="Monitor platform requests and bookings" />} />
              <Route path="/admin/reports" element={<PlaceholderPage title="Reports & Disputes" description="Handle reports and disputes" />} />
              <Route path="/admin/reviews" element={<PlaceholderPage title="Review Moderation" description="Moderate platform reviews" />} />
              <Route path="/admin/settings" element={<PlaceholderPage title="Platform Settings" description="Configure platform settings" />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
