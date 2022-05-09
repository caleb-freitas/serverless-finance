import { randomUUID } from "node:crypto"
import { hash } from "bcryptjs"
import { ICreateClientRepository } from "@data/contracts"
import { Client } from "@domain/models"
import { dynamodb } from "@infra/database"

export class CreateClientRepository implements ICreateClientRepository {
  async create(clientData: Client.Params): Promise<void> {
    const hashedPassword = await hash(clientData.password, 12)
    await dynamodb.put({
      TableName: "clients",
      Item: {
        id: randomUUID(),
        password: hashedPassword,
        amount: 0,
        ...clientData
      }
    }).promise()
  }
}
