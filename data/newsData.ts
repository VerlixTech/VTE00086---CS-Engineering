export type NewsItem = {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
  imageCaption?: string;
  excerpt: string;
  fullContent: string;
};

export const newsData: NewsItem[] = [
  {
    id: 1,
    category: "Company Updates",
    date: "January 24, 2026",
    title: "How to Improve Steam Boiler Efficiency in Industrial Operations",
    image: "/News/bruce-mars-8YG31Xn4dSw-unsplash 1 (1).svg",
    imageCaption: "PROJECT",
    excerpt:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a",
    fullContent:
      "Eng. Kumara holds a Master of Energy Management from the Open University of Sri Lanka, an MBA from the University of Wolverhampton (UK), and a Bachelor of Engineering from the University of Bolton (UK), along with a Higher National Diploma in Mechanical Engineering. He is an Incorporated Engineer and a Fellow Member of the Institution of Incorporated Engineers Sri Lanka (FIIESL), as well as a member of the Mechanical Engineers Group of Sri Lanka (MEGSL). His professional leadership has been demonstrated through his previous role as Head of Engineering at Abans PLC, where he contributed to the development and management of major HVAC engineering projects. Beyond industry work, Eng. Kumara actively contributes to engineering education and professional development. He serves as a part-time instructor and lecturer in the HVAC field, delivering lectures and Continuing Professional Development (CPD) programs for institutions such as German Tech Sri Lanka, Korean Tech Sri Lanka, and other professional training platforms. In addition to his technical and academic contributions, he is also an active member of Toastmasters International, where he promotes leadership development, communication skills, and professional growth among engineers and young professionals. With more than 18 years of dedicated service to the engineering industry, Eng. Preemal Kumara continues to guide PD Engineering & Academy toward innovation, sustainable engineering practices, and the advancement of HVAC knowledge and professional standards.",
  },
  {
    id: 2,
    category: "Company Updates",
    date: "February 12, 2026",
    title: "How to Improve Steam Boiler Efficiency in Industrial Operations",
    image: "/News/bruce-mars-8YG31Xn4dSw-unsplash 1 (2).svg",
    imageCaption: "Project: Doha Tower Phase II",
    excerpt:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
    fullContent:
      "One of the key projects involved the complete air-conditioning ducting works at Al Bidda Tower. The project included the full installation and commissioning of the building's AC ducting system, ensuring efficient air distribution and compliance with international HVAC standards. The project was completed successfully with a focus on quality, precision, and timely delivery. In addition, the team successfully carried out the complete fire-rated duct works and cold air duct installation for the Anglican Church. This project required specialized ducting systems designed to meet strict fire safety regulations while ensuring reliable airflow and ventilation performance within the facility. Both projects were executed under the leadership and technical expertise of Preemal Kumara, whose extensive experience in HVAC engineering and international project management played a vital role in their successful completion.",
  },
  {
    id: 3,
    category: "Projects",
    date: "March 09, 2026",
    title: "How to Improve Steam Boiler Efficiency in Industrial Operations",
    image: "/News/bruce-mars-8YG31Xn4dSw-unsplash 1.svg",
    imageCaption: "PROJECT: Hayleys Nature Next (PVT) LTD",
    excerpt:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
    fullContent:
      "The project included comprehensive engineering design, equipment supply, professional installation, and systematic testing and commissioning to ensure optimal airflow, thermal comfort, and compliance with industrial ventilation standards.",
  },
];