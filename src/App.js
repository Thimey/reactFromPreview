import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import HCardBuilder from './components/hCardBuilder/HCardBuilder';
import HCardPreview from './components/hCardPreview/HCardPreview';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalDetails: {
                givenName: {value: '', label: 'given name', type: 'text'},
                surname: {value: '', label: 'surname', type: 'text'},
                email: {value: '', label: 'email', type: 'email'},
                phone: {value: '', label: 'phone', type: 'tel'}
            },
            addressDetails: {
                nameNumber: {value: '', label: 'house name or #', type: 'text'},
                street: {value: '', label: 'street', type: 'text'},
                suburb: {value: '', label: 'suburb', type: 'text'},
                state: {value: '', label: 'state', type: 'text'},
                postcode: {value: '', label: 'postcode', type: 'text'},
                country: {value: '', label: 'country', type: 'text'}
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
    }

    render() {
        return (
            <div className="App">
                <Col className="hCardBuilderContainer" xs={12} md={6}>
                    <HCardBuilder
                        inputChange={(detailType, id, value) => this.updateInput(detailType, id, value)}
                        {...this.state}
                    />
                </Col>

                <Col className='hCardPreviewContainer' xs={12} md={6}>
                    <HCardPreview {...this.state}/>
                </Col>
            </div>
        );
    }
}

export default App;
