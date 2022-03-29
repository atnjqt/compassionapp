import React from 'react'

const Welcome = () => {

    return (
        <div>
            <h3>Login for Instagram Tester Username (should be conditional on having IG short access token) 
                <a href="http://localhost:3000/login" rel="login"> localhost:3000/login </a> 
            </h3>,
            
            <h3>Instafeed on React via API access token
                <a href="http://localhost:3000/instafeed" rel="instafeed"> localhost:3000/instafeed </a>
            </h3>,

            <h3>Oauth
                <a href="http://localhost:3000/oauth" rel="oauth"> localhost:3000/oauth </a>
            </h3> 
            
        </div>);
}

export default Welcome;