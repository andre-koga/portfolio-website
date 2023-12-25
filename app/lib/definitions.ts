// Header

import { PortableTextBlock } from "@sanity/types";

export type NavLink = {
  text: string;
  href: string;
};

// Footer

export type SocialLink = {
  href: string;
  icon: any;
  color: string;
};

export type FactRaw = {
  fact: string;
};

export type postExcerpt = {
  slug: { current: string };
  title: string;
  excerpt: string;
  publishedAt: string;
  coverImage: string;
};

export type post = {
  slug: { current: string };
  title: string;
  body: PortableTextBlock[];
  publishedAt: string;
  coverImage: string;
};
