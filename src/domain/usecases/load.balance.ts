import { Balance } from "@domain/models";

export interface LoadBalance {
  load(balanceData: Balance.Params): Promise<Balance.Model>
}