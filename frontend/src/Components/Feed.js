import React from 'react'

const Feed = (props) => {
    const { name, id} = props.feed
    let post;

    post = (
        <body>
            Your friend's name is <strong>{name}</strong>,<br></br> facebook user ID is <strong>{id}</strong>
        </body> 
    );      

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;