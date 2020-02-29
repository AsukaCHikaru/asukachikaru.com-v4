export type About = {
  name: string;
  location: string;
  desc: string;
};

export type Portfolio = {
  title: string;
  href: string;
  repo?: string;
  description: string;
  builtWith: string[];
  time: string;
};

export type Contact = {
  name: string;
  url: string;
};
