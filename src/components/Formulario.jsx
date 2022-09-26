import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes,setPacientes}) => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random+fecha
    }

    const handleSubmit = (e) =>{
        
        e.preventDefault()

        //validar formulario

        if([nombre,apellido,email,fecha,sintomas].includes('')){
            setError(true)
        }else{
            setError(false)

            const objetoPaciente = {
                nombre,
                apellido,
                nombreCompleto: nombre+' '+apellido,
                email,
                fecha,
                sintomas,
                id: generarId()
            }

            // console.log(objetoPaciente.nombreCompleto)

            setPacientes([...pacientes,objetoPaciente])
            
            //Reiniciar form

            setNombre('')
            setApellido('')
            setEmail('')
            setFecha('')
            setSintomas('')
        }
    }


  return (
    <div className="md:w-1/2 lg:w-2/5 h-screen mr-5">
       <h2 className="font-black text-3xl text-center">Formulario</h2> 

       <p className="text-lg mt-5 text-center mb-10">
        Agrega Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
       </p>

       <form 
       onSubmit={handleSubmit}
       className="bg-white shadow-lg rounded-lg py-10 px-10 mb-10"
       >
            {error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className="mb-5">
            <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre</label>
            <input 
            id="nombre"
            type="text"
            placeholder="Nombre del paciente"
            className="border-4 p-2 mt-3 w-full rounded-lg placeholder-gray-400"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="apellido" className="block text-gray-700 uppercase font-bold">Apellido</label>
            <input 
            id="apellido"
            type="text"
            placeholder="Apellido del paciente"
            className="border-4 p-2 mt-3 w-full rounded-lg placeholder-gray-400"
            value={apellido}
            onChange={(e)=>setApellido(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo Electronico</label>
            <input 
            id="email"
            type="email"
            placeholder="paciente@correo.com"
            className="border-4 p-2 mt-3 w-full rounded-lg placeholder-gray-400"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input 
            id="alta"
            type="date"
            className="border-4 p-2 mt-3 w-full rounded-lg placeholder-gray-400"
            value={fecha}
            onChange={(e)=>setFecha(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
            <textarea id="sintomas" placeholder="Describe los sintomas" className="border-4 rounded-lg w-full"
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}
            />
        </div>
        
        <input 
        value="Agregar Paciente" type="submit" 
        className="bg-indigo-600  w-full p-3 rounded-lg text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all"/>

       </form>

    </div>
  )
}

export default Formulario