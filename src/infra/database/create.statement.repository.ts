import { randomUUID } from "node:crypto";
import { ICreateStatementRepository } from "@data/contracts";
import { Statement } from "@domain/models";
import { dynamodb } from "@infra/database"

export class CreateStatementRepository implements ICreateStatementRepository {
  async create(statementData: Statement.Params): Promise<void> {
    await dynamodb.put({
      TableName: "statements",
      Item: {
        id: randomUUID(),
        ...statementData
      }
    }).promise()
  }
}
