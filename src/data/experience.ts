// src/data/experience.ts

export type Experience = {
  title: string;
  company: string;
  location?: string;
  start: string;
  end?: string;
  description?: string[];
};

export const experience: Experience[] = [
    {
        title: "Enseignement Mathematique",
        company: "Collége Zhor Targa  ",
        location: "Marrakech",
        start: "2024-10",
        end: "2024-11",
        description: [
          "Enseignement des mathématiques selon le programme scolaire marocain",
              "Animation de cours couvrant l'algèbre, la géométrie et l'arithmétique",
              "Développement de supports pédagogiques innovants pour faciliter l'apprentissage",
              "Application de méthodes actives pour rendre les mathématiques accessibles",
              "Évaluation continue et préparation aux contrôles nationaux",
              "Utilisation de la plateforme MASSAR pour le suivi administratif et pédagogique"

        ]
      },
  {
    title: "Action educative",
    company: "Lycée Al khawarizmi ",
    location: "Marrakech",
    start: "2023-11",
    end: "2023-07",
    description: [
      "Enregistrement des absences et suivi administratif via le service MASSAR",
      "Gestion des notes et mise à jour des informations académiques sur MASSAR",
      "Organisation et gestion des fichiers et dossiers des élèves, assurant un suivi rigoureux",
      "Accompagnement et soutien des élèves en mathématiques pour améliorer leur compréhension et leurs résultats"
    ]
   },

  {
    title: " Stage ",
    company: "Marjan | Marrakech  ",
    location: "Marrakech",
    start: "2022-06",
    end: "2022-08",
    description: [
      "Maintenance préventive et corrective des équipements informatiques et des systèmes réseaux.",
          "Diagnostic et résolution des pannes matérielles et logicielles sur les postes de travail.",
          "Installation et configuration de nouveaux équipements informatiques et périphériques.",
          "Assistance technique aux utilisateurs et formation sur les bonnes pratiques d'utilisation.",
          "Gestion des inventaires et suivi des interventions dans la base de données technique."
    ]
  }

];
