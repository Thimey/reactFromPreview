import React, {PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const HCardBuilderMainTitle = ({title}) => {

    return (
        <div>
            <Col sm={12}>
                <h1>{title}</h1>
            </Col>
        </div>
    );
};

HCardBuilderMainTitle.prototypes = {
    title: PropTypes.string.isRequired
};

export default HCardBuilderMainTitle;
