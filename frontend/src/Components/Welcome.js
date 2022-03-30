import React from 'react'
import Login from './Login';

const Welcome = () => {

    return (
        <div>

            🟥 🟧 🟨 🟩 🟦 🟪 ⬛️ ⬜️ 🟫 

            <h3>Login for Instagram Tester Username 
                <a href="http://localhost:3000/login" rel="login"> localhost:3000/login </a> 
            </h3>
            <div>

            <Login />

            </div>


            <h3>Instafeed on React via API access token
                <a href="http://localhost:3000/instafeed" rel="instafeed"> localhost:3000/instafeed </a>
            </h3>

            <h4>
                Get code for short term access token
            </h4>

            🔴 🟠 🟡 🟢 🔵 🟣 ⚫️ ⚪️ 🟤 

            <h3>
                Oauth redirect <a href="https://www.instagram.com/oauth/authorize?client_id=386585613295040&redirect_uri=https://localhost:3000/&scope=user_profile,user_media&response_type=code">here 🆗</a>
            </h3> 

            <b>
            - for long term access token <a href="curl -X POST https://api.instagram.com/oauth/access_token -F client_id=386585613295040 -F client_secret=199b7d714d33010416ec76e33b7e8371 -F grant_type=authorization_code -F redirect_uri=https://localhost:3000/ -F code=AQCr1XMdtA64XCDYKc-k3zybt7h8bt1IGqhBRAJyQHm5fUUXdB7i1AxHhS3DH1qJLcZLYrYFJxsxsBBGgo40R6NUd7Tz3DUDnJapAwz3QpdctVphNsxB1UsvFQIduG0nBJz5BXqN-GcYkbhs_UIf6iSXPueRQizZ64M5hQwmuR_dLqjDiBdQfZy-1h9AAh2_8EShx3919pJ-QNCd-rpY33yBz1og5U6LJlDY2Jk8Preuzw" rel="oauth"> here </a>
            </b>

            <h4>long term access token for dev</h4>
            <b>
            ```

            curl -X POST https://api.instagram.com/oauth/access_token -F client_id=386585613295040 -F client_secret=199b7d714d33010416ec76e33b7e8371 -F grant_type=authorization_code -F redirect_uri=https://localhost:3000/ -F code= AQCr1XMdtA64XCDYKc-k3zybt7h8bt1IGqhBRAJyQHm5fUUXdB7i1AxHhS3DH1qJLcZLYrYFJxsxsBBGgo40R6NUd7Tz3DUDnJapAwz3QpdctVphNsxB1UsvFQIduG0nBJz5BXqN-GcYkbhs_UIf6iSXPueRQizZ64M5hQwmuR_dLqjDiBdQfZy-1h9AAh2_8EShx3919pJ-QNCd-rpY33yBz1og5U6LJlDY2Jk8Preuzw
            
            ```
            
            </b>
            
        </div>);
}

export default Welcome;