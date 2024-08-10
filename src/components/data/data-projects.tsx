import { Project } from "../type/typeproject";
import image1 from "@/assets/growth.png";
import image2 from "@/assets/reflecting.png";

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    slug: "project-one",
    date: "July 25, 2024",
    description: "This is the description of the first project...",
    technologies: ["React", "TypeScript", "CSS"],
    image: image1,
    url: "https://github.com",
  },
  {
    id: 2,
    title: "Project Two",
    slug: "project-one",
    date: "August 1, 2024",
    description: "This is the description of the second project...",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: image2,
    url: "https://github.com",
  },
];

export default projects;
