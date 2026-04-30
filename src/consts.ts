import type { Site, NavLink, SocialLink } from "./types";

export const SITE: Site = {
  title: "Astrofolio",
  description: "A clean, fast, and lightweight personal blog.",
  author: "epsilon",
  siteUrl: "https://astrofolio-template.vercel.app",
  ogImage: "/favicon.svg",
  language: "en",
  socialStyle: "icon", // "text" | "icon"
};

export const NAV_LINKS: NavLink[] = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/photos", label: "Photos" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://x.com", label: "X" },
  { href: "https://github.com/3p5ilon/astrofolio", label: "GitHub" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "mailto:hello@example.com", label: "Email" },
  { href: "/rss.xml", label: "RSS" },
];
