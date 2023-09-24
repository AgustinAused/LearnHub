"use client";
import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    
      <Carousel transition={{ duration: 1 }} className="rounded-xl max-h-[26rem]  " autoplay loop >
      <img
        src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80 "
        alt="image 1"
        className="max-h-[26rem] w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="image 2"
        className="max-h-[26rem] w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2041&q=80"
        alt="image 3"
        className="max-h-[26rem] w-full object-cover"
      />
    </Carousel>
   
  );
}
