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
    before: "I'm a ",
    highlight: 'full-stack engineer',
    after: ' working on web applications. The links above go to my profiles.',
    closing: 'The scores on this page are self-rated. They are not certifications.',
  },
  skillsDisclaimer:
    'Notes run through November 2023.',
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
