import { deliveries } from "../../lib/dashboard-data";
import { SectionHeading } from "../../components/layout/section-heading";

export default function DeliveriesPage() {
  return (
    <main className="page">
      <SectionHeading
        eyebrow="Deliveries"
        title="Webhook delivery monitoring"
        description="A route focused on table-heavy operational UI, filtering cues, and status-oriented scanning."
      />

      <section className="panel">
        <div className="toolbar">
          <input
            aria-label="Search deliveries"
            className="search-input"
            defaultValue=""
            placeholder="Search by target, order, or error"
          />
          <div className="filter-row">
            <button className="filter-chip active">All</button>
            <button className="filter-chip">Failed</button>
            <button className="filter-chip">Pending</button>
            <button className="filter-chip">Delivered</button>
          </div>
        </div>

        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Target</th>
                <th>Status</th>
                <th>Attempts</th>
                <th>Last Error</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((delivery) => (
                <tr key={delivery.id}>
                  <td>{delivery.id}</td>
                  <td>{delivery.target}</td>
                  <td>
                    <span className={`status-pill status-${delivery.status}`}>
                      {delivery.status}
                    </span>
                  </td>
                  <td>{delivery.attempts}</td>
                  <td>{delivery.lastError}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
