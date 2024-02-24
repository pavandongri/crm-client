import React, { useEffect, useState } from 'react';
import '../components/Login.css'
import axios from '../api.js';

const Login = () => {

  const [loginError, setLoginError] = useState(false)

  const tokenExpired = (token) => {
    if (!token) return true;

    const tokenParts = token.split('.');

    const decodedPayload = atob(tokenParts[1]);

    const tokenData = JSON.parse(decodedPayload);

    if (!tokenData || !tokenData.exp) return true;

    const currentTime = Math.floor(Date.now() / 1000);

    return tokenData.exp < currentTime;
  }


  const storedToken = localStorage.getItem('token')

  if (!tokenExpired(storedToken)) {
    window.location.href = '/home'
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginError(false)

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const data = {
      user: {
        email: email,
        password: password
      }
    }

    try {
      const response = await axios.post('/login', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.status.code == 200) {
        const token = response.headers.get("Authorization");
        localStorage.setItem('token', token);
        window.location.href = '/home'
      } else {
        setLoginError(true)
      }
    } catch (error) {
      setLoginError(true)
    }
  };

  useEffect(() => {

  }, [loginError])


  return (
    <div className="container">
      <div className='heading'>
        Login
      </div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <p className={(loginError) ? "login-error" : "display-none"}>Wrong credentials..!!</p>
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


