import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { instagram: { username: props.userName }
    }
  }

  handleFirstNameChanged(event) {
    var instagram        = this.state.instagram;
    instagram.userName  = event.target.value;
    this.setState({ 
      instagram: instagram});
  }

  handleButtonClicked() {
    console.log(this.state.instagram);
  }

  render() {
    return (
      <div>
        <label>
          <p>Instagram Tester User Name:</p> 
          <input type="text" value={this.state.instagram.userName} onChange={this.handleFirstNameChanged.bind(this)}/>
        </label>
        <br/>
        <h3> Welcome, {this.state.instagram.userName}</h3>
        <div>
        <button onClick={this.handleButtonClicked.bind(this)}>
        Here <a href="https://www.instagram.com/oauth/authorize?client_id=386585613295040&redirect_uri=https://localhost:3000/&scope=user_profile,user_media&response_type=code" target="_blank" rel="oauth"> OAUTH </a>
        </button>
        </div>
        <br/>

      </div>
    );
  }
}