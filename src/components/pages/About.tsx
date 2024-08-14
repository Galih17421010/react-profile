import { Statistics } from "../elements/Statistics";
import pilot from "@/assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img src={pilot} alt="" className="w-[300px] object-contain rounded-lg" />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">About </span>
                Me
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Hello! I'm Galih, a programmer with a passion for solving problems through code. With 2+ years of experience and a Bachelor's degree in Informatics Engineering, I thrive on transforming ideas into practical and innovative
                digital solutions. My journey in the tech world has been fueled by a curiosity to learn, adapt, and grow. This website is a reflection of my commitment to continuous improvement and professional development. When I'm not
                coding, you'll likely find me exploring new technologies or working on personal projects that push the boundaries of my skills.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
