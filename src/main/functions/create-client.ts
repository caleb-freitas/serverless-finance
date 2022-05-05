import { makeCreateClientController } from "../factory/create.client.controller";

export const createClient = (event: any) => {
  return makeCreateClientController().handler(event);
};