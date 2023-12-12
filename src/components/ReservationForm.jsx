import { Form } from 'react-router-dom';
import { useState } from 'react'
import { db } from '../config/database';
import { collection, addDoc, getDocs } from "firebase/firestore";

function ReservationForm() {

  const [formulario, setFormulario] = useState({
    nombres:"",
    apellidos:"",
    cuantos: "",
    fecha: ""
  });


  const handleInputChange = (event) => {
    setFormulario({
        ...formulario,
        [event.target.name]: event.target.value
    });
  }

  const reservar = async (event) => {
    event.preventDefault();
    console.log(formulario);
    // aqui ya podemos mandar "formulario" a firebase
    await addDoc(collection(db, "reservaciones"), formulario);
    // Al codigo siguiente es para traer esos datos....
    const datos = await getDocs(collection(db, "reservaciones"));
    console.log(datos.docs.map((doc)=> {return doc.data()}));
  }

  return (
    <div className="mb-36 px-4">
      <h2 className="mt-12 text-center font-bold text-6xl mb-12">Reservación</h2>

      <Form 
        onSubmit={reservar}
        className="w-full md:max-w-lg mx-auto" 
      >
        <div className="mb-6">
          <label htmlFor="nombres" className="block mb-2 text-3xl font-medium text-gray-900">Nombres</label>
          <input type="text" id="nombres" name="nombres" onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500" />
        </div>

        <div className="mb-6">
          <label htmlFor="apellidos" className="block mb-2 text-3xl font-medium text-gray-900">Apellidos</label>
          <input type="text" id="apellidos" name="apellidos" onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500" />
        </div>

        <div className="mb-6">
          <label htmlFor="cuantos" className="block mb-2 text-3xl font-medium text-gray-900">Número de Asientos en Total</label>
          <input type="text" id="cuantos" name="cuantos" onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500" />
        </div>

        <div className="mb-6">
          <label htmlFor="fecha" className="block mb-2 text-3xl font-medium text-gray-900">Fecha de Reservación</label>
          <input type="text" id="fecha" name="fecha" placeholder='dd/mm/aaaa' onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500" />
        </div>

        <div className="text-center">
          <button type="submit" className="px-6 py-3 text-3xl font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:bg-emerald-700">Reservar</button>
        </div>
      </Form>
    </div>
  );
}

export default ReservationForm;
