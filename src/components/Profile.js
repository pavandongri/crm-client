import React, { useState, useEffect } from "react";
import '../components/Profile.css';
import axios from '../api.js';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('/profile');
            const data = response.data;
            setUser(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const updateProfile = async () => {
        try {
            const updatedName = document.querySelector('.name_editable').textContent;
            const updatedEmail = document.querySelector('.email_editable').textContent;
            const updatedUserData = { name: updatedName, email: updatedEmail };
            const response = await axios.put('/profile/update', updatedUserData);
            fetchUserData();
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const deleteProfile = async () => {
        try {
            const response = await axios.delete('/profile/delete');
            localStorage.removeItem('token')
            window.location.href = '/login';
            setUser(null);

        } catch (error) {
            console.error('Error deleting profile:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="heading">Profile</h1>

            <div className="user_details">
                <div className="name_details">
                    <div className="label">Name</div>
                    <div contentEditable='true' className="name_editable">{user ? user.name : 'no name'}</div>
                </div>

                <div className="email_details">
                    <div className="label">Email</div>
                    <div contentEditable='true' className="email_editable">{user ? user.email : 'no email'}</div>
                </div>
            </div>

            <br /><br />

            <div className="profile-btns" >
                <button className="edit-btn" onClick={updateProfile}>Update</button>
                <button className="destroy-btn" onClick={deleteProfile}>Delete</button>
            </div>
        </div>
    );
};

export default Profile;
