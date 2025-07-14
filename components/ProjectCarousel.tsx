"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IPresentation } from "@/interface/project-interface";
import Image from "next/image";

type ProjectCarouselProps = {
  data: IPresentation[];
};

const ProjectCarousel = ({ data }: ProjectCarouselProps) => {
  return (
    <Carousel
      className="w-full overflow-hidden rounded-lg shadow-lg"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="flex">
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="flex w-full items-center justify-center"
          >
            {item.type === "image" ? (
              <div className="relative mx-auto aspect-video w-4/5">
                <Image
                  src={item.src}
                  alt={`Présentation ${index + 1}`}
                  fill
                  className="rounded-md object-contain"
                  priority={index === 0}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
              </div>
            ) : (
              <video
                controls
                className="aspect-video w-full max-w-[1200px] rounded-lg object-contain"
              >
                <source src={item.src} type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
};

export default ProjectCarousel;
