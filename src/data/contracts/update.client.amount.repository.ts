export interface IUpdateClientAmountRepository {
  update(clientId: string, amount: number): Promise<void>
}
