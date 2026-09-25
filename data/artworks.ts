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
    "id": "01",
    "title": "Artwork 2518",
    "category": "Illustration",
    "src": "/images/artworks/IMG_2518.PNG",
    "alt": "Artwork 2518 by Toski",
    "width": 4000,
    "height": 2250,
    "layout": "wide"
  },
  {
    "id": "02",
    "title": "Artwork 2519",
    "category": "Illustration",
    "src": "/images/artworks/IMG_2519.PNG",
    "alt": "Artwork 2519 by Toski",
    "width": 4000,
    "height": 2250,
    "layout": "square"
  },
  {
    "id": "03",
    "title": "Artwork 2520",
    "category": "Illustration",
    "src": "/images/artworks/IMG_2520.PNG",
    "alt": "Artwork 2520 by Toski",
    "width": 4841,
    "height": 4000,
    "layout": "sheet"
  },
  {
    "id": "04",
    "title": "Artwork 2521",
    "category": "Illustration",
    "src": "/images/artworks/IMG_2521.PNG",
    "alt": "Artwork 2521 by Toski",
    "width": 4000,
    "height": 4000,
    "layout": "portrait"
  },
  {
    "id": "05",
    "title": "Artwork 2522",
    "category": "Illustration",
    "src": "/images/artworks/IMG_2522.PNG",
    "alt": "Artwork 2522 by Toski",
    "width": 2779,
    "height": 3508,
    "layout": "concept"
  },
  {
    "id": "06",
    "title": "Artwork 2523",
    "category": "Illustration",
    "src": "/images/artworks/IMG_2523.PNG",
    "alt": "Artwork 2523 by Toski",
    "width": 4000,
    "height": 2828,
    "layout": "night"
  },
  {
    "id": "07",
    "title": "Artwork 2524",
    "category": "Illustration",
    "src": "/images/artworks/IMG_2524.PNG",
    "alt": "Artwork 2524 by Toski",
    "width": 4000,
    "height": 2828,
    "layout": "moment"
  }
];
