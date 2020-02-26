import { Portfolio, Contact } from "./types";

export const portfolios: Portfolio[] = [
  {
    title: "CHIKA Music Awards 2018",
    href: "http://2018.chikamusicawards.asukachikaru.com",
    description:
      "Exclusive site for my personal annual music awards, as rewind of my favorite music of the year.",
    builtWith: ["React"],
    time: "2018"
  },
  {
    title: "The work is undone.",
    href: "https://blog.asukachikaru.com",
    repo: "https://github.com/AsukaCHikaru/blog",
    description: "My blog. Handmade, 0 blog host service or template used.",
    builtWith: ["Gatsby"],
    time: "2019"
  },
  {
    title: "Hangul quiz",
    href: "https://asukachikaru.github.io/hangul-quiz/",
    repo: "https://github.com/AsukaCHikaru/hangul-quiz",
    description: "Hangul memorizer game SPA.",
    builtWith: ["Vue", "GSAP"],
    time: "2019"
  },
  {
    title: "CHIKA Music Awards 2019",
    href: "http://chikamusicawards.asukachikaru.com",
    repo: "https://github.com/AsukaCHikaru/chika-music-awards-2019",
    description:
      "Exclusive site for my personal annual music awards, as rewind of my favorite music of the year.",
    builtWith: ["React", "Reach Router", "TypeScript"],
    time: "2020"
  }
];

export const tags: string[] = [
  "building stuff",
  "esports",
  "game design",
  "gaming",
  "JavaScript",
  "language learning (Spanish, Dutch)",
  "music (Hip-hop, EDM)",
  "web development"
]

export const contacts: Contact[] = [
  { name: "blog", url: "https://blog.asukachikaru.com" },
  { name: "github", url: "https://github.com/asukachikaru" },
  { name: "twitter", url: "https://twitter.com/asukachikaru" },
  { name: "e-mail", url: "asukachikaru@gmail.com" },
  { name: "linkedin", url: "https://www.linkedin.com/in/asuka-wang-538a64168" },
  { name: "resume", url: "" }
];
