import { randomUUID } from "node:crypto"
import { hash } from "bcryptjs"
import { ICreateClientRepository } from "src/data/contracts/create.client.repository"
import { Client } from "src/domain/models"
import { document } from "src/infra/database"

export class CreateClientRepository implements ICreateClientRepository {
  async create(clientData: Client.Params): Promise<void> {
    const hashedPassword = hash(clientData.password, 12)
    await document.put({
      TableName: "clients",
      Item: {
        id: randomUUID(),
        password: hashedPassword,
        ...clientData
      }
    }).promise()
  }
}
