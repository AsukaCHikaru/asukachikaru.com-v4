import { About, Portfolio, Contact } from "./types";

export const about: About = {
  name: "Asuka Wang",
  location: "Fukuoka, Japan",
  desc: "Front-end developer"
};

export const portfolios: Portfolio[] = [
  {
    title: "CHIKA Music Awards 2018",
    url: "http://2018.chikamusicawards.asukachikaru.com",
    repo: "",
    desc:
      "Exclusive site for my personal annual music awards, as rewind of my favorite music of the year.",
    dependencies: ["React"],
    time: "2018"
  },
  {
    title: "The work is undone.",
    url: "https://blog.asukachikaru.com",
    repo: "https://github.com/AsukaCHikaru/blog-v2",
    desc: "My blog. Handmade, 0 blog host service or template used.",
    dependencies: ["Gatsby"],
    time: "2019"
  },
  {
    title: "Hangul Quiz",
    url: "https://asukachikaru.github.io/hangul-quiz/",
    repo: "https://github.com/AsukaCHikaru/hangul-quiz",
    desc: "Hangul memorizer game SPA.",
    dependencies: ["Vue", "GSAP"],
    time: "2019"
  },
  {
    title: "CHIKA Music Awards 2019",
    url: "http://chikamusicawards.asukachikaru.com",
    repo: "https://github.com/AsukaCHikaru/chika-music-awards-2019",
    desc:
      "Exclusive site for my personal annual music awards, as rewind of my favorite music of the year.",
    dependencies: ["React", "Reach Router", "TypeScript"],
    time: "2020"
  }
];

export const passions: string[] = [
  "building stuff",
  "esports",
  "game design",
  "gaming",
  "JavaScript",
  "language learning (Spanish, Dutch)",
  "music (Hip-hop, EDM)",
  "web development"
];

export const contacts: Contact[] = [
  { name: "blog", url: "https://blog.asukachikaru.com" },
  { name: "github", url: "https://github.com/asukachikaru" },
  { name: "twitter", url: "https://twitter.com/asukachikaru" },
  { name: "e-mail", url: "asukachikaru@gmail.com" },
  { name: "linkedin", url: "https://www.linkedin.com/in/asuka-wang-538a64168" }
];
