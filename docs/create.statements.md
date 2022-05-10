# Create statement

Responsible for create a new statement

## Success case
- [x] Receive and request of type `POST` on route `/dev/statement/{clientId}`
- [x] Return 201 on success, adding a new statement on DynamoDB
- [x] Should change the user amount depending on the operation type

## Exceptions
- [x] Return 500 if something goes wrong
