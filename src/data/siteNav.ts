/**
 * Section anchors for the site navbar, in display order. The homepage links to
 * them in-page (`#id`); sub-pages (blog archive, articles) link to `/#id` via
 * SiteHeader's `base` prop. Keep these ids in sync with the section components'
 * own `id`s (Hero is `about`, Work `work`, …).
 */
export type NavItem = { id: string; label: string };

export const siteNav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'blog', label: 'Blog' },
];
