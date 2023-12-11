import imagen from "../assets/restaurante.png";

function Description() {
    return (
        <>
            {/* Seccion */}
            <div className="mb-24 px-40">
                <h2 className="mt-12 text-center font-bold text-6xl mb-12">UCamp Restaurant</h2>

                <p className="mx-10 text-3xl mb-10 text-justify">Con una visión clara de resaltar los sabores locales y ofrecer un espacio encantador para disfrutar de auténticos platos de la región, <span className="font-bold">Sabores de Montaña</span>  abrió sus puertas. Ubicado en un encantador edificio de estilo colonial restaurado, el restaurante se convirtió en un ícono reconocido por su ambiente acogedor y su exquisita oferta gastronómica.</p>

                <p className="mx-10 text-3xl mb-10 text-justify">A lo largo de los años, <span className="font-bold">Sabores de Montaña</span> se ha convertido en un verdadero emblema de la escena gastronómica de la región, celebrando la cultura local a través de sus platos y siendo un destino imprescindible para aquellos que buscan una experiencia culinaria auténtica en Armenia, Quindío.</p>

                <div className="flex justify-center items-center rounded-md m-24">
                    <img  src={imagen} alt="Descripción de la imagen" />
                </div>


            </div>
        </>
    )
}

export default Description
