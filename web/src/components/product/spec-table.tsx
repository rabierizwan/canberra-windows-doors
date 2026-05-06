import type { ProductSpec } from "@/types/product";

const FIELD_LABELS: Record<keyof ProductSpec, string> = {
  model: "Model",
  openingStyle: "Opening Style",
  profileThickness: "Profile Thickness",
  profileWidth: "Profile Width",
  glassOptions: "Glass Options",
  glassStandard: "Glass Standard",
  extrusionProfile: "Extrusion Profile",
  standardHardware: "Standard Hardware",
  warranty: "Warranty",
};

export function SpecTable({ spec }: { spec: ProductSpec }) {
  const rows = (Object.keys(FIELD_LABELS) as (keyof ProductSpec)[]).filter(
    (k) => spec[k],
  );
  if (rows.length === 0) return null;

  return (
    <div className="border border-rule/60 bg-cream-50">
      <dl className="divide-y divide-rule/60">
        {rows.map((key) => (
          <div
            key={key}
            className="grid grid-cols-2 gap-4 px-6 py-4 text-sm"
          >
            <dt className="eyebrow text-muted not-italic">{FIELD_LABELS[key]}</dt>
            <dd className="text-ink font-medium">{spec[key]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
