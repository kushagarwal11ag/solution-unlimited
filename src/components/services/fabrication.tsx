"use client";
import { useState } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const Fabrication = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col justify-center order-2 lg:order-1">
        <div className="grid gap-2">
          <h3 className="text-xl font-bold">Design and PEB Fabrication</h3>

          <div
            className={`gutter overflow-hidden ${
              expanded ? "overflow-y-auto" : ""
            } transition-all duration-500 text-black/85 dark:text-white/85 max-h-24`}
          >
            {!expanded ? (
              <p>
                We offer design, fabrication, installation, upgrades, repairs,
                and maintenance of Pre-Engineered Building (PEB) structures. Our
                durable, compliant solutions extend the lifespan and
                functionality of your buildings.
              </p>
            ) : (
              <ul
                className={`${
                  expanded ? "block" : "hidden"
                } p-4 list-disc list-inside`}
              >
                <div className="flex">
                  <li></li>
                  Steel Building Solutions
                </div>
                <div className="flex">
                  <li></li>
                  Industrial and Commercial Building Construction
                </div>
                <div className="flex">
                  <li></li>
                  Roofing and Cladding Solutions
                </div>
                <div className="flex">
                  <li></li>
                  Structural Steel Fabrication
                </div>
                <div className="flex">
                  <li></li>
                  Pre-Engineered Building Systems
                </div>
              </ul>
            )}
          </div>

          <Button variant="default" onClick={toggleReadMore}>
            {expanded ? "Read less" : "Read more"}
          </Button>
        </div>
      </div>
      <Carousel
        className="overflow-hidden order-1 lg:order-2 rounded-xl"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="relative h-64">
            <Image
              src="/fabrication.jpg"
              layout="fill"
              objectFit="cover"
              alt="Man fabricating"
            />
          </CarouselItem>
          <CarouselItem className="relative h-64">
            <Image
              src="/fabrication-2.jpg"
              layout="fill"
              objectFit="cover"
              alt="Person fabricating pipes"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Fabrication;
