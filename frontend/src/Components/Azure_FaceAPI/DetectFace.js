import React, { useState, useEffect, useRef } from 'react'

import Face from '@azure/cognitiveservices-face'
import msRest from '@azure/ms-rest-js'

/**
 * Shared variables
 * These variables are shared by more than one example below.
 * will receive a facebook user photo feed tbd...
 */

// An image with only one face
let singleFaceImageUrl = 'https://www.biography.com/.image/t_share/MTQ1MzAyNzYzOTgxNTE0NTEz/john-f-kennedy---mini-biography.jpg';
// An image with several faces
let groupImageUrl = 'http://www.historyplace.com/kennedy/president-family-portrait-closeup.jpg';

const IMAGE_BASE_URL = 'https://csdx.blob.core.windows.net/resources/Face/Images/'
// Person Group ID must be lower case, alphanumeric, with '-' and/or '_'.
const PERSON_GROUP_ID = 'my-unique-person-group'

/**
 * AUTHENTICATE
* Used for all examples.
*/

let key = 'PASTE_YOUR_FACE_SUBSCRIPTION_KEY_HERE';
let endpoint = 'PASTE_YOUR_FACE_ENDPOINT_HERE';

let credentials = new msRest.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } });
let client = new Face.FaceClient(endpoint,credentials);
/**
 * END - AUTHENTICATE
 */

/**
 * AzureGetFaces
 * @param {string} source - url from Facebook API
 * @param {string} token - accessToken
 * @param {...props} props - properties in React
 * @returns faceresults & groupresults states updated
 */

const AzureGetFaces = ({source, token, ...props}) => {
    const [faceresults, setFacesData] = useState([]);
    const [groupresults, setGroupsData] = useState([]);

    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchFaceAPI() {
            /**
             * DETECT FACES 
             * Detects the faces in the source image, then in the target image.
             */
            console.log("---------------------------------")
            console.log("DETECT FACES")
        
            // Detect a single face in an image. Returns a Promise<DetectedFace[]>.
            // NOTE: FaceDetectWithUrlOptionalParams.returnFaceId default value is true. See:
            // https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/cognitiveservices/cognitiveservices-face/src/models/index.ts#L891
            let singleDetectedFace = await client.face.detectWithUrl(singleFaceImageUrl)
                .then((faces) => {
                    console.log(`Face ID found in single face image: \n${faces[0].faceId}`)
                    setFacesData(faces)
                    //return faces[0].faceId;
                }).catch((err) => {
                    console.log('No faces detected in single face image:' + singleFaceImageUrl)
                    throw err
                })
            console.log()
            singleDetectedFace();
        
            // Detect the faces in a group image. API call returns a Promise<DetectedFace[]>.
            let groupDetectedFaces = await client.face.detectWithUrl(groupImageUrl)
                .then((faces) => {
                    console.log('Face IDs found in group image:')
                    setGroupsData(faces)
                    // Initialize empty array of strings
                    var faceIds = new Array(faces.length)
                    for (let face of faces) {
                        faceIds.unshift(face.faceId)
                        console.log(face.faceId)
                    }
                    var filteredIds = faceIds.filter((id) => {
                        return id != null
                    })
                    //return filteredIds
                }).catch((err) => {
                    console.log(`No faces detected in group image: ${groupImageUrl}.`)
                    throw err
                })
            console.log()
            groupDetectedFaces();
            /**
             * END - DETECT FACES
            */}

        fetchFaceAPI();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <React.Fragment>
        <div className="container">
            face results are: {faceresults}<br></br>
            group results are {groupresults}
        </div>
        </React.Fragment>
    );
}

export default AzureGetFaces;