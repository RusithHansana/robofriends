import React from "react";
import Card from "./Card";

const ClassList = ({robots}) => {
    const cardComponent = robots.map((robot) => {
        return (
            <Card    
                key = {robot.id} 
                id = {robot.id} 
                name = {robot.name} 
                 email = {robot.email}
             />); 
        /* This is props similar to passsing parameters to classes. We can
         use this props in Hello.js file*/
    });

    return(
        <div>
            {cardComponent}
        </div>
    );
    
}

export default ClassList;