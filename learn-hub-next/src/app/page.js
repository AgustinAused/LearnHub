import { CarouselCustomNavigation } from "@/components/carrousel/Carousel";
import { HorizontalCard } from "@/components/cards/HorizontalCard";
import { BackgroundBlogCard } from "@/components/cards/BackgroundBlogCard";
import { HorizontalCardinvert } from "@/components/cards/HorizontalCardInvert";
import Encabezado from "@/components/Encabezado";

export default function Home() {
  return (
    <main className="p-12">
      <Encabezado />
      <section className=" flex justify-center content-center">

        <CarouselCustomNavigation />

      </section>
      
      <section className="flex  flex-col my-8 justify-center items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <BackgroundBlogCard />
        <BackgroundBlogCard />
        <BackgroundBlogCard />
      </section>

      <section className="my-8 flex flex-col items-center space-y-4">
        <HorizontalCard variant="gradient" />
        <HorizontalCardinvert />
        <HorizontalCard />
      </section>
    </main>
  );
}
