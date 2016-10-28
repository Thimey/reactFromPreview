import React, {PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const HCardPreviewTitle = ({title}) => {

    return (
        <div>
            <Col sm={12}>
                <h1>{title}</h1>
            </Col>
        </div>
    );
};

HCardPreviewTitle.prototypes = {
    title: PropTypes.string.isRequired
};

export default HCardPreviewTitle;
