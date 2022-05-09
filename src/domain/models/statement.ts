export enum OperationType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw"
}

export namespace Statement {
  export type Params = {
    clientId: string
    description?: string
    amount: number
    type: OperationType
  }
  export type Model = {
    id: string
    clientId: string
    description: string
    amount: number
    type: OperationType
    createdAt: Date
  }
}
