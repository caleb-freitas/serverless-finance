import { randomUUID } from "node:crypto";
import { Client } from "src/domain/models";
import { document } from "./dynamodb.client"
import { ICreateClientRepository } from "./protocols/create.client.repository";

export class CreateClientRepository implements ICreateClientRepository {
  async create(clientData: Client.Params): Promise<void> {
    await document.put({
      TableName: "clients",
      Item: {
        id: randomUUID(),
        ...clientData
      }
    })
  }
}
