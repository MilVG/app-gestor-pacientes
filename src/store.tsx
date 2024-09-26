import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { Paciente, PacienteTemporal } from './types'


type PacientesState = {
  pacientes: Paciente[],
  activeId: string
  addPacientes: (data: PacienteTemporal) => void
  eliminarPaciente: (id: Paciente['id']) => void
  obtenerIdPaciente: (id: Paciente['id']) => void
  actulizarPaciente: (data: PacienteTemporal) => void
}

const createPaciente = (paciente: PacienteTemporal): Paciente => {
  return { ...paciente, id: uuidv4() }
}

export const usePacientes = create<PacientesState>()(
  devtools<PacientesState>(
    (set) => ({
      pacientes: [],
      activeId: '',
      addPacientes: (data: PacienteTemporal) => {
        const newPaciente = createPaciente(data);
        set((state) => ({
          pacientes: [...state.pacientes, newPaciente],
        }));
      },
      eliminarPaciente: (id: string) => {
        set((state) => ({
          pacientes: state.pacientes.filter((paciente) => paciente.id !== id),
        }));
      },
      obtenerIdPaciente: (id: string) => {
        set(() => ({
          activeId: id,
        }));
      },
      actulizarPaciente(data) {
        set((state) => ({
          pacientes: state.pacientes.map(
            paciente => paciente.id === state.activeId ?
              { id: state.activeId, ...data }
              : paciente
          ),
          activeId: ''
        }))

      },
    }),
  ),
)

