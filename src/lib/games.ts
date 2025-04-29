export type T_Game = {
  name: string;
  url: string;
  img: string;
};

export type T_Games = T_Game[];

export const games: T_Games = [
  {
    name: "Simon",
    url: "https://links.sachetsubedi001.com.np/simon",
    img: "/games/simon.png",
  },
];
