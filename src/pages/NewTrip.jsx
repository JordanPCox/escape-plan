import React, { useState } from 'react';
import Budget from "../components/Budget";
import ItineraryForm from "../components/ItineraryForm"; // Make sure the path is correct
import Nav from "../components/Nav";

function NewTrip() {
    const [itinerary, setItinerary] = useState([]);
    const [editEventId, setEditEventId] = useState(null);

    const addEventToItinerary = (event) => {
        if (editEventId !== null) {
            // Update existing event
            setItinerary(itinerary.map(it => it.id === editEventId ? { ...it, ...event } : it));
            setEditEventId(null); // Reset edit mode
        } else {
            // Add new event
            const newEvent = { ...event, id: Date.now() }; // Using Date.now() for simplicity
            setItinerary([...itinerary, newEvent]);
        }
    };

    const startEditing = (id) => {
        setEditEventId(id);
    };

    const deleteEvent = (id) => {
        setItinerary(itinerary.filter(it => it.id !== id));
    };

    return (
        <div>
            <h1>New Trip</h1>
            <Nav />
            <Budget />
            {/* Pass the event to edit if any */}
            <ItineraryForm addEvent={addEventToItinerary} editingEvent={itinerary.find(it => it.id === editEventId)} />
            {itinerary.map((event) => (
                <div key={event.id}>
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                    <p>Date: {event.date}, Time: {event.time}</p>
                    <button className="btn btn-secondary" onClick={() => startEditing(event.id)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteEvent(event.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default NewTrip;
