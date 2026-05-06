export type Testimonial = {
  quote: string;
  name: string;
  /** Suburb or context — adds local trust */
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We recently had all our interior doors replaced and we're extremely satisfied. The doors look fantastic, and the installation was done with minimal disruption to our daily life.",
    name: "Isabella Clark",
    context: "Wright, ACT",
  },
  {
    quote:
      "Top-notch service with both our window and door installations. The quality of the products and workmanship exceeded our expectations. Our home feels like new.",
    name: "Daniel White",
    context: "Belconnen, ACT",
  },
  {
    quote:
      "I'm extremely happy with my new home windows — they have enhanced our home's appearance and made it so much more energy-efficient. The installation was quick and the team was very professional.",
    name: "Nathan Green",
    context: "Inner North, Canberra",
  },
];
