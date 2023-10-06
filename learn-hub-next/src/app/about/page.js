export default function page() {
    return (
        <div className="min-h-screen flex flex-col">
        
            <h1 className="text-4xl font-semibold text-center">About Us</h1>
        

        <main className="container mx-auto my-8 p-8 bg-white shadow rounded-lg">
            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-800 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius massa at tellus fermentum,
                    quis dapibus justo ultricies. Sed consectetur, elit at pulvinar vulputate, arcu felis
                    bibendum mauris, nec ullamcorper arcu ex sit amet odio.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-800 leading-relaxed">
                    Nunc auctor risus nec tellus eleifend, vel tincidunt lorem facilisis. Ut sit amet gravida
                    mauris, vel fringilla velit. Fusce sit amet arcu vitae dolor scelerisque tristique.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                        <div className="bg-gray-300 h-48 rounded-lg"></div>
                        <p className="text-gray-800 text-center mt-2">John Doe</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                        <div className="bg-gray-300 h-48 rounded-lg"></div>
                        <p className="text-gray-800 text-center mt-2">Jane Smith</p>
                    </div>
                    {/* Agrega más miembros del equipo según sea necesario */}
                </div>
            </section>
        </main>
    </div>
    )
}