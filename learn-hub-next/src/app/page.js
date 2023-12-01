"use client";
import { CarouselCustomNavigation } from "@/components/carrousel/CarouselCustomNavigation";
import { HorizontalCard } from "@/components/cards/HorizontalCard";
import { BackgroundBlogCard } from "@/components/cards/BackgroundBlogCard";
import { HorizontalCardinvert } from "@/components/cards/HorizontalCardInvert";
import Encabezado from "@/components/Encabezado";

export default function Home() {
  return (
    <main className="p-8">
      <Encabezado />
      
      <section className="flex  flex-col my-4 justify-center items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <BackgroundBlogCard
          parrafo={
            "LearnHub es brillante. Clases variadas, profesores apasionados y una experiencia fácil. Mi opción para aprender."
          }
          persona={"Elena García"}
          avatar={"/avatares/3.jpg"}
          background={"/stock/guitarclass.jpg"}
        />
        <BackgroundBlogCard
          parrafo={
            "¡Impresionante plataforma! Clases de alta calidad, profesores expertos y fácil de usar. Aprendizaje sin complicaciones."
          }
          persona={"Daniel Martínez"}
          avatar={"/avatares/47.jpg"}
          background={"/stock/frontclass.jpg"}
        />
        <BackgroundBlogCard
          parrafo={
            "LearnHub es genial. Clases increíbles, profesionales dedicados y una interfaz sencilla. Recomiendo encarecidamente."
          }
          persona={"Laura Sánchez"}
          avatar={"avatares/22.jpg"}
          background={"/stock/mathclass.jpg"}
        />
      </section>

      <section className="my-8 flex flex-col items-center space-y-4">
        <HorizontalCard
          variant="gradient"
          title={"Variedad y Acceso a Expertos"}
          parah={
            "Una plataforma de marketplace de clases ofrece acceso a una amplia variedad de temas y disciplinas, desde idiomas y artes creativas hasta habilidades técnicas y académicas. Los estudiantes pueden elegir entre una gama diversa de profesores y expertos en sus campos, lo que les permite encontrar el mentor perfecto para sus necesidades específicas de aprendizaje."
          }
          image={"/stock/ski.jpg"}
        />
        <HorizontalCardinvert
          title={"Flexibilidad y Conveniencia"}
          parah={
            "Estas plataformas suelen ofrecer flexibilidad en términos de horarios y ubicación. Los estudiantes pueden tomar clases desde la comodidad de sus hogares, adaptando sus horarios de aprendizaje para que se ajusten a sus agendas ocupadas. Esto es especialmente beneficioso para aquellos con compromisos laborales o académicos."
          }
        />
        <HorizontalCard
          title={"Comunidad y Retroalimentación"}
          parah={
            "Muchas plataformas de marketplace de clases fomentan la creación de una comunidad educativa en línea. Los estudiantes pueden interactuar entre sí, compartir experiencias y colaborar en proyectos. Además, los sistemas de retroalimentación y reseñas permiten a los estudiantes evaluar la calidad de las clases y de los profesores, ayudando a otros usuarios a tomar decisiones informadas sobre sus elecciones de aprendizaje."
          }
          image={"/stock/women.jpg"}
        />
      </section>
    </main>
  );
}
