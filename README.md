# Sample Web App for Instagram Basic API (Mindfullness Project Dev)

- Author: [Etienne Jacquot](mailto:etiennej@upenn.edu) 03/17/2022

## Getting Started

- **Official Meta Developer Guide for Getting Started here**: https://developers.facebook.com/docs/instagram-basic-display-api/getting-started


    - (Optional but also helpful) Look at references for **Instagram Basic API** integration for a web page, there is one described in a Medium tutorial in [Part 1](https://cming0721.medium.com/instagram-feeds-with-instagram-api-part-1-create-app-and-token-4a91ee3bd154) and [Part 2](https://cming0721.medium.com/instagram-feeds-with-instagram-api-part-2-basic-display-api-with-react-f0c6dfcc576c)

______

### Preliminary Meta Developer Setup

> Basically this includes Meta official guide [Steps 1-3](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started#step-1--create-a-facebook-app)

- Setup an account for Instagram, Meta Developer, & have just some HTTPS site (either publicly hosted or localhost for quick test & dev)

- Create a Meta Developer App and link the Instagram Basic API

- Link Instagram Tester account

- Add the callback HTTPS URL

______

### Using Docker Compose for http://localhost:3000/ testing??

- Sample from https://github.com/docker/awesome-compose/tree/master/react-express-mongodb 
    - suggests a **React** & NodeJS + MongoDB or Rust + PostgreSQL... we will try the former


- Run locally:

    ```bash
    cd react-express-mongodb

    mkdir data # for volume mounted bind

    docker compose up -d
    ```
    - checkout http://localhost:3000/ for the sample docker-compose awesome template. we just need this running locally to test the oauth!

_______

### Try the URL try the instagram API URL

> This is [Step 4](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started#step-4--authenticate-the-test-user) on the official Meta guide

- This is for your specific `app_id` for the Facebook developer app you created (`386585613295040`) and the specific callback HTTPS URL you specified (with a trailing slash I think and for testing purposes you don't need to actually setup SSL to confirm the oauth authorization functionality, https://localhost:3000/)

    - **localhost docker app for callback url** --> https://instagram.com/oauth/authorize?client_id=386585613295040&redirect_uri=https://localhost:3000/&scope=user_profile,user_media&response_type=code

        - Nice! this actually shows the oauth for my logged in **instagram tester account** in my browser!

        ![](./img/ig_api_testing.png)

    - If you click to accept and **Allow**, the redirection obviously fails for SSL but if you click again for HTTP, it just loads but GETS the `code=` included, remove trailing `#_`  at:
        - http://localhost:3000/?code=AQCS5X_wXts8_1zfAgPtoEV_5Jb1vD1Wo7x7fI.............ytbb9fHHHwb07oMR3F47uwTWjKoeVjZKydOKEjWx-FbPrw#_
        > The token expires after 1 hour, click the URL again to get a new one. Careful not to share as it does provide temporary access to the instagram tester account


_________

### Exchange for a token

> This is [Step 5](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started#step-5--exchange-the-code-for-a-token) on the official Meta Guide

- Run the following in terminal now that we have an authorization code for our testing instagram account
    - Replace for you `app-id`, `app-secret`, the local `redirect-uri`, and `code` from the callback above
    > *Be careful with the short lived code, and especially the app secret!*

    ```bash
    $ curl -X POST \
    https://api.instagram.com/oauth/access_token \
    -F client_id=386585613295040 \
    -F client_secret=199b7d........3b7e8371 \
    -F grant_type=authorization_code \
    -F redirect_uri=https://localhost:3000/ \
    -F code=AQCS5X_wXts8_1zfAgPtoEV_5Jb1vD1Wo7x7fIZKtjzhT0YrFuo-0WF.....................ic4TUF3ytbb9fHHHwb07oMR3F47uwTWjKoeVjZKydOKEjWx-FbPrw
    ```

    - this returns a json encoded object such as `access_token` & `user_id`
    
        ```json
        {"access_token": "IGQVJXWG9Pam8zNTlzWnlLekFMS1VQamZAub1NSdFhHZA25C..........ZA21Va2FOMGlSb3IzUlZAWQk92ZAmRWZAXVzaDNF", "user_id": 17841422579570037}
        ```

        - Excellent, with that token I think you can now use API calls

________

### Query the User Node

> This is [Step 6](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started#step-6--query-the-user-node) of the official Meta guide, and really the conclusion of part 1 of that Medium tutorial (in the next sections we will incorporate into the React NodeJS frontend MongoDB NoSQL backend)

- Finally, you can query the User node (later sections on the media node...)
    - this is for the `account_token` and `user_id`... 
    - more info on fields here, only `id` and `username` apply for the **User node**: https://developers.facebook.com/docs/instagram-basic-display-api/reference/media/

    ```bash
    $ curl -X GET \
    'https://graph.instagram.com/17841422579570037?fields=id,username&access_token=IGQVJXWG9Pam8zNTlzWnlLekFMS1VQamZAub1NSdFhHZA2........GVFRVZAnZA21Va2FOMGlSb3IzUlZAWQk92ZAmRWZAXVzaDNF'
    ```

    - This returns simply the user (the tester account) info as json encoded object, valid through the allowed oauth

        ```json
        {"id":"5006615216052169","username":"ascdev3620"}
        ```
__________

### NEXT STEPS

- See step 2 of the medium tutorial
- try the media node instead of just user node
- figure out how to store the returned api info into the MongoDB backend on docker-compose, to have persistent data? we want to collect image urls I think for now
- figure out how to update the nodejs express frontend for react web app to display the returned IG data... 

