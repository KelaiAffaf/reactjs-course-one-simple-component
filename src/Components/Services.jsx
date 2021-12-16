import React from 'react'
import Card from './Card'
import '../App.css'
function Services() {
    return (
        <div className='services-container'>
            <h1>Our Services</h1>
            <div className="card-container">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Services
