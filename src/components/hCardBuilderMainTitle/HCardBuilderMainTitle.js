import React, {PropTypes} from 'react';
import {Col} from 'react-bootstrap';
import './hCardBuilderMainTitle.css';

const HCardBuilderMainTitle = ({title}) => (
    <Col className="hCardBuilderMainTitle" sm={12}>
        <h1><strong>{title}</strong></h1>
    </Col>
);

HCardBuilderMainTitle.prototypes = {
    title: PropTypes.string.isRequired
};

export default HCardBuilderMainTitle;
