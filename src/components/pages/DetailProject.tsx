import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { NotFound } from "./404";
import DataProjects from "../data/data-projects";
import { Badge } from "../ui/badge";

const projects = DataProjects;

const DetailProject: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:py-8">
      <div className="max-w-3xl mx-auto">
        <div className="py-8">
          <Badge variant="secondary" className="text-xs text-left text-secondary-foreground ">
            <NavLink to="/projects" className="inline-flex">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {"  "}
              Back to Projects
            </NavLink>
          </Badge>
          <h1 className="text-4xl text-center text-primary font-bold mb-2">{project.title}</h1>
          <p className="text-gray-500 text-center text-sm">
            Published on <time dateTime="2022-04-05">{project.date}</time>
          </p>
        </div>
        <img src={project.image} alt="Featured image" className="w-full h-auto mb-8" />
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <p>{project.detail}</p>
        </div>
        <div className="sm:py-20">
          <Badge variant="secondary" className="text-sm text-ellipsis">
            {project.technologies}
          </Badge>
        </div>
      </div>
    </div>
  );
};
export default DetailProject;
