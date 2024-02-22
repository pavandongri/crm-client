import React from 'react'
import { useState, useEffect } from 'react';
import '../components/Contacts.css'
import axios from '../api.js';
import { CiCirclePlus } from "react-icons/ci";


const Contacts = () => {
    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/contacts');
            const data = response.data;
            setContacts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleRowClick = (contactId) => {
        window.location.href = `/contact/${contactId}`;
    }

    const createNewContact = () => {
        window.location.href = '/contact/new/create'
    }

    return (
        <div className="container">
            <h1 className="heading">Contacts <CiCirclePlus id='plus' onClick={createNewContact} title="Create new contact" /></h1>

            <div className="contacts-list">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Company</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts && contacts.map(contact => (
                            <tr key={contact.id} onClick={() => handleRowClick(contact.id)}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.mobile}</td>
                                <td>{contact.company}</td>
                                <td>{contact.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Contacts