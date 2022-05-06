import { Statement } from "@domain/models";

export interface CreateStatement {
  create(statementData: Statement.Params): Promise<Statement.Model>
}
