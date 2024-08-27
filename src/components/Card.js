import React from 'react';
import './Card.css';

const Card = ({ image, title, description, link }) => {
    return (
        <div className="card">
            {image && <img src={image} alt={title} className="card-image" />}
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                {link && (
                    <a href={link} className="card-link">
                        Learn More
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
