import React, { useEffect, useState } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

function NasaData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=W9Q2hdg0V6ae14oUwllLc4d6zdwPfiOy7lFmpxDH")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log("Oof can i get a F in the chat bois", error);
            });
    }, []);
    return(
        <div className="image">
            <NasaCard
            key={data.id}
            title={data.title}
            explanation={data.explanation}
            date={data.date}
            img={data.url}
            />
        </div>
    );
}

export default NasaData;