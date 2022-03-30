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
    this.setState({ instagram: instagram });
  }

  handleButtonClicked() {
    console.log(this.state.instagram);
  }

  render() {
    return (
      <div>
        <label>
          <p>User Name:</p> 
          <input type="text" value={this.state.instagram.userName} onChange={this.handleFirstNameChanged.bind(this)}/>
        </label>
        <br/>
        <div>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Save Record
        </button>
        </div>

        <h3> name is... {this.state.instagram.userName}</h3>
      </div>
    );
  }
}