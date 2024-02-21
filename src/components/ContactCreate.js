import React, { useDebugValue, useEffect, useState } from 'react'
import axios from '../api.js'
import '../components/ContactCreate.css'



const ContactCreate = (props) => {

    function validateInputs() {
        const nameEditable = document.querySelector('.name_editable');
        const emailEditable = document.querySelector('.email_editable');
        const mobileEditable = document.querySelector('.mobile_editable');
        const companyEditable = document.querySelector('.company_editable');
        const roleEditable = document.querySelector('.role_editable');

        if(!nameEditable.value)  nameEditable.classList.add('error');
        if(!emailEditable.value) emailEditable.classList.add('error');
        if(!mobileEditable.value ) mobileEditable.classList.add('error');
        if(!companyEditable.value) companyEditable.classList.add('error');
        if(!roleEditable.value) roleEditable.classList.add('error');
    
        if (!nameEditable.value || !emailEditable.value || !mobileEditable.value || !companyEditable.value || !roleEditable.value) {
            return false
        }
        
        return true;
    }

    const createContact = async () => {
        try {
            if (!validateInputs()){
                console.log('input validaton failed')
                return
            }

            const updatedContact = {
                name: document.querySelector('.name_editable').value,
                email: document.querySelector('.email_editable').value,
                mobile: document.querySelector('.mobile_editable').value,
                company: document.querySelector('.company_editable').value,
                role: document.querySelector('.role_editable').value

            };
            const response = await axios.put('/contact', updatedContact);
            window.location.href = '/contacts'
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    return (
        <>
            <div className="container">
                <h1 className="heading">Create New Contact</h1>
                <br />
                <div className="contact_container">
                    <input type="text" className="name_editable editable" placeholder="Enter your Name" />
                    <input type="text" className="email_editable editable" placeholder="Enter your Email" />
                    <input type="text" className="mobile_editable editable" placeholder="Enter your Mobile" />
                    <input type="text" className="company_editable editable" placeholder="Enter your Company" />
                    <input type="text" className="role_editable editable" placeholder="Enter your Role" />
                </div>

                <br /><br />

                <div className="profile-btns" >
                    <button className="edit-btnn" onClick={createContact}>Create Contact</button>
                </div>

            </div>
        </>
    )
}


export default ContactCreate