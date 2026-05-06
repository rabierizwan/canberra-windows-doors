/**
 * Renders a labelled list of options as inline pills.
 * Used for glass types, hardware brands, colour options, flyscreens, etc.
 */
export function OptionList({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  if (!items?.length) return null;
  return (
    <div>
      <h4 className="eyebrow text-muted not-italic">{label}</h4>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="border border-rule/60 px-3 py-1.5 text-xs text-ink/80 bg-cream-50"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
