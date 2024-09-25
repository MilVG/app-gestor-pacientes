


type PacientePropsDetalle = {
  label: string
  data: string
}
export default function PacienteDetalleElemento({ label, data }: PacientePropsDetalle) {
  return (


    <p className="font-bold mb-3 text-gra text-gray-700 uppercase">{label}: {''}
      <span className="font-normal normal-case">{data}</span>
    </p>


  )
}

