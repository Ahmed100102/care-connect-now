import EmptyState from "@/components/shared/EmptyState";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => (
  <EmptyState
    icon={<Construction className="h-12 w-12" />}
    title={title}
    description={description ?? "This page is under construction. Check back soon!"}
  />
);

export default PlaceholderPage;
