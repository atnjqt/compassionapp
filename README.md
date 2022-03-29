# Welcome to CompassionMode App 🧘

- [Yoona Kang](mailto:yoona.kang@asc.upenn.edu)

- [Matt O'Donnell](mailto:mbod@asc.upenn.edu)

- [Etienne Jacquot](mailto:etienne.jacquot@asc.upenn.edu)

## Getting Started

- For local development we use [Docker Compose](https://docs.docker.com/compose/). Clone the repo and build:

    ```bash
    mkdir data # for volume mounted bind

    docker compose up -d
    ```

- access the app at [http://localhost:3000/](http://localhost:3000/)

### Login for OAuth (DEV)

- there is http://localhost:3000/login

> React is stateful! this dev branch aims to figure stateful integration of input for username
