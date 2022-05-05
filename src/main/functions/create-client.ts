import { makeCreateClientController } from "src/main/factory"

export const createClient = (event: any) => {
  return makeCreateClientController().handler(event);
};
