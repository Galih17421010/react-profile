import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { RocketIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "../elements/Icons";
import { NavLink, Link } from "react-router-dom";

interface RouteProps {
  label: string;
  to: string;
}

const routeList: RouteProps[] = [
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Experiences",
    to: "/experiences",
  },
  {
    label: "Resume",
    to: "/resume",
  },
  {
    label: "Articles",
    to: "/articles",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <NavLink rel="noreferrer noopener" to="/" className={({ isActive }) => (isActive ? "ml-2 font-bold text-xl flex text-primary" : "ml-2 font-bold text-xl flex")}>
              <LogoIcon />
              Galih-Portfolio
            </NavLink>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-primary" : "")}>
                      Galih - Portfolio
                    </NavLink>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ label, to }: RouteProps) => (
                    <NavLink rel="noreferrer noopener" key={label} to={to} onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? buttonVariants({ variant: "link" }) : buttonVariants({ variant: "ghost" }))}>
                      {label}
                    </NavLink>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.linkedin.com/in/galihagussaputra"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <RocketIcon className="mr-2 w-5 h-5" />
                    Contact
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <NavLink
                rel="noreferrer noopener"
                to={route.to}
                key={i}
                className={({ isActive }) =>
                  isActive
                    ? buttonVariants({
                        variant: "link",
                      })
                    : buttonVariants({
                        variant: "ghost",
                      })
                }
              >
                {route.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex gap-2">
            <a rel="noreferrer noopener" href="https://www.linkedin.com/in/galihagussaputra" target="_blank" className={`border ${buttonVariants({ variant: "secondary" })}`}>
              <RocketIcon className="mr-2 w-5 h-5" />
              Contact
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
