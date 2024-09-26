import { ToastContainer } from "react-toastify"
import PacientesForm from "./components/PacientesForm"
import PacientesList from "./components/PacientesList"
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <>
      <div className="container bg-sky-300 mx-auto">
        <h1 className="text-5xl font-black text-center md:w-2/3 md:mx-auto"
        > Seguimiento de Pacientes <span className="text-indigo-700">Veterinaria</span>
        </h1>
        <div className="bg-orange-300 mt-12 md:flex">
          <PacientesForm />
          <PacientesList />

        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
