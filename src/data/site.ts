export const site = {
  brand: '书斋',
  brandEn: 'Personal Library',
  heroPoem: '山月照书窗',
  heroLine: 'Books · Essays · Wanderings',
  heroLead:
    '愿每一次停留，都能遇见一句值得珍藏的话。\nMay every pause leave you with a line worth keeping.',
  loadingLines: ['长风破浪会有时，', '直挂云帆济沧海。'],
  footerPoem: ['举杯邀明月，', '对影成三人。'],
  location: 'Dallas · Earth',
}

export const navItems = [
  { to: '/', label: 'Home', poetic: '归处' },
  { to: '/library', label: 'Library', poetic: '藏书' },
  { to: '/projects', label: 'Projects', poetic: '造物' },
  { to: '/journal', label: 'Journal', poetic: '随笔' },
  { to: '/about', label: 'About', poetic: '山中人' },
  { to: '/contact', label: 'Contact', poetic: '鸿雁' },
] as const

export const librarySections = [
  {
    slug: 'novel',
    label: 'Novel',
    poetic: '小说',
    title: 'Novel',
    desc: 'Stories, characters, and unfinished worlds.',
    verse: '纸上风起',
  },
  {
    slug: 'psychology',
    label: 'Psychology',
    poetic: '心理',
    title: 'Psychology',
    desc: 'Notes on the mind, emotion, and self-understanding.',
    verse: '观心',
  },
  {
    slug: 'chinese-culture',
    label: 'Chinese Culture',
    poetic: '华夏',
    title: 'Chinese Culture',
    desc: 'Classics, aesthetics, and living tradition.',
    verse: '山河',
  },
  {
    slug: 'notes',
    label: 'Reading Notes',
    poetic: '札记',
    title: 'Reading Notes',
    desc: 'Excerpts, marginalia, and quiet reflections.',
    verse: '批注',
  },
] as const

export const psychologyBooks = [
  {
    title: 'The Art of Setting Boundaries: Building Healthy Relationships',
    titleZh: '《边界的艺术》',
    author: 'Ciel Zh',
    url: 'https://www.amazon.sg/Art-Setting-Boundaries-Building-Relationship/dp/B0FRPHRD1F',
    quote: 'Boundaries are not walls—they are the shape of a healthier intimacy.',
    intro:
      'A practical guide for modern women navigating career and life. It frames boundaries as tools for self-preservation and authentic connection—across friends, family, partners, and oneself. With strategies, examples, and conversation scripts, it shows how clear limits reduce burnout and make room for healthier intimacy.',
  },
] as const

export const projectSections = [
  {
    slug: 'ai',
    label: 'AI Experiments',
    poetic: '灵机',
    title: 'AI Experiments',
    desc: 'Small experiments exploring intelligence and tools.',
  },
  {
    slug: 'open-source',
    label: 'Open Source',
    poetic: '开源',
    title: 'Open Source',
    desc: 'Public repositories and reusable pieces.',
  },
] as const

export const journalSections = [
  {
    slug: 'writing',
    label: 'Writing',
    poetic: '创作',
    title: 'Writing Log',
    desc: 'Progress, sparks, and revision notes.',
  },
  {
    slug: 'learning',
    label: 'Learning',
    poetic: '求知',
    title: 'Learning Notes',
    desc: 'Courses, books, and periodic reflections.',
  },
  {
    slug: 'thoughts',
    label: 'Thoughts',
    poetic: '思绪',
    title: 'Thoughts',
    desc: 'Short essays, questions, and unfinished ideas.',
  },
] as const

export const journalNotes = [
  {
    title: '今日月色很好。',
    en: 'The moonlight is especially fine tonight.',
    body: 'A quiet reminder that clarity often arrives without noise.',
  },
  {
    title: '读后一念',
    en: 'After reading',
    body: 'Boundaries do not close the heart. They teach it where to rest.',
  },
] as const

export const thoughtEntries = [
  {
    date: '2026-07-29',
    title: '今日想法',
    body: '无论是 AI agent 还是 business analytics，这些所谓的热门学科都是我按照剧本出演而学习的。它们很好用、很常用，但是有时就像一阵风，飘忽不定。',
  },
  {
    date: '2026-07-30',
    title: 'Less Reacting, More Creating',
    body: `I've learned that noticing a problem is only the beginning.

Complaining may reveal what's wrong, but action is what creates change.

Emotions deserve to be expressed—but they can also become growth, creativity, and compassion.

过去的 Xylo，只属于那个阶段的创作 persona，是受到当时创作经历启发而诞生的。

Today, I'm choosing to create with more intention, more authenticity, and more kindness.

Less reacting. More creating.

Less blame. More responsibility.

Let's leave the world a little better than we found it.

— Hana 🤍`,
  },
  {
    date: '2026-07-30',
    title: '今日想法',
    body: '人类的大脑真的需要净化啊。',
  },
] as const

export const aboutLines = [
  '一灯一卷，',
  '一舟一梦。',
  '',
  'I read,',
  'I write,',
  'I listen inward,',
  'I wander.',
  '',
  '愿此处，',
  '与一本书，',
  '相遇一人。',
] as const

export const contactLinks = [
  { label: 'Email', href: 'mailto:cielcc68@outlook.com', note: '飞鸟可传书' },
  { label: 'X', href: 'https://x.com/aura_ciel_', note: '@aura_ciel_' },
] as const

export function findSection<T extends { slug: string }>(
  sections: readonly T[],
  slug: string | undefined,
): T | undefined {
  return sections.find((section) => section.slug === slug)
}
