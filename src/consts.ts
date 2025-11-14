export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
  AUTHOR: string
  LOGO_MARK: string
  LOGO_ICON: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Yshell.dev',
  AUTHOR: 'Vyshnav Prasad',
  POSTS_PER_PAGE: 6,
  NUM_POSTS_ON_HOMEPAGE: 3,
  EMAIL: 'i@yshell.dev',
  SITEURL: 'https://www.yshell.dev',
  DESCRIPTION: 'Blog and Portfolio page.',
  LOGO_MARK: "../",
  LOGO_ICON: "../",
}

export const NAV_LINKS: Link[] = [
  { href: '/works', label: 'Works' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/shots', label: 'Shots' },
  { href: '/about', label: 'About' },
]

export const SOCIAL_LINKS_MAP: Record<string, string> = {
  'LinkedIn': 'https://www.linkedin.com/in/yshell-dev/',
  'GitHub': 'https://github.com/yshell-dev',
  'Instagram': 'https://www.instagram.com/yshell.dev/',
  'DevTo': 'https://dev.to/yshell',
  'Email': 'mailto:'+SITE.EMAIL,
  'RSS': '/rss.xml',
}

export const SOCIAL_LINKS: Link[] = Object.entries(SOCIAL_LINKS_MAP).map(([k, v]) => {
  return { href: v, label: k }
})