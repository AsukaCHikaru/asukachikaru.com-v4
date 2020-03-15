import { About, Portfolio, Contact } from "./types";

export const about: About = {
  name: "Asuka Wang",
  location: "Fukuoka, Japan",
  desc: "Front-end developer"
};

export const portfolios: Portfolio[] = [  
  {
    title: "The work is undone.",
    url: "https://blog.asukachikaru.com",
    repo: "https://github.com/AsukaCHikaru/blog-v2",
    desc: "My blog. No CMS service or design template used.",
    dependencies: ["Gatsby"],
    time: "2019"
  },
  {
    title: "Hangul Quiz",
    url: "https://asukachikaru.github.io/hangul-quiz/",
    repo: "https://github.com/AsukaCHikaru/hangul-quiz",
    desc: "Hangul memorizer single-page application with free mode and typing-test-like time mode, to help me memrize and recognize Hangul correctly and fast.",
    dependencies: ["Vue", "GSAP"],
    time: "2019"
  },
  {
    title: "CHIKA Music Awards 2019",
    url: "http://chikamusicawards.asukachikaru.com",
    repo: "https://github.com/AsukaCHikaru/chika-music-awards-2019",
    desc:
      "Anuual side-project for my personal annual music awards, as rewind of my favorite music of the year and playground for interested tools or frameworks.",
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
  "language learning",
  "web development"
];

export const contacts: Contact[] = [
  { name: "blog", url: "https://blog.asukachikaru.com" },
  { name: "github", url: "https://github.com/asukachikaru" },
  { name: "twitter", url: "https://twitter.com/asukachikaru" },
  { name: "e-mail", url: "asukachikaru@gmail.com" },
  { name: "linkedin", url: "https://www.linkedin.com/in/asuka-wang-538a64168" }
];
