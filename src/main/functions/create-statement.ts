import { makeCreateStatementController } from "@main/factory"

export const handler = (event: any) => {
  return makeCreateStatementController().handler(event);
};
