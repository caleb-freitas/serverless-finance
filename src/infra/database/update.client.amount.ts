import { IUpdateClientAmountRepository } from "@data/contracts";
import { dynamodb } from "./dynamodb.client";

export class UpdateClientAmountRepository implements IUpdateClientAmountRepository {
  async update(clientId: string, amount: number): Promise<void> {
    await dynamodb.update({
      TableName: "clients",
      Key: {
        id: clientId
      },
      UpdateExpression: "set amount = :amount",
      ExpressionAttributeValues: {
        ":amount": amount
      }
    }).promise()
  }
}