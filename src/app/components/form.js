"use client"; // This is the key directive to enable client-side logic

import { useState } from "react";
import { squard } from "../action";

export default function EventForm({ events ,eventName}) {
    // Client-side state for selected event IDs
    const [selectedEvents, setSelectedEvents] = useState([eventName]);

    // Handle checkbox change
    const handleCheckboxChange = (e) => {
        const value = e.target.value;

        if (e.target.checked) {
            if (selectedEvents.length < 5) {
                setSelectedEvents((prev) => [...prev, value]);
            } else {
                alert("You can only select up to 4 events.");
                e.target.checked = false; // Prevent checking more than 4
            }
        } else {
            setSelectedEvents((prev) => prev.filter((id) => id !== value));
        }
    };

    console.log(selectedEvents);
    

    // Handle form submission (server action)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await squard(selectedEvents);

        if (result.success) {
            alert("Events submitted successfully!");
        } else {
            alert(`Failed to submit events: ${result.error}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" hidden value={events.events} name="event" />
            <ul>
                {events.map((eventData) => (
                    <li key={eventData.EventID}>
                        <label>
                            <input
                                type="checkbox"
                                value={eventData.EventID}
                                onChange={handleCheckboxChange}
                                disabled={selectedEvents.length >= 5 && !selectedEvents.includes(eventData.EventID)}
                            />
                            Event ID: {eventData.EventID}
                        </label>
                    </li>
                ))}
            </ul>
            <button
                type="submit"
                disabled={selectedEvents.length === 0}
                className="bg-blue-500 text-white font-bold px-4 py-2 rounded"
            >
                Submit Selected Events
            </button>
        </form>
    );
}
