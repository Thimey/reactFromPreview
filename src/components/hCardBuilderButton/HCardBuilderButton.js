import React, {PropTypes} from 'react';
import {Col, Button} from 'react-bootstrap';
import './hCardBuilderButton.css';

const HCardBuilderButton = ({label}) => (
    <Col className="hCardBuilderButtonContainer" sm={12}>
        <Button
            className="hCardBuilderButton"
            bsSize="large">
            {label}
        </Button>
    </Col>
);

HCardBuilderButton.prototypes = {
    label: PropTypes.string.isRequired
};

export default HCardBuilderButton;
