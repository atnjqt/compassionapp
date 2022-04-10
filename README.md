# Welcome to CompassionApp 🪷 🧘 🌎

- Project Authors: [Yoona Kang](mailto:yoona.kang@asc.upenn.edu), [Matt O'Donnell](mailto:mbod@asc.upenn.edu),  [Etienne Jacquot](mailto:etienne.jacquot@asc.upenn.edu)

## Getting Started

- For local development we use [Docker Compose](https://docs.docker.com/compose/). Clone the repo and build:

    ```bash
    git clone git@github.com:atnjqt/compassionmode-app.git
    cd compassionmode-app

    mkdir data # for volume mounted bind

    docker compose up --build
    ```

- Your local environment is accessible at [http://localhost:3000/](http://localhost:3000/)

## FB Login

- http://localhost:3000/ callback url... tbd


____

##
### Adding your access token (short or long term) to .env

- For the [instafeed](http://localhost:3000/instafeed) you need to add your Tester access token as [./frontend/env](./frontend/.env) and then restart the docker app `docker compose down && docker compose up -d`


### React Frontend (:3000 DEV)

- Access the app at http://localhost:3000/

### Flask API Backend (:8080 DEV)

- the sample provided counts how many times the page was visited, counting & writing this in our **mongo** backend, to display at [http://localhost:8080/](http://localhost:8080/)

- I also tried a sample for [http://localhost:8080/instagram/](http://localhost:8080/instagram/) which attempts to use `pymongo` for combining the backend w/ database

> We will use this python backend to pass instagram allowed URLs to Azure / AWS for facial detection, to selectively display with conditional React logic only photos on a timeline that meet the compassionmode thresholds
