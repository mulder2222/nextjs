import { SectionHeading } from "../../components/layout/section-heading";

const notes = [
  "Uses the App Router instead of the old tutorial-style Pages Router setup.",
  "Treats internal tooling as a product surface, not as a throwaway admin screen.",
  "Optimizes for structure, scanning, and dashboard composition over animation spam.",
];

export default function InsightsPage() {
  return (
    <main className="page">
      <SectionHeading
        eyebrow="Insights"
        title="Frontend implementation notes"
        description="A lightweight route that explains the UI choices behind the dashboard."
      />

      <section className="panel note-grid">
        {notes.map((note) => (
          <article className="note-card" key={note}>
            <p>{note}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
