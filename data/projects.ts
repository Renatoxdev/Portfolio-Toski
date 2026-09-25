import { artworks } from "./artworks";

const entries = [
  ["The Wandering Isle", "Personal project"],
  ["Amberlane", "Original world"],
  ["Cloudreach", "Environment study"],
  ["Fragments", "Character exploration"],
  ["The Silent Grove", "Environment study"],
  ["Nightfall", "Mood exploration"],
  ["Kindred", "Creature design"],
  ["Sailward", "Visual development"],
  ["Small Moments", "Personal project"],
  ["Beyond the Ridge", "Environment study"],
  ["Echoes", "Visual exploration"],
];
export const projects = entries.map(([title, category], i) => ({
  title,
  category,
  slug: title.toLowerCase().replaceAll(" ", "-"),
  year: "2026",
  image: `/images/projects/${String(i + 1).padStart(2, "0")}.svg`,
  description:
    "A space for worldbuilding, quiet discoveries, and visual storytelling. This sample project presents the editorial structure for a collection of finished works, early sketches, and studies.",
  note: "Project preview · Sample content",
  images: [
    {
      ...artworks[i % artworks.length],
      caption: "01 — World & atmosphere",
    },
    {
      ...artworks[(i + 2) % artworks.length],
      caption: "02 — Shape & character",
    },
    {
      ...artworks[(i + 4) % artworks.length],
      caption: "03 — Details & discoveries",
    },
  ],
}));
