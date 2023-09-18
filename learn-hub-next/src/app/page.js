import { CarouselCustomNavigation } from "@/components/carrousel/Carousel";
import { HorizontalCard } from "@/components/cards/HorizontalCard";
import { BackgroundBlogCard } from "@/components/cards/BackgroundBlogCard";
import { HorizontalCardinvert } from "@/components/cards/HorizontalCardInvert";

export default function Home() {
  return (
    <main className="p-12">
        <div class=" h-screen flex items-center justify-center">
          <div class="text-center text-black">
            <h1 class="text-6xl font-extrabold mb-6">Publica tus servicios</h1>
            <h2 class="text-3xl font-semibold mb-8">en nuestra página web</h2>
            <a
              href="#"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              ¡Empieza Ahora!
            </a>
          </div>
        </div>
      <section className=" flex justify-center content-center">
        <div>
          <CarouselCustomNavigation />
        </div>
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
