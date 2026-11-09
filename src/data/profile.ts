// Name, photo, and biography are not covered by the MIT license.
export const profile = {
  name: 'Kenji Ginjo',
  displayName: 'KenjiGinjo',
  firstName: 'Kenji',
  role: 'Full Stack Engineer',
  email: 'kenjiginjo@gmail.com',
  photo: '/profile-photo.jpeg',
  greeting: "Hello, I'm Kenji",
  bio: {
    before: 'I run ',
    highlight: 'Neziva',
    highlightHref: 'https://www.neziva.com',
    after: '. I take remote contract work: ship the UI, API, data, and the deploy.',
    closing: 'TypeScript, React / Next.js, Node / Bun, Hono, PostgreSQL.',
  },
  githubActivity: {
    href: 'https://github.com/KenjiGinjo',
    contributions: 3199,
    activeDays: 293,
    countedOn: '2026-11-09',
    repos: [
      {
        name: 'neziva',
        href: 'https://github.com/KenjiGinjo/neziva',
        pushedAt: '2026-11-09',
      },
      {
        name: 'vocalace-course',
        href: 'https://github.com/KenjiGinjo/vocalace-course',
        pushedAt: '2026-11-08',
      },
      {
        name: 'bun-ffmpeg',
        href: 'https://github.com/KenjiGinjo/bun-ffmpeg',
        pushedAt: '2026-09-09',
      },
    ],
  },
  copyrightYear: 2026,
  socials: [
    {
      name: 'X',
      href: 'https://x.com/KenjiGinjo',
      icon: '/twitter-x.svg',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/KenjiGinjo',
      icon: '/github.svg',
    },
    {
      name: 'DEV',
      href: 'https://dev.to/kenjiginjo',
      icon: '/devto.svg',
    },
  ],
} as const
