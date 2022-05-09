import { makeCreateClientController } from "@main/factory"

export const handler = (event: any) => {
  return makeCreateClientController().handler(event);
};
