import { CreateClientRepository } from "src/infra/database"
import { CreateClientController } from "src/presentation/controllers"

export const makeCreateClientController = () => {
  const createCLientRepository = new CreateClientRepository()
  return new CreateClientController(createCLientRepository)
}
