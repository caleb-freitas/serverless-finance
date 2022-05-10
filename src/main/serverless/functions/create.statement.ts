export const createStatementFunction = {
  createStatement: {
    handler: "./src/main/functions/create-statement.handler",
    events: [{
      http: {
        path: "statement/{clientId}",
        method: "post",
        cors: true
      }
    }]
  }
}
