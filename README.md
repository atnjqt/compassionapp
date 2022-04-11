# Welcome to CompassionApp 🪷 🧘 🌎

- Project Authors: [Yoona Kang](mailto:yoona.kang@asc.upenn.edu), [Matt O'Donnell](mailto:mbod@asc.upenn.edu),  [Etienne Jacquot](mailto:etienne.jacquot@asc.upenn.edu)

## Getting Started

- For local development we use [Docker Compose](https://docs.docker.com/compose/). Clone the repo and build:

    ```bash
    git clone git@github.com:yoonakang/compassionapp.git
    cd compassionapp

    mkdir data # for volume mounted bind

    docker compose up --build
    ```

- Your local environment is accessible at:
    - frontend [http://localhost:3000/](http://localhost:3000/)
    - backend [http://localhost:8080/](http://localhost:8080/)
________

## React Frontend (:3000 DEV)

### FaceBook Login for CompassionApp

> For `appID='292301126304936'` our Meta Developer application [https://developers.facebook.com/apps/292301126304936/](https://developers.facebook.com/apps/292301126304936/)

- Navigate to https://localhost:3000/ (no SSL yet), login with the pre-configured **Compassion FB Tester - compassion_mdpcgci_tester@tfbnw.net** (as Etienne for pw) for basic oauth integration

____

## Flask API Backend (:8080 DEV)

### Sample page visit counter app

- the sample provided counts how many times the page was visited, counting & writing this in our **mongo** backend, to display at [http://localhost:8080/](http://localhost:8080/)

    - TBD for examples using `pymongo` for combining the backend w/ database

    > We will use this python backend to pass instagram allowed URLs to Azure / AWS for facial detection, to selectively display with conditional React logic only photos on a timeline that meet the compassionmode thresholds
