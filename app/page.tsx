import { DashboardCard } from "../components/dashboard/dashboard-card";
import { SectionHeading } from "../components/layout/section-heading";
import { healthCards, recentEvents } from "../lib/dashboard-data";

export default function HomePage() {
  return (
    <main className="page">
      <SectionHeading
        eyebrow="Overview"
        title="Operational health at a glance"
        description="A dense but readable dashboard layout built with the Next.js App Router and reusable interface primitives."
      />

      <section className="card-grid">
        {healthCards.map((card) => (
          <DashboardCard key={card.label} {...card} />
        ))}
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Recent events</h2>
          <p>Designed for scanning instead of decoration.</p>
        </div>

        <div className="event-list">
          {recentEvents.map((event) => (
            <article className="event-row" key={event.id}>
              <div>
                <p className="event-title">{event.title}</p>
                <p className="event-meta">{event.meta}</p>
              </div>
              <span className={`status-pill status-${event.status}`}>
                {event.status}
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
