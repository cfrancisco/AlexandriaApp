![LICENSE](https://img.shields.io/badge/license-MIT-red)
![Next Version](https://img.shields.io/badge/npm-7.0.14-blueviolet)
![Next Version](https://img.shields.io/badge/node-15.3.0-green)
[![CodeFactor](https://www.codefactor.io/repository/github/cfrancisco/alexandriaapp/badge/master)](https://www.codefactor.io/repository/github/cfrancisco/alexandriaapp/overview/master)
![codecov](https://codecov.io/gh/cfrancisco/alexandriaapp/branch/development/graph/badge.svg)
![Docker badge ](https://img.shields.io/badge/docker%20hub-cfrancisco10%2Falexfrontend-blue.svg)

# Alexandria

**Alexandria** is an application to display information about the searched movies, showing its poster, IMDB rating and also allows you favorite it.
These information are received directly from an graphql api.

## :white_check_mark: Table of Contents

1. [Front-End](#front-end)
2. [Back-End](#back-end)
2. [Technologies](#technologies)
3. [How To Run](#how-to-run)
4. [Screenshots](#screenshots)
6. [License](#license)

## :page_facing_up: Front-End

Alexandria is a simple application developed using React, Material-UI, and Parcel. The Front End App contains two main screens:

- Home screen, where the user receives recommendations or search for a movie;
- Details screen, where is shown the movies details, as director, actors, release year, and others information.


## :zap: How to run

## :page_facing_up: Back-End

The **Alexandria - Backend** is responsible for retrieving movies catalogy from a third-party API and provides them using GraphQL schema.

## :zap: Technologies

<div style="display: flex, flex-direction: row, align-items: center, justify-content: center">
<img src="https://raw.githubusercontent.com/cfrancisco/alexandriaapp/main/.github/ss3.png" alt="Technologies" width="24%"/>
</div>


### :computer: Using Docker

You should install docker and docker-compose before running the project.

1. Clone the project
```
  git clone https://github.com/cfrancisco/alexandriaapp.git
```
 
2. Start the containers
```
$ docker-compose up -d
```

3. Open the project's URL: localhost:8800

## :large_blue_circle: Screenshots

<div style="display: flex, flex-direction: row, align-items: center, justify-content: center">
<img src="https://raw.githubusercontent.com/cfrancisco/alexandriaapp/main/.github/ss1.png" alt="Home Screen" width="24%"/>
</div>


## :handshake: License

The project is licensed under the MIT License. See the [LICENSE](https://github.com/cfrancisco/alexandriaapp/blob/main/LICENSE) file for details.
