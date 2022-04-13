import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import './App.css';

function App() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
  const [accessToken, setAccessToken] = useState();

  const responseFacebook = (response) => {
    console.log(JSON.stringify(response));
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);

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
    
          {
           <h2 class="welcome"> <strong>Welcome to CompassionApp 🪷 🧘 🌎</strong> </h2>
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
          <Image src={picture} width="50" roundedCircle />
          </div>}

        </Card.Header>


        {login && 
        <Card.Body>
            <Card.Title class="be_well">May you be well, <strong>{data.name}</strong></Card.Title>
            <Card.Text>
              Email: <code><strong>{data.email}</strong></code><br></br>
            </Card.Text>
        </Card.Body>
      }

      {login && 
        <div class='word_wrap'>
        Access token:<br></br> <blockquote><code>{accessToken}</code></blockquote>
        

        <h2>Your friends (fb testers)</h2>

        <body>

          you can run the following curl command for testing, to get a list of your friends /  a list of your photos... try this:

          <blockquote>
            <code>
              curl -i -X GET \
              "https://graph.facebook.com/me/friends?access_token={accessToken}"
            </code>
          </blockquote>

        you can try the following: <a href={"https://graph.facebook.com/me/friends?access_token=" + accessToken} target="_blank">here</a>
        </body>

        <h2> Your Profile Picture</h2>

        We get the temp link from json response on the following: <a href={"https://graph.facebook.com/me/picture?type=large&width=720&height=720&redirect=0&access_token=" + accessToken} target="_blank">here</a>
        <br></br>
        
        <h3 class="welcome"> <strong>1. MAY YOU BE WELL🪷 🧘 🌎</strong> </h3>
        
        <div class="prof_pic">
         <Image src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=101566925868109&height=720&width=720&ext=1652417519&hash=AeRwhh0r9sOoTIeGiwE" roundedCircle />
        </div>}

        <h3 class="welcome"> <strong>2. MAY YOUR FB TESTER FRIENDS BE WELL🪷 🧘 🌎</strong> </h3>


        <blockquote>instead of <code>me/picture...</code> we use the FB friend ID node as <code>USER-ID/picture...</code>
        
        <br></br>- <a href={"https://graph.facebook.com/105573932130257/picture?type=large&width=250&height=250&redirect=0&access_token=" + accessToken} target="_blank">here for <code>105573932130257</code></a>
        <br></br>- <a href={"https://graph.facebook.com/101696215855611/picture?type=large&width=250&height=250&redirect=0&access_token=" + accessToken} target="_blank">here for <code>101696215855611</code></a>
        </blockquote>

        
        <div class="prof_pic">
         <Image src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=105573932130257&height=250&width=250&ext=1652419622&hash=AeTlMkbVO6ZyEt1vs_8" 
         roundedCircle />
        </div>
        <div class="prof_pic">
         <Image src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=101696215855611&height=250&width=250&ext=1652419636&hash=AeSwOv1FIFLzvoRv8O8" 
         roundedCircle />
        </div>

        <h3>Your posts (fb testers) -- TBD..</h3>

        or you can try the following: <a href={"https://graph.facebook.com/me/posts?access_token=" + accessToken} target="_blank">here</a>

        
        </div>
      }
  
     </Card>
    </div>
  );
}

export default App;