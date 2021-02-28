import React from 'react';

const Details = (props) => {
    const details = props.details;

    return (
        <div>
            <p>area:{details.area}</p>
            <p>{details.population}</p>
        </div>
    );
};
export default Details;