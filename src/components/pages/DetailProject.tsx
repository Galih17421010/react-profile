import React from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "./404";
import DataProjects from "../data/data-projects";

const projects = DataProjects;

const DetailProject: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div>
      <img src={project.image} alt="About feature" className="w-[100px] lg:w-[200px] mx-auto" />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.date}</p>
    </div>
  );
};
export default DetailProject;
