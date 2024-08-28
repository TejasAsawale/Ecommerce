import React from 'react';
import { useLocation } from 'react-router-dom';
import './CardDetails.css';

const CardDetails = () => {
    const location = useLocation();
    const { image, title, description } = location.state || {};

    return (
        <div className="card-details">
            <img src={image} alt={title} className="card-details-image" />
            <h1 className="card-details-title">{title}</h1>
            <p className="card-details-description">{description}</p>
        </div>
    );
};

export default CardDetails;
