import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
import { HeroCards } from "../elements/HeroCards";
import AnalogClock from "../elements/AnalogClock";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Hey, I'm <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">Galih</span>
          </h1>
          <h2 className="">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">Full-stack</span> developer
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">I’ve dedicated this website to documenting my journey and progress in the tech world..</p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link to="/projects">
            <Button className="w-full md:w-1/3">My Projects</Button>
          </Link>

          <a
            rel="noreferrer noopener"
            href="https://github.com/Galih17421010"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Home cards sections */}
      <div className="z-10">
        {/* <HeroCards /> */}
        <AnalogClock />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
