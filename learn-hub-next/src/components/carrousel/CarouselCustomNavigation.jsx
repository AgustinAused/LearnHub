"use client";
import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation({imagen}) {

  return (
    
      <Carousel transition={{ duration: 1 }} className="rounded-xl   " autoplay loop >
      <img
        src={imagen}
        alt="image 1"
        className="max-h-[64rem] min-h-[32rem]  object-cover"
      />
      
    </Carousel>
   
  );
}
