import { Balance } from "../models";

export interface LoadBalance {
  load(balanceData: Balance.Params): Promise<Balance.Model>
}