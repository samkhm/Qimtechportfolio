import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu as MenuIcon, X as NavbarCloseIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./lightswind/button";

const menuItems = [
  { title: "Home", key: "home", link: "#home" },
  { title: "About", key: "about", link: "#about" },
  { title: "Services", key: "services", link: "#services" },
  { title: "Skills", key: "skills", link: "#skills" },
  { title: "Work", key: "work", link: "#work" },
  { title: "Pricing", key: "pricing", link: "#pricing" },
  { title: "Testimonials", key: "testimonials", link: "#testimonials" },
];

const LetsTalkButton = () =>{
  return(
    <Button
     Link to="/contacts"
         className="w-fit h-fit px-4 py-1 m-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
   
    >Lets Talk</Button>
  )
}

export default function Navbar() {
  const [openNavbarToggle, setNavbarToggle] = useState(false);

  const toggleNavbar = () => setNavbarToggle((prev) => !prev);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = openNavbarToggle ? "hidden" : "auto";
  }, [openNavbarToggle]);

  return (
    <>
      {/* HEADER BAR */}
      <div className="w-full sticky top-0 flex items-center justify-between py-2 px-2 border-b bg-white z-50 relative">
        {/* Logo */}
        <div className="text-lg font-bold text-gray-800">MySite</div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-4">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.key}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.link}
                      style={{ color: "rgb(66, 153, 170)" }}
                      className="text-sm font-medium transition-colors hover:text-black hover:underline decoration-[rgb(66,153,170)] underline-offset-4"
                    >
                      {item.title}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <LetsTalkButton />
          </NavigationMenu>

          

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            {openNavbarToggle ? (
              <NavbarCloseIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <MenuIcon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE SLIDE-IN MENU */}
        <div
          className={`fixed top-0 right-0 h-auto bg-white/90 shadow-lg z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
            openNavbarToggle ? "translate-x-0" : "translate-x-full"
          } w-auto max-w-fit px-6 py-8`}
        >

        <div className="flex flex-col items-start gap-6 mt-10">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.link}
              onClick={() => setNavbarToggle(false)}
              style={{ color: "rgb(66, 153, 170)" }}
              className="text-base font-medium transition-colors hover:text-black hover:underline decoration-[rgb(66,153,170)] underline-offset-4"
            >
              {item.title}
            </a>
          ))}
        </div>
        <LetsTalkButton />
        </div>

      {/* OVERLAY BACKDROP */}
      {openNavbarToggle && (
        <div
          className="fixed inset-0 bg-purple-500/30 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={() => setNavbarToggle(false)}
        />
      )}
    </>
  );
}
