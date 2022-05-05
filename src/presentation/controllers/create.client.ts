import { ICreateClientRepository } from "src/data/contracts"
import { Controller, HttpResponse } from "src/presentation/contracts"
import { created, serverError } from "src/presentation/helpers"

export class CreateClientController implements Controller {
  constructor(private readonly createClientRepository: ICreateClientRepository) {}

  async handler(event: any): Promise<HttpResponse> {
    try {
      const { name, email, password } = JSON.parse(event.body)
      await this.createClientRepository.create({
        name,
        email,
        password
      })
      return created()
    } catch (error) {
      return serverError(error)
    }
  }
}
