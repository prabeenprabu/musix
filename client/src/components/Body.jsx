import React, { useState } from "react";
import Card from "./Card";

const Body = () => {
    const [tracks, setTracks] = useState([]);

    const getTracks = () => {
        let data = fetch(
            `https://v1.nocodeapi.com/prabeen/spotify/gazjwRKvnIYLFaMB/search?q=thanni&type=track&`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res.tracks.items);
                setTracks(res.tracks.items);
            });
    };

    return (
        <>
            {getTracks()}
            <div className="container mx-auto">
                {tracks.map((track, index) => {
                    return (
                        <>
                            <Card key={index} />
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Body;
