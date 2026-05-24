/**
 * Cloudinary-hosted technical drawings — CAD cross-section / installation
 * detail sheets. Two frame series × four product types = 8 PDFs.
 *
 *   Series  "80"  → standard aluminium frame
 *   Series  "100" → thermal-broken frame
 *
 *   Type    AW → Awning Window
 *           GD → Glazed Door (hinged / swing)
 *           SD → Sliding Door
 *           SW → Sliding Window
 *
 * USAGE
 *   import { technicalDrawings, getDrawings } from "@/lib/documents";
 *   getDrawings({ type: "SD" })            // both series of the sliding door
 *   getDrawings({ series: "100" })         // all four thermal-broken sheets
 */

export type DrawingSeries = "80" | "100";
export type DrawingType = "AW" | "GD" | "SD" | "SW";

export type TechnicalDrawing = {
  /** "80" = standard frame · "100" = thermal-broken frame */
  series: DrawingSeries;
  /** Product-type code */
  type: DrawingType;
  /** Human-readable product type, e.g. "Sliding Window" */
  typeLabel: string;
  /** Full display title, e.g. "100 Thermally Broken Windows Sliding Window" */
  title: string;
  /** Cloudinary-hosted PDF URL */
  url: string;
};

const SERIES_LABEL: Record<DrawingSeries, string> = {
  "80": "80 mm Semi-Commercial Series",
  "100": "100 mm Thermally Broken Windows",
};

const TYPE_LABEL: Record<DrawingType, string> = {
  AW: "Awning Window",
  GD: "Glazed Door",
  SD: "Sliding Door",
  SW: "Sliding Window",
};

/** Raw Cloudinary URLs, keyed by `${series}${type}`. */
const DRAWING_URLS: Record<string, string> = {
  "80AW": "https://res.cloudinary.com/drlrwvdta/image/upload/v1779159331/80AW_azvkzj.pdf",
  "80GD": "https://res.cloudinary.com/drlrwvdta/image/upload/v1779159331/80GD_yeaqyl.pdf",
  "80SD": "https://res.cloudinary.com/drlrwvdta/image/upload/v1779159331/80SD_wpc3ax.pdf",
  "80SW": "https://res.cloudinary.com/drlrwvdta/image/upload/v1779159331/80SW_z4byns.pdf",
  "100AW": "https://res.cloudinary.com/drlrwvdta/image/upload/v1779159331/100AW_lhmoua.pdf",
  "100GD": "https://res.cloudinary.com/drlrwvdta/image/upload/v1779159331/100GD_m7beji.pdf",
  "100SD": "https://res.cloudinary.com/drlrwvdta/image/upload/v1779159332/100SD_uv5lkj.pdf",
  "100SW": "https://res.cloudinary.com/drlrwvdta/image/upload/v1779159332/100SW_rgwrj9.pdf",
};

/** All 8 technical drawings, ordered 80 series first, then 100 series. */
export const technicalDrawings: TechnicalDrawing[] = (
  ["80", "100"] as DrawingSeries[]
).flatMap((series) =>
  (["AW", "GD", "SD", "SW"] as DrawingType[]).map((type) => ({
    series,
    type,
    typeLabel: TYPE_LABEL[type],
    title: `${SERIES_LABEL[series]} ${TYPE_LABEL[type]}`,
    url: DRAWING_URLS[`${series}${type}`],
  })),
);

/** Filter the drawing set by series and/or type. */
export function getDrawings(filter: {
  series?: DrawingSeries;
  type?: DrawingType;
}): TechnicalDrawing[] {
  return technicalDrawings.filter(
    (d) =>
      (filter.series === undefined || d.series === filter.series) &&
      (filter.type === undefined || d.type === filter.type),
  );
}

/** Look up a single drawing. */
export function getDrawing(
  series: DrawingSeries,
  type: DrawingType,
): TechnicalDrawing | undefined {
  return technicalDrawings.find((d) => d.series === series && d.type === type);
}
