import { Form } from 'react-router-dom';

function ReservationForm() {
  return (
    <div className="mb-36 px-40">
      <h2 className="mt-12 text-center font-bold text-6xl mb-12">Reservación</h2>

      <Form className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="nombre" className="block mb-2 text-3xl font-medium text-gray-900">Nombre</label>
          <input type="text" id="nombre" name="nombre" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500" />
        </div>

        <div className="mb-6">
          <label htmlFor="apellido" className="block mb-2 text-3xl font-medium text-gray-900">Apellido</label>
          <input type="text" id="apellido" name="apellido" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500" />
        </div>

        <div className="mb-6">
          <label htmlFor="asiento" className="block mb-2 text-3xl font-medium text-gray-900">Número de Asientos</label>
          <input type="text" id="asiento" name="asiento" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500" />
        </div>

        <div className="mb-6">
          <label htmlFor="fecha" className="block mb-2 text-3xl font-medium text-gray-900">Fecha</label>
          <input type="date" id="fecha" name="fecha" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500" />
        </div>

        <div className="text-center">
          <button type="submit" className="px-6 py-3 text-3xl font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:bg-emerald-700">Reservar</button>
        </div>
      </Form>
    </div>
  );
}

export default ReservationForm;
