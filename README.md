# Welcome to CompassionMode App 🧘

- Project Authors: [Yoona Kang](mailto:yoona.kang@asc.upenn.edu), [Matt O'Donnell](mailto:mbod@asc.upenn.edu),  [Etienne Jacquot](mailto:etienne.jacquot@asc.upenn.edu)

## Getting Started

- For local development we use [Docker Compose](https://docs.docker.com/compose/). Clone the repo and build:

    ```bash
    mkdir data # for volume mounted bind

    docker compose up -d
    ```

- access the app at [http://localhost:3000/](http://localhost:3000/)
    - For [instafeed](http://localhost:3000/instafeeed) with your tester access token as [./frontend/env](./frontend/.env)

### Login for Frontend (:3000 DEV)

- Access the app at http://localhost:3000/

> React is stateful! this dev branch aims to figure stateful integration of input for username

### Flask API Backend (:8080 DEV)

- the sample provided counts how many times the page was visited, counting & writing this in our **mongo** backend, to display at [http://localhost:8080/](http://localhost:8080/)

- I also tried a sample for [http://localhost:8080/instagram/](http://localhost:8080/instagram/) which attempts to use `pymongo` for combining the backend w/ database

> We will use this python backend to pass instagram allowed URLs to Azure / AWS for facial detection, to selectively display with conditional React logic only photos on a timeline that meet the compassionmode thresholds
