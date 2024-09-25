import { Paciente } from "../types"
import PacienteDetalleElemento from "./PacienteDetalleElemento"

type PacientesProps = {
  paciente: Paciente
}
export default function PacienteDetalle({ paciente }: PacientesProps) {
  return (
    <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl ">
      <PacienteDetalleElemento label="ID" data={paciente.id} />
      <PacienteDetalleElemento label="NOMBRE" data={paciente.name} />
      <PacienteDetalleElemento label="PROPIETARIO" data={paciente.caretaker} />
      <PacienteDetalleElemento label="EMAIL" data={paciente.email} />
      <PacienteDetalleElemento label="FECHA" data={paciente.date.toString()} />
      <PacienteDetalleElemento label="SÍNTOMAS" data={paciente.symptoms} />

      <div className="flex justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase
          rounded-lg"
        >Editar</button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase
          rounded-lg"
        >Eliminar</button>
      </div>
    </div>
  )
}

