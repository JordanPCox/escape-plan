import React, { useState } from "react";

function ItineraryForm({ addEvent }) {
    const [event, setEvent] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setEvent(prevEvent => ({
            ...prevEvent,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addEvent(event)
        setEvent({ title: '', description: '', date: '', time: '' }) // reset the form
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
            placeholder="Event Title"
            required
            />

            <textarea
            name="description"
            value={event.description}
            onChange={handleChange}
            placeholder="Event Description"
            required
            />

            <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
            />

            <input
            type="time"
            name="time"
            value={event.time}
            onChange={handleChange}
            required
            />

            <button type="submit">Add Event</button>
        </form>
    )
}






export default ItineraryForm