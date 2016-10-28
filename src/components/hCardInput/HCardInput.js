import React, {PropTypes} from 'react';
import {FormControl, FormGroup, ControlLabel, Col} from 'react-bootstrap';

const HCardInput = ({type, inputChange, label, value, detailType, id}) => (
    <Col sm={6}>
        <FormGroup>
            <ControlLabel>{label.toUpperCase()}</ControlLabel>
            <FormControl
                type={type}
                value={value}
                onChange={(e) => inputChange(detailType, id, e.target.value)}
            />
        </FormGroup>
    </Col>
);

HCardInput.prototypes = {
    type: PropTypes.string.isRequired,
    inputChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired
};

export default HCardInput;
