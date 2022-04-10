import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image, Figure } from 'react-bootstrap';
import './App.css';

function App() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
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
      <Card style={{ width: '1000px' }}>
        <Card.Header>
    
          {<div>
           <h2><em>Welcome to CompassionMode</em></h2>

          </div>
          }

          {!login &&
            <FacebookLogin
              appId="292301126304936"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile, 
                email, 
                user_age_range,
                user_birthday,
                user_friends,
                user_gender,
                user_hometown,
                user_likes,
                user_link,
                user_location,
                user_messenger_contact,
                user_photos,
                user_posts,
                user_videos,
                read_insights"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
          
          {login &&
          <Image src={picture} roundedCircle />
          }
        </Card.Header>
        {login &&
          <Card.Body>
            <Card.Title>May you be well, <strong>{data.name}</strong></Card.Title>
            <Card.Text>
              {data.email}
            </Card.Text>
          </Card.Body>
        }
      </Card>
    </div>
  );
}

export default App;