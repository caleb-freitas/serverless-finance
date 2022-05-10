export const dynamodbStatementsTable = {
  statementsTable: {
    Type: "AWS::DynamoDB::Table",
    Properties: {
      TableName: "statements",
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