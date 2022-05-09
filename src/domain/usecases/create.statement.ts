import { Statement } from "@domain/models";

export interface ICreateStatement {
  create(statementData: Statement.Params): Promise<void>
}
