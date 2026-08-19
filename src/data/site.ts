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
    desc: 'Li Bai and living tradition—brief bilingual readings.',
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

export const liBaiPoems = [
  {
    titleZh: '月下独酌',
    titleEn: 'Drinking Alone under the Moon',
    linesZh: ['花间一壶酒，独酌无相亲。', '举杯邀明月，对影成三人。'],
    linesEn: [
      'Among flowers, a jug of wine—I drink alone, with no companion near.',
      'I raise my cup to the bright moon; with my shadow, we are three.',
    ],
    noteZh: '不是排遣寂寞，而是把孤独坐成一场席。明月与影，皆为嘉宾。',
    noteEn: 'Not escaping loneliness—hosting it. Moon and shadow become guests at the table.',
  },
  {
    titleZh: '行路难 · 其一',
    titleEn: 'Hard Roads of Travel · I',
    linesZh: ['长风破浪会有时，', '直挂云帆济沧海。'],
    linesEn: [
      'A time will come to ride the wind and cleave the waves—',
      'hoist the cloud-sail, and cross the vast blue sea.',
    ],
    noteZh: '前路多艰，却仍把希望说成必然。李白的豪迈，是相信风总会来。',
    noteEn: 'The road is hard, yet hope is spoken as certainty. His spirit trusts that wind will come.',
  },
  {
    titleZh: '静夜思',
    titleEn: 'Quiet Night Thoughts',
    linesZh: ['床前明月光，疑是地上霜。', '举头望明月，低头思故乡。'],
    linesEn: [
      'Moonlight before my bed—I take it for frost on the ground.',
      'I lift my eyes to the moon; I lower them, and think of home.',
    ],
    noteZh: '字句极简，情却极深。月光一照，乡愁便无处可藏。',
    noteEn: 'Fewest words, deepest feeling. One shaft of moonlight, and homesickness has nowhere to hide.',
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
     date: '2026-08-18',
     title: '读《臣服实验》',
     body: `最近读完了《臣服实验》。
     对一个很喜欢“讨坏”、喜欢较劲、喜欢把事情牢牢掌控在自己手里的人来说，这本书其实挺戳的。
     书里讲的“臣服”，不是认输，也不是摆烂。
     而是放下那个总觉得“事情必须按照我的方式发生”的执念。
     不抗拒，不硬拗。
     允许生活发生。
     顺着生命给你的安排走。
     以前总觉得，凡事都要争一争、抢一抢、控制一下，才不会吃亏。
     但后来发现——
     执念太深，也是一种消耗。
     当然，读到后面我又觉得，臣服也不能走到另一个极端。
     如果什么都接受，什么都顺从，连自己的感受和边界都放弃了，那可能也不是臣服，而是失去了自己。
     所以现在更喜欢的一种状态是：
     该争的时候争，
     该放的时候放。
     不和生活较劲，
     但也不轻易放弃自己的选择。
     顺势而为，但不随波逐流。
     最近也终于把自己的网站上架了。
     从一个念头，到真的把它做出来，过程中其实也有很多“想控制一切”的时刻。
     但最后还是决定让它先发生，再慢慢变好。
     网站已经上线。
     算是给最近的自己，一个小小的交代。
     也许所谓臣服，
     不是停止向前，
     而是终于不再那么用力地证明自己。`,
   },
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
    body: '人类的大脑真的需要进化啊。',
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
