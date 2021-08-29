# Alexandria - Backend

The **Alexandria - Backend** is responsible for retrieving data from a third-party API and provides them using GraphQL schema.

## :zap: Technologies

The service was developed using the following technologies:

- [Redis v6.2.5](https://redis.io/)
- [NodeJs v14.17.5](https://nodejs.org/en/)
- [GraphQL v15.5.1](https://graphql.org/)

### :large_blue_circle: Configurations

| Environment variable | Description                   |
| -------------------- | ----------------------------- |
| GRAPHQL_EDITOR       | Used to enable the GraphQL UI |
| HISTORYPROXY_PORT    | Port for starting the service |

To access GraphiQL, graphical interface in GraphQL interactive (it is also possible to see the documentation) enable `graphql.graphiql` and access the url it follows this pattern:

`http{s}://{host}:{port}/graphql/`

For example, the address could be:

`http://localhost:3000/graphql/`

## :zap: How to run

### :computer: For Development mode

1. Install the dependencies
   $ yarn install
2. Start the application
   $ yarn dev

### Next Steps

1 - Create Graphql For Ratings options

## License

The History Proxy source code is released under Apache License 2.0.

Check NOTICE and LICENSE files for more information.
