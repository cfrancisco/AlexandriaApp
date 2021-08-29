![LICENSE](https://img.shields.io/badge/license-MIT-red)
![Next Version](https://img.shields.io/badge/npm-7.0.14-blueviolet)
![Next Version](https://img.shields.io/badge/node-15.3.0-green)
[![CodeFactor](https://www.codefactor.io/repository/github/cfrancisco/alexandriaapp/badge/master)](https://www.codefactor.io/repository/github/cfrancisco/alexandriaapp/overview/master)


# Alexandria

**Alexandria** is an 40-hour project created for displays information about the searched movies, including their poster, IMDB ratings, as well as the ability to favorite them. 
<div style="display: flex, flex-direction: row, align-items: center, justify-content: center">
<img src="https://github.com/cfrancisco/AlexandriaApp/blob/master/.github/ss1.png?raw=true" alt="Home Screen" width="50%"/>
</div>

## :white_check_mark: Table of Contents

1. [Front-End](#page_facing_up-front-end)
2. [Back-End](#page_facing_up-back-end)
3. [Technologies](#page_facing_up-technologies)
4. [How To Run](#zap-how-to-run)
5. [License](#handshake-license)

## :page_facing_up: Front-End

Alexandria is a simple application developed using React, Material-UI, Parcel, and GraphQL to access the data in the backend service.

The Front End App consists of two main screens:
- A homepage, which displays movie recommendations or allows the user to search for movies;
- Details screen, which provides information about the movie, such as director, actors, IMDB rating, etc.
## :page_facing_up: Back-End

The **Alexandria - Backend** is a NodeJS application that is responsible for retrieving movies catalogs from a third-party API and provides them using GraphQL API.

## :page_facing_up: Technologies

<div style="display: flex, flex-direction: row, align-items: center, justify-content: center">
<img src="https://github.com/cfrancisco/AlexandriaApp/blob/master/.github/arq.png?raw=true" alt="Software schema" width="60%"/>
</div>

## :zap: How to run

### :computer: Using Docker

Installation of Docker and Docker-Compose is required before running the project.

1. Clone the project
```
  git clone https://github.com/cfrancisco/alexandriaapp.git
```
 
2. Start the containers
```
$ docker-compose up -d
```

3. Go to http://localhost:8800 to open the project

## :handshake: License

The project is licensed under the MIT License. See the [LICENSE](https://github.com/cfrancisco/alexandriaapp/blob/main/LICENSE) file for details.
