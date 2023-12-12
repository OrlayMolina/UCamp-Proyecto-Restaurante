import Header from '../components/Header'
import Index from './Index';
import Footer from '../components/Footer';

function Menu() {
    return (
        <>
            <Header />
            <div className="py-24 px-4">

                <h2 className="mt-5 text-center font-bold text-6xl mb-12">Nuestros Sabores</h2>

                <p className="text-3xl mb-10 text-justify">Sumérgete en un mundo de sabores exquisitos y texturas fascinantes con nuestra selección de platos gastronómicos. Desde la seductora delicadeza del salmón glaseado con cítricos hasta el reconfortante estofado de carnes y verduras, cada bocado es una sinfonía de sabores cuidadosamente equilibrados. No puedes dejar pasar la oportunidad de deleitarte con nuestra especialidad: las papas gratinadas con queso derretido y la tentadora salchicha, una explosión de sabor que hará bailar tus papilas gustativas.</p>

                <p className="text-3xl mb-10 text-justify">Además, no te pierdas el auténtico pollo al curry con arroz aromático, una fusión de especias que te transportará a tierras lejanas con cada bocado. Y para los amantes de la pasta, nuestra carbonara tradicional con espaguetis al dente es simplemente incomparable. Cada plato ha sido cuidadosamente elaborado con ingredientes frescos y se ha convertido en un símbolo de la excelencia culinaria que ofrecemos.</p>

                <p className="text-3xl mb-10 text-justify">Ven y déjate seducir por una experiencia culinaria única. ¡No pierdas la oportunidad de saborear estos manjares que te transportarán a un viaje gastronómico inolvidable!</p>

            </div>
            <Index />
            <Footer />
        </>
    )
}

export default Menu
