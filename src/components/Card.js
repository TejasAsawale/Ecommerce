// Card.js
import React from 'react';
import './Card.css'; // Ensure this path is correct

const Card = ({ image, title, description, link }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <a href={link} className="card-link">Read More</a>
            </div>
        </div>
    );
};

export default Card;
