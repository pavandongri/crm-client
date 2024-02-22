import React from 'react';
import '../components/Login.css'
import axios from '../api.js';

const Login = () => {
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
        console.error("Login failed:", 401);
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


