export const siteConfig = {
  title: "Astrofolio",
  description: "A clean, fast, and lightweight personal blog.",
  author: "epsilon",
  siteUrl: "https://astrofolio-template.vercel.app",
  ogImage: "/favicon.svg",
  language: "en",
  navigation: [
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/photos", label: "Photos" },
  ],
  socialLinks: [
    { href: "https://x.com", label: "X" },
    { href: "https://github.com/3p5ilon/astrofolio", label: "GitHub" },
    { href: "https://instagram.com", label: "Instagram" },
    { href: "https://linkedin.com", label: "LinkedIn" },
  ],
} as const;
