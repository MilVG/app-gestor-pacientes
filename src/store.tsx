import { create } from 'zustand'
import { Paciente } from './types'

type PacientesState = {
  pacientes: Paciente[]
}

export const usePacientes = create<PacientesState>(() => ({
  pacientes: []
}))
