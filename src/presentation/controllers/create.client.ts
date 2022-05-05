import { Client } from "src/domain/models"
import { ICreateClientRepository } from "src/infra/protocols/create.client.repository"

interface HttpResponse {
  statusCode: number
  body?: any
}

interface Controller {
  handler(event: any): Promise<HttpResponse>
}

export class CreateClientController implements Controller {
  constructor(private readonly createClientRepository: ICreateClientRepository) {}

  async handler(event: any): Promise<HttpResponse> {
    try {
      const requestBody = JSON.parse(event.body) as Client.Params
      await this.createClientRepository.create({
        ...requestBody
      })
      return {
        statusCode: 200,
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          message: "something bad happen"
        }
      }
    }

  }
}
