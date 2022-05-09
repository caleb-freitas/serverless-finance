import { CreateStatementRepository } from "@infra/database"
import { CreateStatementController } from "@presentation/controllers"

export const makeCreateStatementController = () => {
  const createStatementRepository = new CreateStatementRepository()
  return new CreateStatementController(createStatementRepository)
}
