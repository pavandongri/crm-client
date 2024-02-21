import React, { useDebugValue, useEffect, useState } from 'react'
import axios from '../api.js'
import '../components/MeetingDetails.css'
import { ServerUrl, isProduction } from '../Url.js';
import { useParams } from 'react-router-dom';


const MeetingDetails = (props) => {
    const { id } = useParams();
    const [meeting, setMeeting] = useState(null)

    useEffect(() => {
        getMeetingDetails();
    }, [])

    const getMeetingDetails = async () => {
        try {
            const response = await axios.get(`/meeting/${id}`);
            const data = response.data;
            console.log(data)
            setMeeting(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const updateMeeting = async () => {
        try {
            const updatedMeeting = {
                title: document.querySelector('.title-input').textContent,
                date: document.querySelector('.date-input').textContent,
                time: document.querySelector('.time-input').textContent,
                location: document.querySelector('.location-input').textContent,
                status: document.querySelector('.status-input').textContent,
                priority: document.querySelector('.priority-input').textContent,
                duration: document.querySelector('.duration-input').textContent,
                organizer: document.querySelector('.organizer-input').textContent

            };
            await axios.put(`/meeting/${id}`, updatedMeeting);
            setMeeting(updatedMeeting);
        } catch (error) {
            console.error('Error updating meeting:', error);
        }
    };

    const deleteMeeting = async () => {
        try {
            await axios.delete(`/meeting/${id}`);
            window.location.href = (isProduction ? ServerUrl : '') + '/meetings';
        } catch (error) {
            console.error('Error deleting meeting:', error);
        }
    };


    return (
        <>
            <div className="container">
                <h1 className="heading">Meeting Details</h1>
                <br />
                <div className="meeting_container">
                    <div className="meeting_title">
                        <div className="label">Title</div>
                        <div contentEditable='true' className="title-input editable">{meeting ? meeting.title : 'nil'}</div>
                    </div>

                    <div className="meeting_date">
                        <div className="label">Date</div>
                        <div contentEditable='true' className="date-input editable">{meeting ? meeting.date : 'nil'}</div>
                    </div>

                    <div className="meeting_time">
                        <div className="label">Time</div>
                        <div contentEditable='true' className="time-input editable">{meeting ? meeting.time : 'nil'}</div>
                    </div>

                    <div className="meeting_location">
                        <div className="label">Location</div>
                        <div contentEditable='true' className="location-input editable">{meeting ? meeting.location : 'nil'}</div>
                    </div>

                    <div className="meeting_status">
                        <div className="label">Status</div>
                        <div contentEditable='true' className="status-input editable">{meeting ? meeting.status : 'nil'}</div>
                    </div>

                    <div className="meeting_priority">
                        <div className="label">Priority</div>
                        <div contentEditable='true' className="priority-input editable">{meeting ? meeting.priority : 'nil'}</div>
                    </div>

                    <div className="meeting_duration">
                        <div className="label">Duration</div>
                        <div contentEditable='true' className="duration-input editable">{meeting ? meeting.duration : 'nil'}</div>
                    </div>

                    <div className="meeting_organizer">
                        <div className="label">Organizer</div>
                        <div contentEditable='true' className="organizer-input editable">{meeting ? meeting.organizer : 'nil'}</div>
                    </div>
                </div>

                <br /><br />

                <div className="profile-btns" >
                    <button className="edit-btn" onClick={updateMeeting}>Update</button>
                    <button className="destroy-btn" onClick={deleteMeeting}>Delete</button>
                </div>

            </div>
        </>
    )
}


export default MeetingDetails