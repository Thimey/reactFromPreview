import React, {PropTypes} from 'react';

const HCardPreviewField = ({tag, value}) => {

    return (
        <div>
            <span>{tag.toUpperCase()}  </span>
            <span>{value}</span>
        </div>
    );
};

HCardPreviewField.prototypes = {
    tag: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default HCardPreviewField;
