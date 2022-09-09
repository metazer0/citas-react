import {useState, useEffect} from 'react'

const Formulario = () => {

    // const [nombre, setNombre] = useState('')

    // setNombre('Julio')

    // console.log(nombre)

  return (
    <div className="md:w-1/2 lg:w-2/5 h-screen">
       <h2 className="font-black text-3xl text-center">Formulario</h2> 

       <p className="text-lg mt-5 text-center mb-10">
        Agrega Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
       </p>

       <form className="bg-white shadow-lg rounded-lg py-10 px-10 mb-10">
        <div className="mb-5">
            <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre</label>
            <input 
            id="nombre"
            type="text"
            placeholder="Nombre del paciente"
            className="border-4 p-2 mt-3 w-full rounded-lg placeholder-gray-400"
            />
        </div>
        <div className="mb-5">
            <label htmlFor="apellido" className="block text-gray-700 uppercase font-bold">Apellido</label>
            <input 
            id="apellido"
            type="text"
            placeholder="Apellido del paciente"
            className="border-4 p-2 mt-3 w-full rounded-lg placeholder-gray-400"
            />
        </div>

        <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo Electronico</label>
            <input 
            id="email"
            type="email"
            placeholder="paciente@correo.com"
            className="border-4 p-2 mt-3 w-full rounded-lg placeholder-gray-400"
            />
        </div>

        <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input 
            id="alta"
            type="date"
            className="border-4 p-2 mt-3 w-full rounded-lg placeholder-gray-400"
            />
        </div>

        <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
            <textarea id="sintomas" placeholder="Describe los sintomas" className="border-4 rounded-lg w-full"/>
        </div>
        
        <input 
        value="Agregar Paciente" type="submit" 
        className="bg-indigo-600  w-full p-3 rounded-lg text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all"/>

       </form>

    </div>
  )
}

export default Formulario