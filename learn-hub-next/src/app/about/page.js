export default function page() {
  return (
    <div className=" bg-gray-100 rounded-2xl p-6 min-h-screen flex flex-col">
      <h1 className="text-4xl font-semibold text-center">Sobre Nosotros</h1>

      <section className=" py-16">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-semibold mb-4">Nuestra Historia</h2>
            <p className="text-gray-700 mb-8">
              Somos una empresa comprometida con la excelencia en la búsqueda y
              publicación de servicios de profesionales. Fundada en [Año de
              Fundación], nuestra misión es conectar a personas con expertos en
              diversas áreas para satisfacer sus necesidades.
            </p>

            <h2 className="text-3xl font-semibold mb-4">Nuestro Equipo</h2>
            <p className="text-gray-700 mb-8">
              Nuestro equipo está formado por apasionados y experimentados
              profesionales dedicados a brindar el mejor servicio a nuestros
              clientes. Juntos, trabajamos arduamente para garantizar que los
              servicios que ofrecemos sean de la más alta calidad.
            </p>

            <h2 className="text-3xl font-semibold mb-4">Nuestra Visión</h2>
            <p className="text-gray-700">
              Queremos ser la plataforma de referencia para encontrar
              profesionales confiables y expertos en todas las áreas. Nos
              esforzamos por simplificar la búsqueda de servicios y promover el
              crecimiento de profesionales talentosos.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
              alt="Nuestra Oficina"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
