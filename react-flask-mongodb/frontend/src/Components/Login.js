import React from 'react';
import './Login.css';

export default function Login() {
  return(
    <div className="login-wrapper">
      <h1>Please Log In via Instagram Tester Username</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}