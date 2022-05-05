import { Statement } from "../models";

export interface CreateStatement {
  create(statementData: Statement.Params): Promise<Statement.Model>
}
