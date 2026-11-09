// Project facts and article summaries shown on the homepage.
// Name, photo, and biography are not covered by the MIT license.

export const projects = [
  {
    name: 'Vocalace',
    problem:
      'One Azure word score can pass while the phoneme a Chinese speaker missed is still wrong.',
    role: 'I built the practice app and the public course.',
    challenge:
      'Azure’s SAPI label and the course IPA were both shown as the target. Remapping every ao to ɑː would mislabel rhotic vowels such as “more”.',
    result:
      'The course IPA stays the target. A mismatched phone keeps that symbol and hides its score. The app is live.',
    links: [
      { label: 'App', href: 'https://www.vocalace.com' },
      { label: 'Course', href: 'https://course.vocalace.com' },
    ],
  },
  {
    name: 'bun-ffmpeg',
    problem:
      'A Bun service needed 16 kHz mono WAV for Whisper, without fluent-ffmpeg’s video API.',
    role: 'I published bun-ffmpeg on npm.',
    challenge:
      'It spawns the system ffmpeg binary and names a missing binary, including when FFMPEG_PATH is set in a container.',
    result:
      'audioWav always writes 16 kHz, mono, pcm_s16le WAV. The package does not ship ffmpeg.',
    links: [
      { label: 'Repository', href: 'https://github.com/KenjiGinjo/bun-ffmpeg' },
      { label: 'npm', href: 'https://www.npmjs.com/package/bun-ffmpeg' },
    ],
  },
] as const

export const articles = [
  {
    title: 'One weak phoneme, three words, and a model that cannot invent them',
    href: 'https://dev.to/kenjiginjo/one-weak-phoneme-three-words-and-a-model-that-cannot-invent-them-13mn',
    date: '2026-11-08',
    summary:
      'Code picks the weakest phoneme and at most 20 dictionary words. The model may only fill empty slots, and a reply is kept only when every word is in that list, once, at the exact length.',
  },
  {
    title: "When the engine's phoneme and the course IPA disagree",
    href: 'https://dev.to/kenjiginjo/when-the-engines-phoneme-and-the-course-ipa-disagree-5d0i',
    date: '2026-10-30',
    summary:
      'For “cause”, the course teaches /kɑːz/ and Azure often labels ao as /ɔ/. The drawer keeps the course IPA as the target and hides the phone score when the two disagree.',
  },
  {
    title: 'Merging itinerary planning into the same chat process (and gating tools by membership)',
    href: 'https://dev.to/kenjiginjo/merging-itinerary-planning-into-the-same-chat-process-and-gating-tools-by-membership-51g8',
    date: '2026-10-30',
    summary:
      'Planning moved into the chat process, and the old stream stayed. Booking and itinerary tools are added only for members. Refine runs only if that session already has a plan.',
  },
] as const
