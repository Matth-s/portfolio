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
      className="my-2 flex h-fit w-full items-center shadow-lg lg:h-96"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="p-0">
        {data.map((item, idx) => (
          <CarouselItem key={idx} className="h-full max-h-96">
            {item.type === "image" ? (
              <div className="mx-auto aspect-video w-full rounded-lg lg:w-4/5">
                <Image
                  src={item.src}
                  alt={`presentation ${idx}`}
                  width={200}
                  height={170}
                  quality={100}
                  decoding="async"
                  layout="responsive"
                  unoptimized={true}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
      <CarouselPrevious className="left-0 hidden lg:flex" />
      <CarouselNext className="right-0 hidden lg:flex" />
    </Carousel>
  );
};

export default ProjectCarousel;
