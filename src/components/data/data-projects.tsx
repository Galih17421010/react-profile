import image1 from "@/assets/growth.png";
import image2 from "@/assets/reflecting.png";

interface Project {
  id: number;
  title: string;
  slug: string;
  date: string;
  description: string;
  detail: string;
  technologies: string[];
  image: string;
  url: string;
}

const DataProjects: Project[] = [
  {
    id: 1,
    title: "Project One",
    slug: "project-one",
    date: "July 25, 2024",
    description: "This is the description of the first project...",
    detail:
      "Project background info goes here. Fusce laoreet ornare risus, et sollicitudin turpis viverra nec. Proin eu lacinia ipsum. Curabitur porta a mi sit amet iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque elementum tellus vel elit pharetra, et venenatis tortor condimentum.",
    technologies: ["React", "TypeScript", "CSS"],
    image: image1,
    url: "https://github.com",
  },
  {
    id: 2,
    title: "Project Two",
    slug: "project-two",
    date: "August 1, 2024",
    description: "This is the description of the second project...",
    detail: "",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: image2,
    url: "https://github.com",
  },
  {
    id: 3,
    title: "Project Three",
    slug: "project-three",
    date: "August 1, 2024",
    description: "This is the description of the second project...",
    detail: "",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: image2,
    url: "https://github.com",
  },
  {
    id: 4,
    title: "Project Four",
    slug: "project-four",
    date: "August 1, 2024",
    description: "This is the description of the second project...",
    detail: "",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: image2,
    url: "https://github.com",
  },
  {
    id: 5,
    title: "Project Five",
    slug: "project-five",
    date: "August 1, 2024",
    description: "This is the description of the second project...",
    detail: "",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: image2,
    url: "https://github.com",
  },
  {
    id: 6,
    title: "Project Six",
    slug: "project-six",
    date: "July 25, 2024",
    description: "This is the description of the first project...",
    detail:
      "Project background info goes here. Fusce laoreet ornare risus, et sollicitudin turpis viverra nec. Proin eu lacinia ipsum. Curabitur porta a mi sit amet iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque elementum tellus vel elit pharetra, et venenatis tortor condimentum.",
    technologies: ["React", "TypeScript", "CSS"],
    image: image1,
    url: "https://github.com",
  },
];

export default DataProjects;
