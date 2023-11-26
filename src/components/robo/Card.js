import React from "react";

const url = 'https://robohash.org/';
//creating a functional component
const Card = ({ id, name, email}) => {
    return (
        <div className="bg-light-green dib br3 ma2 grow bw2 shadow-5">
            <img src = {url + id} alt = 'robo'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;