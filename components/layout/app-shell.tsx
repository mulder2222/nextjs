import Link from "next/link";

const links = [
  {
    href: "/",
    title: "Overview",
    copy: "Summary cards and recent events.",
  },
  {
    href: "/deliveries",
    title: "Deliveries",
    copy: "Table-heavy monitoring and retry cues.",
  },
  {
    href: "/insights",
    title: "Insights",
    copy: "Notes about implementation direction.",
  },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-kicker">Next.js Showcase</span>
          <h1 className="brand-title">Ops UI</h1>
          <p className="brand-copy">
            A frontend-only dashboard demo built to show structure, scanning,
            and route-based composition.
          </p>
        </div>

        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <Link className="nav-link" href={link.href} key={link.href}>
              <span className="nav-title">{link.title}</span>
              <span className="nav-copy">{link.copy}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <div className="content">{children}</div>
    </div>
  );
}
