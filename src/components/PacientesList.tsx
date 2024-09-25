import { usePacientes } from "../store"

export default function PacientesList() {
  const pacientes = usePacientes(state => state.pacientes)

  console.log(pacientes);

  return (
    <div>PacientesList</div>
  )
}

