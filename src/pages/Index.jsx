import salmon from '../assets/salmon.jpg';
import pollo from '../assets/pollo.jpg';
import estofado from '../assets/estofado.jpeg';
import salchipapa from '../assets/salchipapa.jpg';
import puntaAnca from '../assets/punta_anca.jpg';
import espaguetis from '../assets/espaguetis.jpg';

function Index() {
    return (
        <>
            <div className='px-36 py-12'>
                <h2 className="text-center font-bold text-6xl mb-10">Menú</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-24 sm:gap-36">
                    {/* Card 1 */}
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                        <img className="rounded-t-lg w-96" src={salmon} alt="Filete de Salmon" />
                        </a>
                        <div className="p-8">
                            <a  href="#">
                                <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 font-sans">Filete de Salmón Glaseado con Cítricos</h5>
                            </a>
                            <p className="mb-6 font-normal text-gray-800 text-2xl font-sans ">Salmón fresco marinado en una mezcla cítrica y asado para un sabor exquisito.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 ">
                                $42.000 COP
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                        <img className="rounded-t-lg w-96" src={pollo} alt="Filete de Salmon" />
                        </a>
                        <div className="p-8">
                            <a  href="#">
                                <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 font-sans">Pollo al Curry con Arroz</h5>
                            </a>
                            <p className="mb-6 font-normal text-gray-800 text-2xl font-sans ">Trozos de pollo sazonados con especias y cocinados lentamente junto a arroz aromático.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                $35.000 COP
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                        <img className="rounded-t-lg w-96" src={estofado} alt="Filete de Salmon" />
                        </a>
                        <div className="p-8">
                            <a  href="#">
                                <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 font-sans">Estofado de Carne con Verduras</h5>
                            </a>
                            <p className="mb-6 font-normal text-gray-800 text-2xl font-sans ">Mezcla de carnes tiernas y verduras frescas cocidas a fuego lento en un caldo aromático.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                $32.000 COP
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                        <img className="rounded-t-lg w-96" src={salchipapa} alt="Filete de Salmon" />
                        </a>
                        <div className="p-8">
                            <a  href="#">
                                <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 font-sans">Salchipapa Gratinada</h5>
                            </a>
                            <p className="mb-6 font-normal text-gray-800 text-2xl font-sans ">Papas fritas crujientes cubiertas con queso gratinado derretido y acompañadas de sabrosas salchichas.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                $22.000 COP
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                        <img className="rounded-t-lg w-96" src={puntaAnca} alt="Filete de Salmon" />
                        </a>
                        <div className="p-8">
                            <a  href="#">
                                <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 font-sans">Filete de Punta de Anca a la Parrilla</h5>
                            </a>
                            <p className="mb-6 font-normal text-gray-800 text-2xl font-sans ">Filete jugoso de punta de anca sazonado con hierbas y especias, asado a la parrilla.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                $45.000 COP
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                        <img className="rounded-t-lg w-96" src={espaguetis} alt="Filete de Salmon" />
                        </a>
                        <div className="p-8">
                            <a  href="#">
                                <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 font-sans">Espaguetis a la Carbonara Tradicional</h5>
                            </a>
                            <p className="mb-6 font-normal text-gray-800 text-2xl font-sans ">Espaguetis al dente mezclados con una cremosa salsa de huevo, panceta, queso y pimienta negra.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                $42.000 COP
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Index
