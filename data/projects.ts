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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  images: [
    {
      ...artworks[i % artworks.length],
      caption: "01",
    },
    {
      ...artworks[(i + 2) % artworks.length],
      caption: "02",
    },
    {
      ...artworks[(i + 4) % artworks.length],
      caption: "03",
    },
  ],
}));
