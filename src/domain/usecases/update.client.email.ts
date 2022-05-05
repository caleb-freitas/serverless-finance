export interface UpdateClientEmail {
  update(clientId: string): Promise<void>
}
