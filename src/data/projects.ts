export type Project = {
  title: string; period?: string; tags: string[];
  summary: string; link?: string; repo?: string; image?: string;
};

export const projects: Project[] = [

  {
    title: "Gestion immobiliere",
    period: "2025",
    tags: ["Thymeleaf","Spring Boot","Spring Data JPA ","HTML/CSS/Bootstrap 5","Java"],
    summary: "Application Web pour La gestion hôtelière .",
    repo: "https://github.com/hbenziat1318-cloud/Mini-projet-Thymeleaf.git"
  },
       {
    title: "Première manipulation avec Unity | Mini projet VR ",
    period: "2025",
    tags: ["VR","C#","Unity "],
    summary: "Conception d'un scénarios | Thème : Jeux ",
    repo: "https://github.com/hbenziat1318-cloud/Lab1-Premi-re-manipulation-avec-Unity.git"
  },
     {
    title: " Projet Portfolio React Pro (Vite + TS) ",
    period: "2025",
    tags: ["React","Vite","Tailwindcs ","TypeScript","React Router"],
    summary: "Création d'un portfolio avec React ,Vite + TS et Tailwindcs.",
    repo: "https://github.com/hbenziat1318-cloud/portolio-react.git"
  },
   {
    title: "Mini Projet ",
    period: "2023",
    tags: ["HTML","CSS","JavaSript "],
    summary: "Platforme Ens-Marrakech pour gestion des abscence des etudiants et les notes.",
    repo: ""
  },
];