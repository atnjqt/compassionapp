# React with Facebook Login API

Code for the application is in [./src/App.js](./src/App.js)

- The **Facebook Login API** has helpful documentation for Permission references: [https://developers.facebook.com/docs/permissions/reference](https://developers.facebook.com/docs/permissions/reference) 

    > You need App Review for anything more than public_profile & email, tester user can have custom permissions

### Troubleshooting Docker App

- If the frontend throws console errors, you may be missing a dependency. Install with NPM to update the [package.json](./package.json):

    ```bash
    cd frontend
    npm install react-scripts
    npm install react-scripts --package-lock-only # for docker dev
    npm install react-facebook-login --legacy-peer-deps --package-lock-only # for conflicting deps?
    ```

    -  then run `npm update` to update the [package-lock.json](./package-lock.json):

        ```bash
        npm update
        ```

- Rebuild your docker container to reflect changes

    ```bash
    docker compose down
    docker compose up --build
    ```
