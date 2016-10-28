import React, {PropTypes} from 'react';
import {Col} from 'react-bootstrap';
import HCardPreviewField from '../hCardPreviewField/HCardPreviewField';
import HCardPreviewTitle from '../hCardPreviewTitle/HCardPreviewTitle';
import HCardPreviewHeading from '../hCardPreviewHeading/HCardPreviewHeading';
import './hCardPreview.css'

const HCardPreview = ({personalDetails, addressDetails}) => {
    return (
        <div className="hCardPreviewCard centerElement">

            <div className="hCardPreviewHeadingContainer">
                <HCardPreviewHeading title={"hcard preview"}/>
            </div>

            <div className="hCardPreviewTitleContainer hCardPreviewItemRow">
                <HCardPreviewTitle title={`${personalDetails.givenName.value} ${personalDetails.surname.value}`}/>
            </div>

            <div className="hCardPreviewContent">

                <Col className="hCardPreviewFieldContainer hCardPreviewItemRow" sm={12}>
                    <HCardPreviewField
                        tag="email"
                        value={personalDetails.email.value}
                    />
                </Col>

                <Col className="hCardPreviewFieldContainer hCardPreviewItemRow" sm={12}>
                    <HCardPreviewField
                        tag="phone"
                        value={personalDetails.phone.value}
                    />
                </Col>

                <Col className="hCardPreviewFieldContainer hCardPreviewItemRow" sm={12}>
                    <HCardPreviewField
                    tag="address"
                    value={`${addressDetails.nameNumber.value} ${addressDetails.street.value}`}
                />
                </Col>

                <Col className="hCardPreviewFieldContainer hCardPreviewItemRow" sm={12}>
                    <HCardPreviewField
                    tag=""
                    value={addressDetails.suburb.value === '' || addressDetails.state.value === '' ?
                        `${addressDetails.suburb.value} ${addressDetails.state.value.toUpperCase()}` :
                        `${addressDetails.suburb.value}, ${addressDetails.state.value.toUpperCase()}`}
                />
                </Col>

                <Col className="hCardPreviewFieldContainer hCardPreviewItemRow" sm={6}>
                    <HCardPreviewField
                        tag="postcode"
                        value={addressDetails.postcode.value}
                    />
                </Col>

                <Col className="hCardPreviewFieldContainer hCardPreviewItemRow" sm={6}>
                    <HCardPreviewField
                        tag="country"
                        value={addressDetails.country.value}
                    />
                </Col>
            </div>
        </div>
    )
};

HCardPreview.proptypes = {
    personalDetails: PropTypes.object.isRequired,
    addressDetails: PropTypes.object.isRequired
};

export default HCardPreview;
