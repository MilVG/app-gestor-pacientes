import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { Paciente, PacienteTemporal } from './types'

type PacientesState = {
  pacientes: Paciente[],
  activeId: string
  addPacientes: (data: PacienteTemporal) => void
  eliminarPaciente: (id: Paciente['id']) => void
  obtenerIdPaciente: (id: Paciente['id']) => void
}

const createPaciente = (paciente: PacienteTemporal): Paciente => {
  return { ...paciente, id: uuidv4() }
}

export const usePacientes = create<PacientesState>((set) => ({
  pacientes: [],
  activeId: '',
  addPacientes: (data) => {

    const newPaciente = createPaciente(data)
    set((state) => ({
      pacientes: [...state.pacientes, newPaciente]
    }))
  },

  eliminarPaciente: (id) => {
    set((state) => ({
      pacientes: state.pacientes.filter(paciente => paciente.id !== id)
    }))

  },

  obtenerIdPaciente: (id) => {
    console.log(id);

    set(() => ({
      activeId: id
    }))

  }
}))
