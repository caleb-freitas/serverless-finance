import { Statement } from "../models";

export type LoadStatementParams = {
  startDate: string
  endDate: string
  clientId: string
}

export interface LoadStatementBetweenDates {
  load(loadStatementData: LoadStatementParams): Promise<Statement.Model[]>
}
