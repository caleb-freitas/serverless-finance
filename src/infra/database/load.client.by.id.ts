import { ILoadClientByIdRepository } from "@data/contracts";
import { Client } from "@domain/models";
import { dynamodb } from "@infra/database"

export class LoadClientByIdRepository implements ILoadClientByIdRepository {
  async load(id: string): Promise<Client.Model> {
    const userResponse = await dynamodb.query({
      TableName: "clients",
      KeyConditionExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": id
      }
    }).promise()
    return userResponse.Items[0] as Client.Model
  }
}
