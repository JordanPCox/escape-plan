import React from "react";
import Budget from "../components/Budget";
import ItineraryForm from "../components/ItineraryForm";
import Nav from "../components/Nav";

function NewTrip() {
    return (
        <div>
            <h1>New Trip</h1>
            <Nav />
            <Budget />
            <ItineraryForm />
        </div>
    );
}

export default NewTrip;
