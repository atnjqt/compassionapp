import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import './App.css';

function App() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(JSON.stringify(response));
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);

    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div class="container"> 
      
      <Card style={{ backgroundImage: "url(/compassion_bg.png)" }}>
        <Card.Header>
    
          {
           <h2 class="welcome"> <em>Welcome to CompassionMode</em> </h2>
          }

          {!login &&
            <FacebookLogin
              appId="292301126304936"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile, email, user_friends, user_photos, user_birthday"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
          
          {login &&
          <div class="prof_pic">
          <Image src={picture} width="300" roundedCircle />
          </div>}

        </Card.Header>

        {login &&
          <Card.Body>
            <Card.Title class="be_well">May you be well, <strong>{data.name}</strong></Card.Title>
            <Card.Text>
              email is: {data.email}...
            </Card.Text>
          </Card.Body>
        }
      </Card>
    </div>
  );
}

export default App;