import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import image from "@/assets/growth.png";
import image3 from "@/assets/reflecting.png";
import image4 from "@/assets/looking-ahead.png";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "../ui/pagination";

interface ProjectProps {
  title: string;
  slug: string;
  description: string;
  image: string;
}

const projects: ProjectProps[] = [
  {
    title: "Project 1",
    slug: "project-1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image4,
  },
  {
    title: "Project 2",
    slug: "project-2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image3,
  },
  {
    title: "Project 3",
    slug: "project-3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
  {
    title: "Project 4",
    slug: "project-4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
  {
    title: "Project 5",
    slug: "project-5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
  {
    title: "Project 6",
    slug: "project-6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
  {
    title: "Project 7",
    slug: "project-7",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
];

const projectList: string[] = ["Dark/Light theme", "Reviews", "Projects", "Pricing", "Contact form", "Our team", "Responsive design", "Newsletter", "Minimalist"];

export const Projects = () => {
  return (
    <section id="projects" className="container py-24 sm:py-10 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many <span className="text-primary">Great Projects</span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {projectList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, slug, description, image }: ProjectProps) => (
          <Card key={title}>
            <CardHeader>
              <Link to={slug} className="text-primary">
                <img src={image} alt="About feature" className="w-[100px] lg:w-[200px] mx-auto" />
                <CardTitle>{title}</CardTitle>
              </Link>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter className="justify-center">
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
              <PaginationPrevious href="#" />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex flex-wrap md:justify-center gap-4"></div>
    </section>
  );
};
