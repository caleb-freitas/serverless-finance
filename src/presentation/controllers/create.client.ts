import { ICreateClientRepository } from "@data/contracts"
import { Controller, HttpResponse } from "@presentation/contracts"
import { created, serverError } from "@presentation/helpers"

export class CreateClientController implements Controller {
  constructor(private readonly createClientRepository: ICreateClientRepository) {}

  async handler(event: any): Promise<HttpResponse> {
    try {
      const requestBody = JSON.parse(event.body)
      await this.createClientRepository.create({
        ...requestBody
      })
      return created()
    } catch (error) {
      return serverError(error)
    }
  }
}
