import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

//import Feed from './Feed'
import FacebookPicture from './FacebookPicture'

import './FacebookFriends.css'

const FacebookFriends = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([]);
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;
    console.log(tokenProp)

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchFacebookFriends () {
          try{
            axios
                .get(`https://graph.facebook.com/me/friends?access_token=${tokenProp.current}&metadata=1`)
                .then((resp) => {
                    console.log('TESTING - /me/friends no longer returns data?', resp)
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }

        // manually call the fecth function 
        fetchFacebookFriends();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        // for each friend, displays using the FacebookPicture Component
        <div className="container">
            {feeds.map((feed) => (
                <FacebookPicture user_id={feed.id} name={feed.name} width={'240'} height={'240'} token={token}/>
            ))}
        </div>
    );
}

export default FacebookFriends;