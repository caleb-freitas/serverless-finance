import { HttpResponse } from "@presentation/contracts"

export interface Controller {
  handler(event: any): Promise<HttpResponse>
}
