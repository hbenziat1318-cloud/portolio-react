export type Education = {
  school: string; degree: string; field?: string;
  location?: string; start: string; end?: string;
  gpa?: string; courses?: string[]; highlights?: string[];
};

export const education: Education[] = [
    {
    school: "Université Cadi Ayyad",
    degree: "Master",
    field: "Technologies Emergentes",
    location: "Marrakech",
    start: "2024-10",
    
    
  },
 {
    school: "Centre Régional des Métiers de l’Education et de la Formation – CRMEF",
    degree: "Licence d'Education",
    field: "Mathematique",
    location: "Marrakech",
    start: "2024-04",
    end: "2024-11",

  },
    {
    school: "Université Cadi Ayyad",
    degree: "Licence d'Education",
    field: "Informatique",
    location: "Marrakech",
    start: "2021-10",
    end: "2023-07",
    
  },
  {
    school: "Lycée qualifiant AL DOHA",
    degree: "Baccalauréat",
    field: "Science physique",
    location: " Marrakech ",
    start: "20202-09",
    end: "2020-07",
    
    
  }
];