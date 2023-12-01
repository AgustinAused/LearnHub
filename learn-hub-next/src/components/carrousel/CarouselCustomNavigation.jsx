"use client";
import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation({imagen}) {

  return (
    
      <Carousel transition={{ duration: 1 }} className="rounded-xl max-h-[26rem]  " autoplay loop >
      <img
        src={imagen}
        alt="image 1"
        className="max-h-[32rem] w-full object-cover"
      />
      
    </Carousel>
   
  );
}
