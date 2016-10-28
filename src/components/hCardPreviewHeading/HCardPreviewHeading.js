import React, {PropTypes} from 'react';
import './hCardPreviewHeading.css'

const HCardPreviewHeading = ({title}) => (
    <h4 className="HCardPreviewHeading">{title.toUpperCase()}</h4>
);

HCardPreviewHeading.prototypes = {
    title: PropTypes.string.isRequired
};

export default HCardPreviewHeading;
