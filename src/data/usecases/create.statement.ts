import { ICreateStatementRepository, ILoadClientByIdRepository, IUpdateClientAmountRepository } from "@data/contracts";
import { Statement } from "@domain/models";
import { ICreateStatement } from "@domain/usecases";

export class DbCreateStatement implements ICreateStatement {
  constructor(
    private readonly loadClientById: ILoadClientByIdRepository,
    private readonly createStatement: ICreateStatementRepository,
    private readonly updateClientAmount: IUpdateClientAmountRepository
  ) {}

  async create(statementData: Statement.Params): Promise<void> {
    let { id, amount } = await this.loadClientById.load(statementData.clientId)
    if (statementData.type === "deposit") {
      amount += statementData.amount
    }
    if (statementData.type === "withdraw") {
      amount -= statementData.amount
    }
    await this.createStatement.create({ ...statementData })
    await this.updateClientAmount.update(id, amount)
  }
}
