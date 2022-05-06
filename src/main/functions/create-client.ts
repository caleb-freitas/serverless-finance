import { makeCreateClientController } from "@main/factory"

export const createClient = (event: any) => {
  return makeCreateClientController().handler(event);
};
