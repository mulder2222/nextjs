type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p className="section-description">{description}</p>
    </header>
  );
}
