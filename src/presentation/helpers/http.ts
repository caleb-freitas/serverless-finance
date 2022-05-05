import { HttpResponse } from "src/presentation/contracts"

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error.stack
})

export const created = (): HttpResponse => ({
  statusCode: 200,
})
