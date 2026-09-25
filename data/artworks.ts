export const categories = [
  "all",
  "illustration",
  "characters",
  "environments",
  "sketches",
] as const;
export type Category = (typeof categories)[number];
export type Artwork = {
  id: string;
  number: string;
  category: Exclude<Category, "all">;
  src: string;
  width: number;
  height: number;
};
export const artworks: Artwork[] = [
  {
    "id": "01",
    "number": "2518",
    "category": "illustration",
    "src": "/images/artworks/IMG_2518.PNG",
    "width": 4000,
    "height": 2250
  },
  {
    "id": "02",
    "number": "2519",
    "category": "illustration",
    "src": "/images/artworks/IMG_2519.PNG",
    "width": 4000,
    "height": 2250
  },
  {
    "id": "03",
    "number": "2520",
    "category": "illustration",
    "src": "/images/artworks/IMG_2520.PNG",
    "width": 4841,
    "height": 4000
  },
  {
    "id": "04",
    "number": "2521",
    "category": "illustration",
    "src": "/images/artworks/IMG_2521.PNG",
    "width": 4000,
    "height": 4000
  },
  {
    "id": "05",
    "number": "2522",
    "category": "illustration",
    "src": "/images/artworks/IMG_2522.PNG",
    "width": 2779,
    "height": 3508
  },
  {
    "id": "06",
    "number": "2523",
    "category": "illustration",
    "src": "/images/artworks/IMG_2523.PNG",
    "width": 4000,
    "height": 2828
  },
  {
    "id": "07",
    "number": "2524",
    "category": "illustration",
    "src": "/images/artworks/IMG_2524.PNG",
    "width": 4000,
    "height": 2828
  }
];
