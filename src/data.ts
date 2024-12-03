import { VideoItem } from "./types";

export const videoListData = [
  {
    id: 1,
    title: "Le Top 10 des frameworks JS",
    description: "Vous n'en croirez pas vos yeux",
    file: "video1.mp4",
    thumbnailLINK: "L8KQIPCODV8",
  },
  {
    id: 2,
    title: "5 bonnes raisons de ne pas fuir cette formation",
    description: "Vous allez halluciner ! Cliquez vite !",
    file: "video2.mp4",
    thumbnailLINK: "umyvrlx0ma8",
  },
  {
    id: 3,
    title: "Les plus grands secrets des développeurs React",
    description:
      "Cliquez et découvrez avant les autres ces astuces incroyables !",
    file: "video3.mp4",
    thumbnailLINK: "L1ijLaihN2A",
  },
  {
    id: 4,
    title: "Votre DSI ne veut pas que vous voyiez cette vidéo !",
    description:
      "Les experts sont formels : cette méthode de développement mystérieuse va changer votre vie.",
    file: "video4.mp4",
    thumbnailLINK: "XIVDN9cxOVc",
  },
  {
    id: 5,
    title: "Les gens vous supplieront de développer leur appli !",
    description:
      "Visionnez cette vidéo au plus vite et apprenez les 1022 méthodes de développement les plus rentables.",
    file: "video5.mp4",
    thumbnailLINK: "E9ANYNkN4Sc",
  },
  {
    id: 6,
    title: "Les 12 techniques imparables pour rater un café",
    description:
      "Vous en avez marre de tout réussir ? Ratez aux moins les cafés grâce à cette vidéo inédite !",
    file: "video6.mp4",
    thumbnailLINK: "uwIJbtLpvV4",
  },
] satisfies (VideoItem & { id: number })[];
