import { Form } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Index from "../pages/Index";

function Layout() {
    return (
        <>
            <Header />
            <Index />
            <main>
                <h2 className="text-6xl">Desde el Main ...</h2>

                <Form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Nombre
                            </label>

                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>

                        </div>

                        <div className="w-full md:w-1/2 px-3">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Apellido
                            </label>

                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>

                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Número de Acompañantes
                            </label>

                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>

                        </div>

                        <div className="w-full md:w-1/2 px-3">

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Fecha
                            </label>

                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>

                        </div>
                    </div>
                    
                    
                </Form>
            </main>
            
            <Footer />
        </>
      );
      
}

export default Layout;
