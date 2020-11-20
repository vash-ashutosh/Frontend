import React, { Component } from 'react';
import forecast2 from '../components/images/forecast2.jpeg';

class About extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div>
                    <h2>Smart Wallet Management</h2>
                    <h3 align='center'>Spendings</h3>
                    <img src={forecast2} />
                </div>
                
            </div>
        );
    }
}

export default About;