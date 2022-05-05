export namespace Client {
  export type Params = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }
  export type Model = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
  }
}


