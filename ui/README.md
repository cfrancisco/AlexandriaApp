![LICENSE](https://img.shields.io/badge/license-MIT-red)
![Next Version](https://img.shields.io/badge/npm-7.0.14-blueviolet)
![Next Version](https://img.shields.io/badge/node-15.3.0-green)
![CodeFactor](https://www.codefactor.io/repository/github/cfrancisco/alexandriaapp/badge)
![codecov](https://codecov.io/gh/cfrancisco/alexandriaapp/branch/development/graph/badge.svg)
![Docker badge ](https://img.shields.io/docker/pulls/cfrancisco/alexandriaapp.svg)

# Alexandria

**Alexandria** is an application to display information about the searched movies, showing its poster, IMDB rating and also allows you favorite it.
These information are received directly from an graphql api.

## :white_check_mark: Table of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Getting started](#getting-started)
4. [Screenshots](#screenshots)
5. [Next Steps](#next-steps)
6. [License](#license)

## :page_facing_up: Introduction

alexandria is a simple application developed using React, Material-UI, and Parcel. The app contains two main screens:

- Home screen, where the user search for a movie;
- Details screen, where is shown the movies details, as director, actors and so on.

## :zap: Technologies

The UI was developed using the following technologies:

- [React v17.0.1](https://reactjs.org/)
- [Parcel v2.0](https://parceljs.org/)
- [Material UI v4.12](https://material-ui.com/)
- [GraphQL v15.5.1](https://graphql.org/)

## :zap: Installation

You should install docker and docker-compose before running the project.

Clone the project
$ git clone https://github.com/cfrancisco/alexandriaapp.git
Access the project folder
$ cd docker-compose
Start the containers
$ docker-compose up -d

### :computer: Using Docker

    $ docker-compose up -d

### :computer: For Development mode

1. Install the dependencies
   $ yarn install
2. Start the application
   $ yarn dev

## :large_blue_circle: Screenshots

<div style="display: flex, flex-direction: row, align-items: center, justify-content: center">
<img src="https://raw.githubusercontent.com/cfrancisco/alexandriaapp/main/.github/ss1.png" alt="Home Screen" width="24%"/>
</div>

## :hourglass: Next Steps

- Tests
- State management
- Responsiveness
- UI/UX improvements
- a11y
- i18n
- github actions

## :handshake: License

The project is licensed under the MIT License. See the [LICENSE](https://github.com/cfrancisco/alexandriaapp/blob/main/LICENSE) file for details.
