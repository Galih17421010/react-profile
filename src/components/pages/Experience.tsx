import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../Icons";

interface ExperienceProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const experiences: ExperienceProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
];

export const Experiences = () => {
  return (
    <section id="Experiences" className="container text-center py-24 sm:py-10">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Works </span>
        Experience
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor pariatur sit!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {experiences.map(({ icon, title, description }: ExperienceProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
