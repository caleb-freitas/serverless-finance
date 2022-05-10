export const dynamodbClientsTable = {
  clientsTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "clients",
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
      },
      AttributeDefinitions: [
        {
          AttributeName: "id",
          AttributeType: "S"
        }
      ],
      KeySchema: [
        {
          AttributeName: "id",
          KeyType: "HASH"
        }
      ]
    }
  }
}