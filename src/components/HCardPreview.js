import React, {PropTypes} from 'react';
import HCardPreviewField from './HCardPreviewField';

const HCardPreview = ({personalDetails, addressDetails}) => {
    return (
        <div>

            <HCardPreviewField
                tag="email"
                value={personalDetails.email.value}
            />

            <HCardPreviewField
                tag="phone"
                value={personalDetails.phone.value}
            />

            <HCardPreviewField
                tag="address"
                value={`${addressDetails.nameNumber.value} ${addressDetails.street.value}`}
            />

            <HCardPreviewField
                tag=""
                value={`${addressDetails.suburb.value}, ${addressDetails.state.value.toUpperCase()}`}
            />

            <HCardPreviewField
                tag="postcode"
                value={addressDetails.postcode.value}
            />

            <HCardPreviewField
                tag="country"
                value={addressDetails.country.value}
            />

        </div>
    )
};

// HCardPreview.proptypes = {
//     formDetails
// };

export default HCardPreview;
