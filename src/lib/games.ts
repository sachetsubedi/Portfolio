export type T_Game = {
  name: string;
  url: string;
  img: string;
  slug: string;
};

export type T_Games = T_Game[];

export const games: T_Games = [
  {
    name: "Simon",
    url: "https://links.sachetsubedi001.com.np/simon",
    img: "/games/simon.png",
    slug: "simon",
  },
  {
    name: "Flip Cards",
    url: "https://links.sachetsubedi001.com.np/flip-cards",
    img: "/games/flip.png",
    slug: "flip-cards",
  },
];
