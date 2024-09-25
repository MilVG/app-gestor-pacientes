import { create } from 'zustand'
import { Paciente, PacienteTemporal } from './types'

type PacientesState = {
  pacientes: Paciente[]
  addPacientes: (data: PacienteTemporal) => void
}

export const usePacientes = create<PacientesState>(() => ({
  pacientes: [],
  addPacientes: (data) => {
    console.log(data);

  }
}))
