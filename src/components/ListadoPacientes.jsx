import {useEffect} from 'react'
import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {

  useEffect(() =>{
    if(pacientes.length > 0){
      console.log('nuevo paciente')
    }
  },[pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes.length === 0 ? (
        <>
        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2> 
        <p className="text-lg mt-5 text-center mb-10">
          Comienza agregando pacientes {''}
          <span className="text-indigo-600 font-bold">y van a aparecer aqui</span>
        </p>
        </>
      ):
      (
        <>
        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2> 
        <p className="text-lg mt-5 text-center mb-10">
          Administra tus {''}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
        </>
      )}
       

      {pacientes.map((paciente) =>{
        return(
          <Paciente
          key = {paciente.id}
          paciente = {paciente}
          setPaciente = {setPaciente}
          eliminarPaciente = {eliminarPaciente}
          />
        )
      })}
    </div>
  )
}

export default ListadoPacientes
