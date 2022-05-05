import { Client } from "../models";

export interface CreateClient {
  create(clientData: Client.Params): Promise<Client.Model>
}
