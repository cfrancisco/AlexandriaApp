![LICENSE](https://img.shields.io/badge/license-MIT-red)
![Next Version](https://img.shields.io/badge/npm-7.0.14-blueviolet)
![Next Version](https://img.shields.io/badge/node-15.3.0-green)
[![CodeFactor](https://www.codefactor.io/repository/github/cfrancisco/alexandriaapp/badge/master)](https://www.codefactor.io/repository/github/cfrancisco/alexandriaapp/overview/master)
![codecov](https://codecov.io/gh/cfrancisco/alexandriaapp/branch/development/graph/badge.svg)
![Docker badge ](https://img.shields.io/badge/docker%20hub-cfrancisco10%2Falexfrontend-blue.svg)

# Alexandria - Frontend

**Alexandria** is an application to display information about the searched movies, showing its poster, IMDB rating and also allows you favorite it.
These information are received directly from an graphql api.

## :page_facing_up: Introduction

Alexandria is a simple application developed using React, Material-UI, Parcel, and GraphQL to access the data in the backend service.

The Front End App consists of two main screens:

- A homepage, which displays movie recommendations or allows the user to search for movies;
- Details screen, which provides information about the movie, such as director, actors, IMDB rating, etc.

## :zap: Technologies

The UI was developed using the following technologies:

- [React v17.0.1](https://reactjs.org/)
- [Parcel v2.0](https://parceljs.org/)
- [Material UI v4.12](https://material-ui.com/)
- [GraphQL v15.5.1](https://graphql.org/)
- [Jest v27.0.5](https://jestjs.io/pt-BR/)

Additionally, some features were used, such as:

- Created my own boilerplate for frontend, so I don't have to use non-necessary coding (like CRA does);
- All components are using PropTypes;
- Using Hooks and Redux when necessary;
- There are some nice animations on the posters;
- Default recommendations are displayed when the app is opened;
- The App is responsive for the following resolutions:
  - 1024 × 768
  - 1280 × 720 (720p)
  - 1920 × 1080 (Full HD)
- It follows some usual eslint plugins such as "airbnb", "react", "react-hooks", and "security".

### :large_blue_circle: Configurations

| Config variable | Description                         |
| --------------- | ----------------------------------- |
| BACKEND_PORT    | Port used to access backend service |
| BACKEND_URL     | URL to access backend service       |

## :zap: How to run

### :computer: For Development

1. Install the dependencies

```
   yarn install
```

2. Start the application

```
   yarn start
```

### :computer: Using Docker

You could also build a new image for docker

```
   docker build -f Dockerfile -t alexfrontend .
```

updates the docker-compose file and running it using the command:

```
   cd ..
   docker-compose up -d
```

## :hourglass: Next Steps

- More Unit Tests;
- Create CI/CD with Github Actions;
- Apply LazyLoading in components and UseCallback its methods;
- Apply Codecov for Frontend repository;
- Validate a11y using React-Axe;
- Be responsive for mobile devices using Media Queries;
- Notify the user when occurs some catch;
- Improve SEO;

## :handshake: License

The project is licensed under the MIT License. See the [LICENSE](https://github.com/cfrancisco/alexandriaapp/blob/main/LICENSE) file for details.
