import { ICreateStatement } from "@domain/usecases"
import { Controller, HttpResponse } from "@presentation/contracts"
import { created, serverError } from "@presentation/helpers"

export class CreateStatementController implements Controller {
  constructor(private readonly dbCreateStatement: ICreateStatement) {}

  async handler(event: any): Promise<HttpResponse> {
    try {
      const requestBody = JSON.parse(event.body)
      await this.dbCreateStatement.create({
        ...requestBody
      })
      return created()
    } catch (error) {
      return serverError(error)
    }
  }
}
