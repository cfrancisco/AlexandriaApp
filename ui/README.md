![LICENSE](https://img.shields.io/badge/license-MIT-red)
![Next Version](https://img.shields.io/badge/npm-7.0.14-blueviolet)
![Next Version](https://img.shields.io/badge/node-15.3.0-green)
[![CodeFactor](https://www.codefactor.io/repository/github/cfrancisco/alexandriaapp/badge/master)](https://www.codefactor.io/repository/github/cfrancisco/alexandriaapp/overview/master)
![codecov](https://codecov.io/gh/cfrancisco/alexandriaapp/branch/development/graph/badge.svg)
![Docker badge ](https://img.shields.io/badge/docker%20hub-cfrancisco10%2Falexfrontend-blue.svg)

# Alexandria

**Alexandria** is an application to display information about the searched movies, showing its poster, IMDB rating and also allows you favorite it.
These information are received directly from an graphql api.

## :page_facing_up: Introduction

Alexandria is a simple application developed using React, Material-UI, and Parcel. The app contains two main screens:

- Home screen, where the user receives recommendations or search for a movie;
- Details screen, where is shown the movies details, as director, actors, release year, and others information.

## :zap: Technologies

The UI was developed using the following technologies:

- [React v17.0.1](https://reactjs.org/)
- [Parcel v2.0](https://parceljs.org/)
- [Material UI v4.12](https://material-ui.com/)
- [GraphQL v15.5.1](https://graphql.org/)

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
   yarn dev
```

### :computer: Using Docker

You also could build a new image for docker

```
   docker build -f Dockerfile -t alexfrontend .
```

and updates the docker-compose file and running it using the command:

```
   cd ..
   docker-compose up -d
```

## :hourglass: Next Steps

- Tests
- Responsiveness
- UI/UX improvements
- a11y
- i18n
- github actions

## :handshake: License

The project is licensed under the MIT License. See the [LICENSE](https://github.com/cfrancisco/alexandriaapp/blob/main/LICENSE) file for details.
