export const categories = [
  "All",
  "Illustration",
  "Characters",
  "Environments",
  "Sketches",
] as const;
export type Category = (typeof categories)[number];
export type Artwork = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  src: string;
  alt: string;
  width: number;
  height: number;
  layout: string;
};
export const artworks: Artwork[] = [
  {
    id: "01",
    title: "A Brighter Tomorrow",
    category: "Illustration",
    src: "/images/artworks/01.svg",
    alt: "Neutral sage placeholder for A Brighter Tomorrow",
    width: 1600,
    height: 820,
    layout: "wide",
  },
  {
    id: "02",
    title: "The Long Road",
    category: "Illustration",
    src: "/images/artworks/02.svg",
    alt: "Neutral stone placeholder for The Long Road",
    width: 900,
    height: 820,
    layout: "square",
  },
  {
    id: "03",
    title: "Character Study",
    category: "Characters",
    src: "/images/artworks/03.svg",
    alt: "Warm ivory placeholder for a character concept sheet",
    width: 1200,
    height: 780,
    layout: "sheet",
  },
  {
    id: "04",
    title: "The Ancient Tree",
    category: "Environments",
    src: "/images/artworks/04.svg",
    alt: "Muted green placeholder for The Ancient Tree",
    width: 800,
    height: 1100,
    layout: "portrait",
  },
  {
    id: "05",
    title: "Creature Concepts",
    category: "Characters",
    src: "/images/artworks/05.svg",
    alt: "Warm ivory placeholder for creature concepts",
    width: 1200,
    height: 650,
    layout: "concept",
  },
  {
    id: "06",
    title: "Lantern Nights",
    category: "Illustration",
    src: "/images/artworks/06.svg",
    alt: "Muted blue placeholder for Lantern Nights",
    width: 800,
    height: 1100,
    layout: "night",
  },
  {
    id: "07",
    title: "Quiet Moments",
    category: "Illustration",
    src: "/images/artworks/07.svg",
    alt: "Warm stone placeholder for Quiet Moments",
    width: 1100,
    height: 650,
    layout: "moment",
  },
  {
    id: "08",
    title: "Lost Ruins",
    category: "Environments",
    src: "/images/artworks/08.svg",
    alt: "Soft sage placeholder for Lost Ruins",
    width: 1200,
    height: 650,
    layout: "ruins",
  },
  {
    id: "09",
    title: "Environment Studies",
    category: "Sketches",
    src: "/images/artworks/09.svg",
    alt: "Ivory placeholder for environment sketches",
    width: 1100,
    height: 650,
    layout: "sketch",
  },
];
