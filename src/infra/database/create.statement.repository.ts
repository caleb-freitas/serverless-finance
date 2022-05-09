import { ICreateStatementRepository } from "@data/contracts";
import { Statement } from "@domain/models";
import { dynamodb } from "@infra/database"
import { randomUUID } from "node:crypto";

export class CreateStatementRepository implements ICreateStatementRepository {
  async create(statementData: Statement.Params): Promise<void> {
    const userResponse = await dynamodb.query({
      TableName: "clients",
      KeyConditionExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": statementData.clientId
      }
    }).promise()
    let userAmount = userResponse.Items[0]?.amount
    if (statementData.type === "deposit") {
      userAmount += statementData.amount
    }
    if (statementData.type === "withdraw") {
      userAmount -= statementData.amount
    }
    await dynamodb.put({
      TableName: "statements",
      Item: {
        id: randomUUID(),
        ...statementData
      }
    }).promise()
    await dynamodb.update({
      TableName: "clients",
      Key: {
        id: "S"
      },
      UpdateExpression: "set amount = :amount",
      ExpressionAttributeValues: {
        ":amount": userAmount
      }
    }).promise()
  }
}
