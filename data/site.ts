export const site = {
  name: "Toski",
  landingMark: "/images/brand/toski-mascot.png",
  subtitle: "digitalArtist",
  email: "hello@toski.art",
  description:
    "siteDescription",
  tagline: "Stories, characters and imaginary places.",
  availability: "availability",
  biography: [
    "biography1",
    "biography2",
    "biography3",
  ],
};
export const navigation = [
  { href: "/", label: "welcome" },
  { href: "/work", label: "gallery" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
];
// Replace null with the artist's verified profile URL to activate each link.
export const socialLinks: { name: string; href: string | null }[] = [
  { name: "Instagram", href: "https://www.instagram.com/toskisaurus/" },
  { name: "X", href: "https://x.com/weird_dog_thing" },
  { name: "VGen", href: "https://vgen.co/weird_dog_thing" },
  { name: "Bluesky", href: "https://bsky.app/profile/weirddogthing.bsky.social" },
  { name: "ArtStation", href: null },
];
export const clients = [
  "independentStudios",
  "gameStudio",
  "animationStudio",
  "publishing",
  "freelanceClients",
];
export const services = [
  "characterDesign",
  "visualDevelopment",
  "environmentArt",
  "illustration",
  "conceptArt",
  "storytelling",
  "artDirection",
];
