import { APIGatewayProxyHandler } from "aws-lambda";
import { Client } from "src/domain/models";
import { DynamoDB } from "aws-sdk"
import { randomUUID } from 'node:crypto'

export const handler: APIGatewayProxyHandler = async (event) => {
  const { name, email, password } = JSON.parse(event.body) as Client.Params
  const document = new DynamoDB.DocumentClient()
  await document.put({
    TableName: "clients",
    Item: {
      name,
      email,
      password
    }
  }).promise()
  return {
    statusCode: 201,
    body: JSON.stringify({
      name,
      email,
      password
    })
  }
}
