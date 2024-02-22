import React from "react"
import axios from "../api.js"
import '../components/MeetingCreate.css'


const MeetingCreate = () => {

    const createMeeting = async () => {
        try {
            const meeting = {
                title: document.querySelector('.m-title').value,
                date: document.querySelector('.m-date').value,
                time: document.querySelector('.m-time').value,
                location: document.querySelector('.m-location').value,
                status: document.querySelector('.m-status').value,
                priority: document.querySelector('.m-priority').value,
                duration: document.querySelector('.m-duration').value,
                organizer: document.querySelector('.m-organizer').value

            };
            const response = await axios.put('/meeting/create', meeting);
            window.location.href = '/meetings'
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    }

    return (
        <>
            <div className="container">
                <h1 className="heading">Create New Meeting</h1>
                <br />
                <div className="meeting_container">
                    <input type="text" className="m-title" placeholder="Title" />

                    <input type="date" className="m-date" placeholder="Date of meeting" />

                    <input type="time" className="m-time" placeholder="Time of meeting" />

                    <input type="text" className="m-location" placeholder="Meeting location" />

                    <select className="m-status" placeholder="Meeting Status">
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>

                    <select className="m-priority" placeholder="Priority">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>

                    <input type="text" className="m-duration" placeholder="Meeting Duration" />

                    <input type="text" className="m-organizer" placeholder="Organizer Name" />

                </div>

                <br /><br />

                <div className="m-profile-btns" >
                    <button className="meeting-create-btnn" onClick={createMeeting}>Create Meeting</button>
                </div>

            </div>
        </>
    )
}


export default MeetingCreate