"use client";
import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    
      <Carousel transition={{ duration: 1 }} className="rounded-xl max-h-[26rem]  " autoplay loop >
      <img
        src="https://plus.unsplash.com/premium_photo-1663126346116-f0ccaf232268?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="image 1"
        className="max-h-[26rem] w-full object-cover"
      />
      <img
        src="https://plus.unsplash.com/premium_photo-1661963351286-c056f9bfa86c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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
