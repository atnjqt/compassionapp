import React, { useState, useEffect, useRef } from 'react'

const GetFaces = ({source, ...props}) => {

    const [faces, setFaces] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/get_faces?source=<PASS_URL_HERE>', {
              'methods':'GET',
               headers : {
              'Content-Type':'application/json'
            }
        } )
        .then(response => response.json())
        .then(response => setFaces(response.message))
        .catch(error => console.log(error))

        },[])

    return (
            <p>{faces}</p>
        );
    }

export default GetFaces;