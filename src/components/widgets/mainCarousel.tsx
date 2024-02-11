"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import Slides from "@/templates/slides";
import { Sidemenu } from "./sidemenu";
import { isSSR } from "@/lib/utils";
import { Loading } from "./loading";

type MainCarouselProps = {
  posts: any[];
};

export const MainCarousel: React.FC<MainCarouselProps> = ({ posts }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setReady(true);
  }, [api]);

  useEffect(() => {
    const goToSlideByHash = () => {
      if (isSSR()) {
        console.log(1);
        return;
      }

      const hashNumber = window.location.hash.split("#");

      if (
        !Array.isArray(hashNumber) ||
        hashNumber.length < 2 ||
        !Number.isInteger(Number(hashNumber[1]))
      ) {
        return;
      }

      api?.scrollTo(Number(hashNumber[1]), true);
    };

    goToSlideByHash();
  }, [api]);

  const carouselGoTo = (index: number) => {
    api?.scrollTo(index);
  };

  const slides = [
    <Slides.HomeSlide key="homeSlide" />,
    <Slides.ProjectsSlide key="projectsSlide" />,
    <Slides.PostsSlide key="blogSlide" posts={posts} />,
  ];

  const bgs = [
    "bg-gradient-to-r from-fuchsia-600 to-pink-600",
    "bg-gradient-to-r from-amber-500 to-pink-500",
    "bg-gradient-to-r from-blue-800 to-indigo-900",
  ];

  return (
    <>
      <Sidemenu carouselGoTo={carouselGoTo} />
      {!ready && (
        <div className="w-full h-full absolute flex justify-center items-center">
          <Loading />
        </div>
      )}
      <Carousel
        className={`w-full ${!ready ? "invisible" : ""}`}
        setApi={setApi}
      >
        <CarouselContent className="h-svh">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className={`h-full ${bgs[index]} gradient-animate`}>
                <div className="relative h-full flex items-center">
                  <div className="absolute left-0 w-full h-full bg-black opacity-50"></div>
                  <div className="relative w-full h-full flex flex-col">
                    <div className="w-full h-full z-10 px-2 py-5 bg-transparent backdrop-blur-sm rounded-md">
                      <ScrollArea className="w-full h-full">{slide}</ScrollArea>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
