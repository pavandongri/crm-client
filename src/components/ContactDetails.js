import React, { useDebugValue, useEffect, useState } from 'react'
import axios from '../api.js'
import '../components/ContactDetails.css'

import { useParams } from 'react-router-dom';


const ContactDetails = (props) => {
    const { id } = useParams();
    const [contact, setContact] = useState(null)

    useEffect(() => {
        getContactDetails();
    }, [])

    const getContactDetails = async () => {
        try {
            const response = await axios.get(`/contact/${id}`);
            const data = response.data;
            setContact(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const updateContact = async () => {
        try {
            const updatedContact = {
                name: document.querySelector('.name_editable').textContent,
                email: document.querySelector('.email_editable').textContent,
                mobile: document.querySelector('.mobile_editable').textContent,
                company: document.querySelector('.company_editable').textContent,
                role: document.querySelector('.role_editable').textContent
            };
            console.log(updateContact)
            await axios.put(`/contact/${id}`, updatedContact);
            setContact(updatedContact);
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    const deleteContact = async () => {
        try {
            await axios.delete(`/contact/${id}`);
            console.log('Contact deleted successfully');
            window.location.href = '/contacts';
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };


    return (
        <>
            <div className="container">
                <h1 className="heading">Contact Details</h1>
                <br />
                <div className="contact_details_container">
                    <div className="contact_name">
                        <div className="label">Name</div>
                        <div contentEditable='true' className="name_editable editable">{contact ? contact.name : 'nil'}</div>
                    </div>

                    <div className="contact_email">
                        <div className="label">Email</div>
                        <div contentEditable='true' className="email_editable editable">{contact ? contact.email : 'nil'}</div>
                    </div>

                    <div className="contact_mobile">
                        <div className="label">Mobile</div>
                        <div contentEditable='true' className="mobile_editable editable">{contact ? contact.mobile : 'nil'}</div>
                    </div>

                    <div className="contact_company">
                        <div className="label">Company</div>
                        <div contentEditable='true' className="company_editable editable">{contact ? contact.company : 'nil'}</div>
                    </div>

                    <div className="contact_role">
                        <div className="label">Role</div>
                        <div contentEditable='true' className="role_editable editable">{contact ? contact.role : 'nil'}</div>
                    </div>
                </div>

                <br /><br />

                <div className="profile-btns" >
                    <button className="edit-btn" onClick={updateContact}>Update</button>
                    <button className="destroy-btn" onClick={deleteContact}>Delete</button>
                </div>

            </div>
        </>
    )
}


export default ContactDetails