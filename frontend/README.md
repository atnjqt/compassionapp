# React with Instagram Basic Display API 

### Steps to run the application (local not in docker)
1. Download the source code 
2. npm install to install dependencies library
3. Add your long-lived access token to .env file
4. npm start

### Troubleshooting Docker App

- If the frontend throws console errors, you may be missing a dependency. Install with NPM:

    ```bash
    npm install react-scripts
    npm install react-scripts --package-lock-only # for docker dev
    ```

- Alternatively since we are on Docker, you can manually update the dependency in [package.json](./package.json):

```diff
"dependencies": {
    "@testing-library/jest-dom": "^5.11.9",
    "axios": "^0.21.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^6.2.2",
+    "react-scripts": "^5.0.0",
    "web-vitals": "^1.1.0"
},
```

- and simlpy run `npm update` to update the [package-lock.json](./package-lock.json):

    ```bash
    cd frontend
    npm update
    ```

- rebuild your docker container
