import React from 'react';
import '../components/Login.css'
import { ServerUrl, isProduction } from '../Url.js';

const Login = () => {

  console.log('inLogin start')

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const data = {
      user: {
        email: email,
        password: password
      }
    }
    console.log(data, "in login", isProduction)
    console.log("NODE_ENV:", process.env);

    const url = (isProduction ? ServerUrl : 'http://localhost:3001') + '/login'
    

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });


      if (response.ok) {
        const token = response.headers.get("Authorization");
        localStorage.setItem('token', token);
        console.log("isProduction : ", isProduction)
        window.location.href = '/home'
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during Login:", error);
    }
  };




  return (
    <div className="container">
      <div className='heading'>
        Login
      </div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input type="text" id="email" name="email" required placeholder='Email' />

          <br /><br />

          <input type="password" id="password" name="password" required placeholder='Password' />

          <br /><br />

          <button type="submit" id="sign-in-btn">Sign In</button>


          <br /><br />

          <div className="register">
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>

        </form>
      </div>

    </div>
  );
};

export default Login;


