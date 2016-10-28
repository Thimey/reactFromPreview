import React, {PropTypes} from 'react';
import './hCardPreviewField.css';

const HCardPreviewField = ({tag, value}) => (
    <div className="hCardPreviewField">
        <div className="hCardPreviewFieldTag">{tag.toUpperCase()}</div>
        <div className="hCardPreviewFieldValue">{value}</div>
    </div>
);

HCardPreviewField.prototypes = {
    tag: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default HCardPreviewField;
