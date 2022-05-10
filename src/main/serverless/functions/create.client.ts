export const createClientFunction = {
  createClient: {
    handler: "./src/main/functions/create-client.handler",
    events: [{
      http: {
        path: "client",
        method: "post",
        cors: true
      }
    }]
  }
}
