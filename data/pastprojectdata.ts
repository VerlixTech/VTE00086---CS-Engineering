export type ProjectItem = {
  src: string;
  className: string;
};

export type Project = {
  title: string;
  items: ProjectItem[];
};

export const projects: Project[] = [
  {
    title: "Araliya Rice Mills",
    items: [
      { src: "/ServiceSection/image 4.svg", className: "col-span-8 row-span-2" },
      { src: "/ServiceSection/image 2.svg", className: "col-span-4 row-span-2" },
      { src: "/ServiceSection/image 3.svg", className: "col-span-3 row-span-3" },
      { src: "/ServiceSection/image 5.svg", className: "col-span-6 row-span-3" },
      { src: "/ServiceSection/image 4.svg", className: "col-span-3 row-span-3" },
    ],
  },

  {
    title: "MAS Fabrics",
    items: [
      { src: "/projects2/1.jpg", className: "col-span-8 row-span-2" },
      { src: "/projects2/2.jpg", className: "col-span-4 row-span-2" },
      { src: "/projects2/3.jpg", className: "col-span-3 row-span-3" },
      { src: "/projects2/4.jpg", className: "col-span-6 row-span-3" },
      { src: "/projects2/5.jpg", className: "col-span-3 row-span-3" },
    ],
  },

 

  
];