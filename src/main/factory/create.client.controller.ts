import { CreateClientRepository } from "@infra/database"
import { CreateClientController } from "@presentation/controllers"

export const makeCreateClientController = () => {
  const createCLientRepository = new CreateClientRepository()
  return new CreateClientController(createCLientRepository)
}
