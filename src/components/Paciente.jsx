const Paciente = () => {
  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-lg">
    <p className="font-bold mb-3 text-gray- uppercase">Nombre:{' '}
    <span className="font-normal normal-case">Pedro</span>
    </p>
    <p className="font-bold mb-3 text-gray- uppercase">Apellido:{' '}
    <span className="font-normal normal-case">Jimenez</span>
    </p>
    <p className="font-bold mb-3 text-gray- uppercase">Correo electronico:{' '}
    <span className="font-normal normal-case">pedro.jimenez@gmail.com</span>
    </p>
    <p className="font-bold mb-3 text-gray- uppercase">Fecha de Alta:{' '}
    <span className="font-normal normal-case">15 de Enero de 2021</span>
    </p>
    <p className="font-bold mb-3 text-gray- uppercase">Sintomas:{' '}
    <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem impedit iste recusandae facilis minima ipsa itaque quae odio atque, minus, maxime nesciunt excepturi ullam? Veritatis nemo illo hic sed quaerat!</span>
    </p>
  </div>
  )
}

export default Paciente