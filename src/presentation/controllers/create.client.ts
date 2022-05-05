import { ICreateClientRepository } from "src/data/contracts"
import { Client } from "src/domain/models"
import { Controller, HttpResponse } from "src/presentation/contracts"
import { created, serverError } from "src/presentation/helpers"

export class CreateClientController implements Controller {
  constructor(private readonly createClientRepository: ICreateClientRepository) {}

  async handler(event: any): Promise<HttpResponse> {
    try {
      const requestBody = JSON.parse(event.body) as Client.Params
      await this.createClientRepository.create({
        ...requestBody
      })
      return created()
    } catch (error) {
      return serverError(error)
    }
  }
}
