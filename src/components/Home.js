import React, { useState, useEffect } from 'react';
import '../components/Home.css';
import axios from '../api.js'; 

const Home = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        const response = await axios.get('/profile');
        const data = response.data;
        setUser(data);
    }

    return (
        <>
            <div className='welcome'>
                <h1>Hello  <strong id="user_name">{user ? user.name : ''}</strong> 👋</h1>
                <br /><br />
                <h2>Welcome to fast and efficient website for managing CRM tools</h2>
                <br />
                <p>
                    Welcome to our CRM website! We're excited to have you here. Our platform is designed to streamline your customer relationship management processes,
                    empowering you to better connect with your clients and grow your business. With intuitive features and user-friendly interface, managing contacts,
                    tracking interactions, and analyzing data has never been easier. Whether you're a small business owner or a large enterprise, our CRM solution is
                    tailored to meet your needs and scale with your business.
                </p>
            </div>
        </>
    )
}


export default Home;
