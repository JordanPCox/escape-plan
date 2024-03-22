import React, { useEffect, useState } from 'react';

function ItineraryForm({ addEvent, editingEvent }) {
  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    if (editingEvent) {
        setEvent(editingEvent)
    }
  }, [editingEvent])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prevEvent => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    setEvent({ title: '', description: '', date: '', time: '' }); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Event Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={event.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="3"
          value={event.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="time" className="form-label">Time</label>
        <input
          type="time"
          className="form-control"
          id="time"
          name="time"
          value={event.time}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Event</button>
    </form>
  );
}

export default ItineraryForm;
