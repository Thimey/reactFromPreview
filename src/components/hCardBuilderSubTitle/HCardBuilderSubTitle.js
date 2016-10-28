import React, {PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './hCardBuilderSubTitle.css';

const HCardBuilderSubTitle = ({title}) => (
    <Col className="hCardBuilderSubTitleContainer" sm={12}>
        <h5 className="hCardBuilderSubTitle">{title.toUpperCase()}</h5>
    </Col>
);

HCardBuilderSubTitle.prototypes = {
    title: PropTypes.string.isRequired
};

export default HCardBuilderSubTitle;
