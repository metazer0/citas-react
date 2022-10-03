const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

  const {nombre,apellido,email,fecha,sintomas,id} = paciente

  const handleEliminar = () => {
    const res = confirm('Deseas eliminar este paciente?')

    if(res){
      eliminarPaciente(id)
    }
  }


  return (
    <div className="mx-5 bg-white shadow-md mb-5 px-5 py-10 rounded-lg">
    <p className="font-bold mb-3 text-gray- uppercase">Nombre:{' '}
    <span className="font-normal normal-case">{nombre}</span>
    </p>
    <p className="font-bold mb-3 text-gray- uppercase">Apellido:{' '}
    <span className="font-normal normal-case">{apellido}</span>
    </p>
    <p className="font-bold mb-3 text-gray- uppercase">Correo electronico:{' '}
    <span className="font-normal normal-case">{email}</span>
    </p>
    <p className="font-bold mb-3 text-gray- uppercase">Fecha de Alta:{' '}
    <span className="font-normal normal-case">{fecha}</span>
    </p>
    <p className="font-bold mb-3 text-gray- uppercase">Sintomas:{' '}
    <span className="font-normal normal-case">{sintomas}</span>
    </p>
    <div className="flex justify-center">
      <button type="button" 
      onClick={()=>setPaciente(paciente)}
      className="bg-indigo-600 mr-10 mt-5 px-10 py-3 rounded-lg text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all">
        Editar</button>

      <button type="button"
      onClick={handleEliminar}
      className="bg-red-600 px-10 mt-5 py-3 rounded-lg text-white font-bold uppercase hover:bg-red-700 cursor-pointer transition-all">
        Eliminar</button>
    </div>
  </div>
  )
}

export default Paciente