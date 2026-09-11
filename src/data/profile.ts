// Replace this file with your own name, bio, photo, and social links.
export const profile = {
  name: 'Kenji Ginjo',
  displayName: 'KenjiGinjo',
  firstName: 'Kenji',
  role: 'Full Stack Engineer',
  email: 'kenjiginjo@gmail.com',
  photo: '/profile-photo.jpeg',
  greeting: "👋 Hello, I'm Kenji",
  bio: {
    before: "I'm a ",
    highlight: 'full-stack engineer',
    after:
      ' who loves coding and hanging out with kind people. I think I\'m pretty nice too! If you want to know more about me, check out my social media.',
    closing: "I'd love to hear from you! 💬",
  },
  skillsDisclaimer:
    '* Content as of 2023. For the latest updates, follow my GitHub code',
  copyrightYear: 2026,
  socials: [
    {
      name: 'Twitter/X',
      href: 'https://x.com/KenjiGinjo',
      icon: '/twitter-x.svg',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/KenjiGinjo',
      icon: '/github.svg',
    },
  ],
} as const
