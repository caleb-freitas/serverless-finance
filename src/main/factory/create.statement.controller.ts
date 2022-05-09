import { DbCreateStatement } from "@data/usecases"
import { CreateStatementRepository } from "@infra/database"
import { LoadClientByIdRepository } from "@infra/database/load.client.by.id"
import { UpdateClientAmountRepository } from "@infra/database/update.client.amount"
import { CreateStatementController } from "@presentation/controllers"

export const makeCreateStatementController = () => {
  const createStatementRepository = new CreateStatementRepository()
  const loadClientByIdRepository = new LoadClientByIdRepository()
  const updateClientAmountRepository = new UpdateClientAmountRepository()
  const dbCreateStatement = new DbCreateStatement(
    loadClientByIdRepository,
    createStatementRepository,
    updateClientAmountRepository
  )
  return new CreateStatementController(dbCreateStatement)
}
