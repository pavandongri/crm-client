import React from 'react';
import '../components/Login.css'

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

    const url = "http://localhost:3001/login";

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
        window.location.href = '/home'
      } else {
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during registration:", error);
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


