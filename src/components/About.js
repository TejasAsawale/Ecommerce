import React from 'react';
import './About.css';
import bakeryImage1 from '../images/bakery1.jpeg';
import bakeryImage2 from '../images/bakery2.jpeg';
import bakeryImage3 from '../images/bakery3.jpeg';

const About = () => {
    return (
        <div className="about-container">
        <h2>About Our Bakery</h2>
        <div className="about-section">
            <p>
            Our bakery has been serving the community with delicious, freshly baked goods for over a decade. 
            We pride ourselves on using the finest ingredients to create breads, pastries, and cakes that are 
            loved by everyone.
            </p>
            <img src={bakeryImage1} alt="Freshly baked bread" className="about-image right" />
        </div>
        <div className="about-section">
            <img src={bakeryImage2} alt="Pastries display" className="about-image left" />
            <p>
            Our journey started in a small kitchen with a passion for baking. Over the years, we’ve grown into 
            a beloved local spot where people gather to enjoy their morning coffee, a sweet treat, or a loaf of 
            artisan bread.
            </p>
        </div>
        <div className="about-section">
            <p>
            We believe in the power of community and aim to bring people together through our love of baking. 
            Whether it's a special occasion or just a daily treat, our bakery is here to make your moments 
            memorable.
            </p>
            <img src={bakeryImage3} alt="Cake decoration" className="about-image right" />
        </div>
        </div>
    );
};

export default About;
