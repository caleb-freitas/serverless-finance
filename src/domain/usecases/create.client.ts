import { Client } from "@domain/models";

export interface CreateClient {
  create(clientData: Client.Params): Promise<Client.Model>
}
