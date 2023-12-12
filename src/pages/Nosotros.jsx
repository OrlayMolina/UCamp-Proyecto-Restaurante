import Header from "../components/Header";
import Footer from "../components/Footer";
import imagen from "../assets/restaurante.png";

function Nosotros() {
    return (
        <>
            <Header />

            <div className="py-24 px-4">
                <h2 className="mt-5 text-center font-bold text-6xl mb-12">Sobre Nosotros</h2>

                <p className="text-3xl mb-10 text-justify">¡Bienvenido a nuestro restaurante! Disfruta de nuestra variada y deliciosa oferta gastronómica mientras reservas fácilmente en línea. Nuestro acogedor ambiente te espera para una experiencia culinaria excepcional. ¡Ven y déjanos deleitar tus sentidos!.</p>

                <p className="text-3xl mb-10 text-justify">En el vibrante corazón de Armenia, Quindío, en el año 2012, nació <span className="font-bold">Sabores de Montaña</span> , una iniciativa familiar que se convirtió en un refugio culinario para los amantes de la buena comida. Inspirados por la riqueza cultural y gastronómica de la región cafetera de Colombia, la familia Gómez decidió compartir su pasión por la cocina tradicional quindiana.</p>

                <p className="text-3xl mb-10 text-justify">Con una visión clara de resaltar los sabores locales y ofrecer un espacio encantador para disfrutar de auténticos platos de la región, <span className="font-bold">Sabores de Montaña</span>  abrió sus puertas. Ubicado en un encantador edificio de estilo colonial restaurado, el restaurante se convirtió en un ícono reconocido por su ambiente acogedor y su exquisita oferta gastronómica.</p>

                <p className="text-3xl mb-10 text-justify">A lo largo de los años, <span className="font-bold">Sabores de Montaña</span> se ha convertido en un verdadero emblema de la escena gastronómica de la región, celebrando la cultura local a través de sus platos y siendo un destino imprescindible para aquellos que buscan una experiencia culinaria auténtica en Armenia, Quindío.</p>

                <div className="flex justify-center items-center rounded-md w-full p-4">
                    <img  src={imagen} alt="Descripción de la imagen" />
                </div>


            </div>

            <Footer />
        </>
    )
}

export default Nosotros
