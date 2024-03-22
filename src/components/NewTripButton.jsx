import React from "react";
import { Link } from "react-router-dom";

function NewTripButton() {
    return (
        <Link to="/plan/new-trip" className="btn btn-primary">Create New Trip</Link>
    );
}

export default NewTripButton;
