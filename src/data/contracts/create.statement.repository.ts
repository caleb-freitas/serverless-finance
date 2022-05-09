import { Statement } from "@domain/models";

export interface ICreateStatementRepository {
  create(statementData: Statement.Params): Promise<void>
}
