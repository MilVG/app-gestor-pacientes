import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { Paciente, PacienteTemporal } from './types'

type PacientesState = {
  pacientes: Paciente[]
  addPacientes: (data: PacienteTemporal) => void
}

const createPaciente = (paciente: PacienteTemporal): Paciente => {
  return { ...paciente, id: uuidv4() }
}

export const usePacientes = create<PacientesState>((set) => ({
  pacientes: [],
  addPacientes: (data) => {

    const newPaciente = createPaciente(data)
    set((state) => ({
      pacientes: [...state.pacientes, newPaciente]
    }))

  }
}))
