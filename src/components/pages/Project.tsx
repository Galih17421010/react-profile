import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import image from "@/assets/growth.png";
import image3 from "@/assets/reflecting.png";
import image4 from "@/assets/looking-ahead.png";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const projects: ProjectProps[] = [
  {
    title: "Responsive Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image4,
  },
  {
    title: "Intuitive user interface",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image3,
  },
  {
    title: "AI-Powered insights",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
];

const projectList: string[] = ["Dark/Light theme", "Reviews", "Projects", "Pricing", "Contact form", "Our team", "Responsive design", "Newsletter", "Minimalist"];

export const Projects = () => {
  return (
    <section id="projects" className="container py-24 sm:py-10 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Great Projects</span>
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
        {projects.map(({ title, description, image }: ProjectProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img src={image} alt="About feature" className="w-[200px] lg:w-[300px] mx-auto" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
