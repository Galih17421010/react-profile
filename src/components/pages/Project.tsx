import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "../ui/pagination";
import DataProjects from "../data/data-projects";

const projects = DataProjects;

// const projectList: string[] = ["Dark/Light theme", "Reviews", "Projects", "Pricing", "Contact form", "Our team", "Responsive design", "Newsletter", "Minimalist"];

export const Projects = () => {
  return (
    <section id="projects" className="container py-24 sm:py-10 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many <span className="text-primary">Great Projects</span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {projects.map(({ technologies, id }) => (
          <div key={id}>
            <Badge variant="secondary" className="text-sm">
              <button>{technologies}</button>
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, slug, description, image, technologies, date }) => (
          <Card key={title}>
            <CardHeader>
              <Link to={`/projects/${slug}`} className="text-primary">
                <img src={image} alt="About feature" className="w-[100px] lg:w-[200px] mx-auto" />
                <CardTitle>{title}</CardTitle>
              </Link>
            </CardHeader>

            <CardContent>
              <p className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">{description}</p>
              <p className="text-gray-500 text-right text-sm py-3">
                <time>{date}</time>
              </p>
            </CardContent>

            <CardFooter className="justify-center">
              <Badge variant="secondary" className="text-xs text-primary">
                {technologies}
              </Badge>
              <div>
                <a
                  rel="noreferrer noopener"
                  href="https://github.com/Galih17421010"
                  target="_blank"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <span className="sr-only">Github icon</span>
                  <GitHubLogoIcon className="w-5 h-5" />
                </a>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex flex-wrap md:justify-center gap-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex flex-wrap md:justify-center gap-4"></div>
    </section>
  );
};
