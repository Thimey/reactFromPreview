import React, {PropTypes} from 'react';
import './hCardPreviewTitle.css'

const HCardPreviewTitle = ({title}) => (
    <h1 className="hCardPreviewTitle">{title}</h1>
);

HCardPreviewTitle.prototypes = {
    title: PropTypes.string.isRequired
};

export default HCardPreviewTitle;
