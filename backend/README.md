![LICENSE](https://img.shields.io/badge/license-MIT-red)
![Next Version](https://img.shields.io/badge/npm-7.0.14-blueviolet)
![Next Version](https://img.shields.io/badge/node-15.3.0-green)
[![CodeFactor](https://www.codefactor.io/repository/github/cfrancisco/alexandriaapp/badge/master)](https://www.codefactor.io/repository/github/cfrancisco/alexandriaapp/overview/master)
![codecov](https://codecov.io/gh/cfrancisco/alexandriaapp/backend/branch/master/graph/badge.svg)
![Docker badge ](https://img.shields.io/badge/docker%20hub-cfrancisco10%2Falexbackend-blue.svg)

# Alexandria - Backend

The **Alexandria - Backend** is responsible for retrieving movies catalogy from a third-party API and provides them using GraphQL schema.

## :zap: Technologies

The service was developed using the following technologies:

- [NodeJs v14.17.5](https://nodejs.org/en/)
- [GraphQL v15.5.1](https://graphql.org/)
- [Jest v27.0.5](https://jestjs.io/pt-BR/)

### :large_blue_circle: Configurations

For now, the configurations are made in a non-encrypted config file (./config.json), but should be improved in a future release, being received as environment variables. In a real scenario, the API_KEY should be storage as 'Secrets', environment variables that are encrypted in github.

| Config variable | Description                          |
| --------------- | ------------------------------------ |
| GRAPHIQL        | Used to enable the GraphQL UI        |
| PORT            | Port for starting the service        |
| LOGGER_LEVEL    | Current Log Level                    |
| API_KEY         | Key used in free version of OMDB API |
| OMDB_HOST       | URL to access OMDB API               |

In order to access GraphiQL, graphical interface in GraphQL interactive, it should be enabled `graphiql` variable and access the following url:

`http{s}://{host}:{port}/movies/graphql/`

For example, the address could be:

`http://localhost:3000/movies/graphql/`

## :zap: How to run

### :computer: Using Docker

1. Build the Image

```
   docker build -f Dockerfile -t alexbackend .
```

2. Run the docker compose

```
   cd ..

   docker-compose up -d
```

### :computer: For Development

1. Install the dependencies

```
   yarn install
```

2. Start the application

```
   yarn start
```

## :hourglass: Next Steps

- More Unit Tests (Handle expection cases)
- Create Graphql schema to fetch information about Ratings
- Manage Favorite data using a Relational DB
- Improve Security and blocking CORS
- Apply Performance tests
- Use GraphQL Union type and create new resolvers

## :handshake: License

The project is licensed under the MIT License. See the [LICENSE](https://github.com/cfrancisco/alexandriaapp/blob/main/LICENSE) file for details.
