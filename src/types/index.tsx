export type Paciente = {
  id: string
  name: string
  caretaker: string
  email: string
  date: Date
  symptoms: string

}

export type PacienteTemporal = Omit<Paciente, 'id'>
