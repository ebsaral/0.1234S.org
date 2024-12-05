import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const drawings = [
  {
    asset: "/images/gallery/drawings/8-20230830.jpg",
    width: 2157,
    height: 2000,
    alt: "ToFi",
    title: "ToFi",
    description: "30.08.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/1-20230609.jpg",
    width: 2168,
    height: 2000,
    alt: "Doremi Necmi",
    title: "Doremi Necmi",
    description: "25.08.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/2-20230805.jpg",
    width: 2167,
    height: 2000,
    alt: "Mix",
    title: "Mix",
    description: "05.08.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/9-20230805.jpg",
    width: 2113,
    height: 2000,
    alt: "Half",
    title: "Half",
    description: "05.08.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/4-20230801.jpg",
    width: 2000,
    height: 2000,
    alt: "Dimen",
    title: "Dimen",
    description: "01.08.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/5-20230801.jpg",
    width: 2154,
    height: 2000,
    alt: "Sessiz",
    title: "Sessiz",
    description: "01.08.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/3-20230730.jpg",
    width: 2117,
    height: 2000,
    alt: "Ara",
    title: "Ara",
    description: "30.07.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/11-20230729.jpg",
    width: 1908,
    height: 2000,
    alt: "Hist",
    title: "Hist",
    description: "29.07.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/16-20230728.jpg",
    width: 2121,
    height: 2000,
    alt: "Chaos",
    title: "Chaos",
    description: "28.07.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/6-20230726.jpg",
    width: 2025,
    height: 2000,
    alt: "Time Place",
    title: "Time Place",
    description: "26.07.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/10-20230725.jpg",
    width: 2318,
    height: 2000,
    alt: "Chat",
    title: "Chat",
    description: "25.07.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/12-20230725.jpg",
    width: 1765,
    height: 2000,
    alt: "Kont Ra",
    title: "Kont Ra",
    description: "25.07.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/13-20230723.jpg",
    width: 2813,
    height: 2000,
    alt: "Evre",
    title: "Evre",
    description: "23.07.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/7-20230721.jpg",
    width: 2791,
    height: 2000,
    alt: "Window",
    title: "Window",
    description: "21.07.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/15-20230710.jpg",
    width: 2781,
    height: 2000,
    alt: "Waiting Room",
    title: "Waiting Room",
    description: "10.07.2023 Munich"
  },
  {
    asset: "/images/gallery/drawings/14-20151003.jpg",
    width: 960,
    height: 960,
    alt: "Feelings",
    title: "Feelings",
    description: "03.10.2015 San Jose"
  },
].map(
  ({ asset, alt, width, height, title, description }) =>
    ({
      src: asset,
      title: title ?? "",
      description: description ??  "",
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: asset,
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }) as Photo,
);

export default drawings;