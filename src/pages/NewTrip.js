import React from "react";
import Budget from "../components/Budget";
import Itinerary from "../components/Itinerary";
import Nav from "../components/Nav";

function NewTrip() {
    return (
        <div>
            <h1>New Trip</h1>
            <Nav />
            <Budget />
            <Itinerary />
        </div>
    );
}

export default NewTrip;
