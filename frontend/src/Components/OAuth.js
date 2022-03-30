import React from 'react';
import axios from 'axios'

export default class OAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: { data: props.total }
      }
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://api.instagram.com/oauth/access_token?client_id=386585613295040&client_secret=199b7d714d33010416ec76e33b7e8371&grant_type=authorization_code&redirect_uri=https://localhost:3000/&code=');
        const data = await response.json();
        this.setState({ totalReactPackages: data.total })
    }
}