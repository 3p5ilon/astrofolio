export type Site = {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  ogImage: string;
  language: string;
  socialStyle: "text" | "icon";
};

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
};
