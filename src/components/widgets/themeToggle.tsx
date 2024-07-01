"use client";

import {
  DesktopIcon,
  MoonIcon,
  Pencil2Icon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="absolute right-7 bottom-7">
          <Button className="rounded-full w-[50px] h-[50px] border border-gray-300 dark:border-gray-600 bg-white text-black dark:text-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
            <Pencil2Icon />
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent
        className="bg-transparent backdrop-blur-lg"
        showHandle={false}
      >
        <div className="w-full relative">
          <div className="absolute w-full h-full bg-white dark:bg-black opacity-30 left-0 top-0"></div>
          <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
          <div className="mx-auto max-w-sm relative z-10">
            <DrawerHeader>
              <DrawerTitle className="text-black dark:text-white">
                Mudar tema
              </DrawerTitle>
              <DrawerDescription className="text-black dark:text-white">
                Selecione o tema de sua preferência
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex justify-between mb-4">
                <Button
                  className={`border rounded-full p-4 w-[50px] h-[50px] cursor-pointer text-black dark:text-white ${
                    theme === "light" ? "bg-white text-black" : "bg-transparent"
                  }`}
                  variant="ghost"
                  onClick={() => setTheme("light")}
                >
                  <SunIcon />
                </Button>
                <Button
                  className={`border rounded-full p-4 w-[50px] h-[50px] cursor-pointer text-black dark:text-white ${
                    theme === "dark"
                      ? "bg-white dark:text-black"
                      : "bg-transparent"
                  }`}
                  variant="ghost"
                  onClick={() => setTheme("dark")}
                >
                  <MoonIcon />
                </Button>
                <Button
                  className={`border rounded-full p-4 w-[50px] h-[50px] cursor-pointer text-black dark:text-white ${
                    theme === "system"
                      ? "bg-white dark:text-black"
                      : "bg-transparent"
                  }`}
                  variant="ghost"
                  onClick={() => setTheme("system")}
                >
                  <DesktopIcon />
                </Button>
              </div>
              <DrawerClose asChild>
                <Button variant="outline">Fechar</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
