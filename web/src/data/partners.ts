export type Partner = {
  name: string;
  /** Cloudinary URL of the logo (preferably SVG). Leave undefined to render text fallback. */
  logo?: string;
};

export const partners: Partner[] = [
  { name: "SIEGENIA" },
  { name: "Doric" },
  { name: "Hoppe" },
  { name: "Roto" },
  { name: "Kinlong" },
];
