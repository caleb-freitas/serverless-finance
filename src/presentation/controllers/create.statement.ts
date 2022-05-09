import { ICreateStatementRepository } from "@data/contracts"
import { Controller, HttpResponse } from "@presentation/contracts"
import { created, serverError } from "@presentation/helpers"

export class CreateStatementController implements Controller {
  constructor(private readonly createStatementRepository: ICreateStatementRepository) {}

  async handler(event: any): Promise<HttpResponse> {
    try {
      const requestBody = JSON.parse(event.body)
      await this.createStatementRepository.create({
        ...requestBody
      })
      return created()
    } catch (error) {
      return serverError(error)
    }
  }
}
