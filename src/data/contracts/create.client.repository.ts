import { Client } from "@domain/models";

export interface ICreateClientRepository {
  create(clientData: Client.Params): Promise<void>
}
