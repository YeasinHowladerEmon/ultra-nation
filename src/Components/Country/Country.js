import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, flag, region} = props.country
    const handleClick = props.handleClick;
    return (
        <div className="country-edit">
            <h2>{name}</h2>
            <img src={flag} alt=""/>
            <p>{region}</p>
            <button onClick={() => handleClick(props.country)}>view details</button>
            
        </div>
    );
};

export default Country;