import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import HCardBuilder from './components/HCardBuilder';
import HCardPreview from './components/HCardPreview';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        // TODO: Move this initial state to a separate file
        this.state = {
            personalDetails: {
                givenName: {value: '', label: 'given name'},
                surname: {value: '', label: 'surname'},
                email: {value: '', label: 'email'},
                phone: {value: '', label: 'phone'}
            },
            addressDetails: {
                nameNumber: {value: '', label: 'house name or #'},
                street: {value: '', label: 'street'},
                suburb: {value: '', label: 'suburb'},
                state: {value: '', label: 'state'},
                postcode: {value: '', label: 'postcode'},
                country: {value: '', label: 'country'}
            }
        };
    }

    updateInput(detailType, id, value) {
        this.setState({
            [detailType]: {
                ...this.state[detailType],
                [id]: {...this.state[detailType][id], value: value}
            }
        });
        // TODO: Remove logs
        console.log('state', this.state);

    }
    render() {
        return (
            <div className="App">
                <Grid>
                    <Row>
                        <Col xs={12} sm={6} md={6}>
                            <HCardBuilder
                                inputChange={(detailType, id, value) => this.updateInput(detailType, id, value)}
                                {...this.state}
                            />
                        </Col>

                        <Col xs={12} sm={6} md={6}>
                            <HCardPreview {...this.state}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
