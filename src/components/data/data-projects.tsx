import { Project } from "../type/typeproject";

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    slug: "project-one",
    date: "July 25, 2024",
    description: "This is the description of the first project...",
    technologies: ["React", "TypeScript", "CSS"],
    image: "/images/project-one.png",
  },
  {
    id: 2,
    title: "Project Two",
    slug: "project-one",
    date: "August 1, 2024",
    description: "This is the description of the second project...",
    technologies: ["Node.js", "Express", "MongoDB"],
    image: "/images/project-two.png",
  },
];

export default projects;
