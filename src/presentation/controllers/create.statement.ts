import { ICreateStatement } from "@domain/usecases"
import { Controller, HttpResponse } from "@presentation/contracts"
import { created, serverError } from "@presentation/helpers"

export class CreateStatementController implements Controller {
  constructor(private readonly dbCreateStatement: ICreateStatement) {}

  async handler(event: any): Promise<HttpResponse> {
    try {
      const requestBody = JSON.parse(event.body)
      const { clientId } = event.pathParameters
      await this.dbCreateStatement.create({
        clientId,
        ...requestBody
      })
      return created()
    } catch (error) {
      return serverError(error)
    }
  }
}
