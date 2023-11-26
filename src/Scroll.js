import React from "react";

const Scroll = (props) => {
    //to wrap custom components we can use children
    //{{}} is used to add css in jsx
    return(
        <div style={{overflowY:'scroll', border: '5px solid rgba(0, 255, 255, 0.685)', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;