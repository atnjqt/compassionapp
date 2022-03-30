import React from 'react'
import InstaFeeds from './InstaFeeds';
import Login from './Login';

const Welcome = () => {

    return (
        <div>
            <h3>🟥 🟧 🟨 🟩 🟦 🟪 ⬛️ ⬜️ 🟫</h3> 
            <b><Login />
            </b>
            <b>
            - for short term access token, copy code for HTTP POST
            <br>
            </br>
                - for long term access token, copy short token for HTTP GET here
            </b>
            <hr></hr>

            <div>
                <h3>
                    <a href="http://localhost:3000/instafeed" rel="instafeed"> localhost:3000/instafeed </a>
                </h3>
            </div>


            <b>
            🔴 🟠 🟡 🟢 🔵 🟣 ⚫️ ⚪️ 🟤 

             <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
            </b>
            
        </div>);
}

export default Welcome;