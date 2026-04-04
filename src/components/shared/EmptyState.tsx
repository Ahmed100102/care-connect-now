interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

const EmptyState = ({ icon, title, description, action }: EmptyStateProps) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
    <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
    {description && <p className="text-sm text-muted-foreground mb-4 max-w-sm">{description}</p>}
    {action}
  </div>
);

export default EmptyState;
