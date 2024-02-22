import React from 'react';
import '../components/Registration.css'
import axios from '../api.js';

const Registration = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const data = {
      user: {
        name: name,
        email: email,
        password: password
      }
    }

    console.log(JSON.stringify(data))

    try {
      const response = await axios.post('/signup', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.status.code == 200) {
        window.location.href = "/home";
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
        Registration
      </div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input type="text" id="name" name="name" required placeholder='Your Name' />
          <br /><br />


          <input type="text" id="email" name="email" required placeholder='Email' />

          <br /><br />

          <input type="password" id="password" name="password" required placeholder='Password' />

          <br /><br />

          <button type="submit" id="sign-in-btn">Register</button>


          <br /><br />

          <div className="register">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>

        </form>
      </div>

    </div>
  );
}

export default Registration;
