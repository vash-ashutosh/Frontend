import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class Products extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Recommended Today</h2>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item>Nescafe</ListGroup.Item>
                            <ListGroup.Item>Tide</ListGroup.Item>
                            <ListGroup.Item>Chocos</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Products;