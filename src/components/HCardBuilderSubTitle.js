import React, {PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const HCardBuilderSubTitle = ({title}) => {

    return (
        <div>
            <Col sm={12}>
                <h5>{title.toUpperCase()}</h5>
            </Col>
        </div>
    );
};

HCardBuilderSubTitle.prototypes = {
    title: PropTypes.string.isRequired
};

export default HCardBuilderSubTitle;
