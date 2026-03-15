type DashboardCardProps = {
  label: string;
  value: string;
  trend: string;
};

export function DashboardCard({ label, value, trend }: DashboardCardProps) {
  return (
    <article className="dashboard-card">
      <p className="card-label">{label}</p>
      <p className="card-value">{value}</p>
      <p className="card-trend">{trend}</p>
    </article>
  );
}
