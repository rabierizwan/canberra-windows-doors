/**
 * Renders a labelled list of options as inline pills.
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
      <h4 className="eyebrow eyebrow-muted not-italic">{label}</h4>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="border border-rule px-3 py-1.5 text-xs text-green/80 bg-ivory-warm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
