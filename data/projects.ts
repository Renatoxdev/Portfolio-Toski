import { artworks } from "./artworks";

const entries = [
  ["The Wandering Isle", "personalProject"],
  ["Amberlane", "originalWorld"],
  ["Cloudreach", "environmentStudy"],
  ["Fragments", "characterExploration"],
  ["The Silent Grove", "environmentStudy"],
  ["Nightfall", "moodExploration"],
  ["Kindred", "creatureDesign"],
  ["Sailward", "visualDevelopmentCategory"],
  ["Small Moments", "personalProject"],
  ["Beyond the Ridge", "environmentStudy"],
  ["Echoes", "visualExploration"],
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
