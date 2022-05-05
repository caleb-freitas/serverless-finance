import { Client } from "src/domain/models";

export interface ICreateClientRepository {
  create(clientData: Client.Params): Promise<void>
}