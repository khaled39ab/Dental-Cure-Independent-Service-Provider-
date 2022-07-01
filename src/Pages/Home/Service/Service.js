import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, about } = service;
    return (
        <div>
            <div className='service-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className='my-2'>{price}</Card.Subtitle>
                        <Card.Text className='service-about'>
                            {about}
                        </Card.Text>
                        <Button variant="primary">Appointment</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;