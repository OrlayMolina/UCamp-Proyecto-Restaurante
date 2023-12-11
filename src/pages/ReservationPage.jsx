import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import { db } from '../config/database';
import { collection, getDocs } from 'firebase/firestore';

function ReservationPage() {

    const [reservaciones, setReservaciones] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
        const data = await getDocs(collection(db, 'reservaciones'));
        setReservaciones(data.docs.map(doc => doc.data()));
    };

        fetchReservations();
    }, []);

    return (
        <>
            <Header />
            <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-6xl font-bold text-center mb-12">Reservaciones</h2>

                <p className="text-3xl mb-10 text-justify">Planificar tu experiencia culinaria nunca fue tan sencillo. Verifica la disponibilidad para tu reservación y asegura tu lugar en nuestro encantador restaurante. Con solo unos clics, accede a nuestro sistema de reservas en línea, donde podrás seleccionar la fecha, hora y número de comensales para garantizar una experiencia gastronómica sin contratiempos. Nuestra plataforma de reservas está diseñada para ofrecerte comodidad y flexibilidad, permitiéndote explorar nuestras opciones de disponibilidad y encontrar el momento perfecto para tu visita.</p>

                <p className="text-3xl mb-10 text-justify">Además, si prefieres una atención más personalizada, nuestro equipo está siempre disponible para ayudarte con tu reserva. Ya sea a través de una llamada telefónica o un correo electrónico, estaremos encantados de asegurarnos de que tu visita sea excepcional desde el momento en que decides unirte a nosotros. ¡Verifica la disponibilidad ahora mismo y prepárate para disfrutar de una experiencia gastronómica memorable en nuestro restaurante!</p>


                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-800">
                    <thead>
                        <tr className="bg-emerald-600 text-white p-4">
                        <th className="border border-gray-800 px-4 py-2 text-4xl">Nombres</th>
                        <th className="border border-gray-800 px-4 py-2 text-4xl">Apellidos</th>
                        <th className="border border-gray-800 px-4 py-2 text-4xl">Número de Asientos</th>
                        <th className="border border-gray-800 px-4 py-2 text-4xl">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservaciones.map((reservacion, index) => (
                        <tr key={index} className="border border-gray-800">
                            <td className="border border-gray-800 px-4 py-2 text-3xl">{reservacion.nombres}</td>
                            <td className="border border-gray-800 px-4 py-2 text-3xl">{reservacion.apellidos}</td>
                            <td className="border border-gray-800 px-4 py-2 text-3xl">{reservacion.cuantos}</td>
                            <td className="border border-gray-800 px-4 py-2 text-3xl">{reservacion.fecha}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ReservationPage
