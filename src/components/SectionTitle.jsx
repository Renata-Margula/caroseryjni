export default function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <div className="text-neutral-400 mt-1">{subtitle}</div>
    </div>
  );
}
