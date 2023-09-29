import React, { useState } from "react";

export default function FormAddCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [frequency, setFrequency] = useState("");
    const [cost, setCost] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Title: ", title);
        console.log("Description: ", description);
        console.log("Duration: ", duration);
        console.log("Frequency: ", frequency);
        console.log("Cost: ", cost);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </label>
            <br />
            <label>
                Service Description:
                <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <br />
            <label>
                Duration:
                <input
                    type="text"
                    value={duration}
                    onChange={(event) => setDuration(event.target.value)}
                />
            </label>
            <br />
            <label>
                Frequency:
                <input
                    type="text"
                    value={frequency}
                    onChange={(event) => setFrequency(event.target.value)}
                />
            </label>
            <br />
            <label>
                Cost:
                <input
                    type="text"
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}