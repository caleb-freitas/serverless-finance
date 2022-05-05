import { HttpResponse } from "src/presentation/contracts"

export interface Controller {
  handler(event: any): Promise<HttpResponse>
}
