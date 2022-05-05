import { CreateClientRepository } from "src/infra/create-client-repository"
import { CreateClientController } from "src/presentation/controllers/create.client"

export const makeCreateClientController = () => {
  const createCLientRepository = new CreateClientRepository()
  return new CreateClientController(createCLientRepository)
}