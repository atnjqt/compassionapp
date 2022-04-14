import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import './App.css';

import FacebookPicture from './Components/FacebookPicture'
//import FacebookFriends from './Components/FacebookFriends'
import FacebookFriendsPicture from './Components/FacebookFriendsPicture'


function App() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  //const [picture, setPicture] = useState('');
  const [accessToken, setAccessToken] = useState();

  const responseFacebook = (response) => {
    console.log('LOGIN API RESPONSE HERE (TEST & DEV)...')
    console.log(response);
    setData(response);
    //setPicture(response.picture.data.url);

    if (response.accessToken) {
      setAccessToken(response.accessToken)
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div class="container"> 
      
      <Card style={{ backgroundImage: "url(/compassion_bg.png)" }}>

        <Card.Header>
          
          <h1 class="welcome"> <strong>Welcome to CompassionApp 🧘 🌎 🪷</strong> </h1>
          <hr></hr>

          {!login &&
            <FacebookLogin
              appId="292301126304936"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile, email, user_friends, user_photos, user_birthday"
              callback={responseFacebook}
              icon="fa-facebook" />
          }

        </Card.Header>

        {login && 

          <Card.Body>

            <Card.Title class="login_title">Logged on as: <strong>{data.name} - <code>{data.email}</code></strong></Card.Title>
              
            <Card.Text class="login_title">
              
              <div>
                  
                <h2 class="welcome"> <strong><em>1. May you be well... </em> 😌</strong> </h2>
                <div>
                  <FacebookPicture user_id={'me'} width={'320'} height={'320'} token={accessToken}/>
                </div> 
                <hr></hr>

                <h2 class="welcome"> <strong><em>2. May your FB Tester Friends be well...</em> 👩‍💻</strong> </h2>
                <div>
                  <FacebookFriendsPicture token={accessToken}/>
                </div>
                <hr></hr>
                
                <h2 class="welcome"> <em>3. Detecting Faces in Your Facebook Posts -- TBD...</em></h2>
                Click <a href={"https://graph.facebook.com/me/posts?access_token=" + accessToken} target="_blank">here</a>
              </div>

            </Card.Text>

          </Card.Body>
      }
  
     </Card>
    </div>
  );
}

export default App;