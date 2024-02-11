"use client";

import { BackpackIcon, FileTextIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type MenuItem = {
  id: string;
  icon: React.ReactNode;
};

type SidemenuProps = {
  carouselGoTo?: (index: number) => void;
};

export const Sidemenu: React.FC<SidemenuProps> = ({ carouselGoTo }) => {
  const menus: MenuItem[] = [
    { id: "home", icon: <PersonIcon /> },
    { id: "projects", icon: <BackpackIcon /> },
    { id: "posts", icon: <FileTextIcon /> },
  ];

  const handleGoTo = (index: number) => {
    if (typeof carouselGoTo === "function") {
      carouselGoTo(index);
      return;
    }

    window.location.href = `/#${index}`;
  };

  return (
    <div className="absolute left-3 top-0 h-full flex items-center">
      <div className="relative z-10 px-2 py-2 border rounded-lg flex flex-col backdrop-blur-sm">
        {menus.map((menu, index) => (
          <Button
            key={menu.id}
            className="z-20"
            variant="ghost"
            onClick={() => handleGoTo(index)}
          >
            {menu.icon}
          </Button>
        ))}
        <div className="bg-white dark:bg-black opacity-50 absolute left-0 top-0 w-full h-full"></div>
      </div>
    </div>
  );
};
