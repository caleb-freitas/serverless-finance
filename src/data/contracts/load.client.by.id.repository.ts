import { Client } from "@domain/models";

export interface ILoadClientByIdRepository {
  load(id: string): Promise<Client.Model>
}
