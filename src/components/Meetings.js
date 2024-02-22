import React from 'react'
import { useState, useEffect } from 'react';
import '../components/Meetings.css'
import axios from '../api.js';
import { CiCirclePlus } from "react-icons/ci";

const Meetings = () => {
    const [meetings, setMeetings] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/meetings');
            const data = response.data;
            setMeetings(data);
            console.log('meetings = ', data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleRowClick = (meetingId) => {
        window.location.href = `/meeting/${meetingId}`;
    }


    const createNewMeetings = () => {
        window.location.href = "/meeting/create"
    }

    return (
        <div className="container">
            <h1 className="heading">Meetings <CiCirclePlus id='plus' onClick={createNewMeetings} title="Create new Meeting" /></h1>

            <div className="meetings-list">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Duration</th>
                            <th>Organizer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meetings && meetings.map(meeting => (
                            <tr key={meeting.id} onClick={() => handleRowClick(meeting.id)}>
                                <td>{meeting.title}</td>
                                <td>{meeting.date}</td>
                                <td>{meeting.time}</td>
                                <td>{meeting.location}</td>
                                <td>{meeting.status}</td>
                                <td>{meeting.priority}</td>
                                <td>{meeting.duration}</td>
                                <td>{meeting.organizer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Meetings