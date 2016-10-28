import React, {PropTypes} from 'react';
import HCardInput from '../hCardInput/HCardInput';
import HCardBuilderSubTitle from '../hCardBuilderSubTitle/HCardBuilderSubTitle';
import HCardBuilderMainTitle from '../hCardBuilderMainTitle/HCardBuilderMainTitle';
import HCardBuilderButton from '../hCardBuilderButton/HCardBuilderButton';

import './hCardBuilder.css';

const HCardBuilder = ({personalDetails, addressDetails, inputChange}) => {
    return (
        <div className="centerElement">
            <form className="hCardBuilderForm">
                <HCardBuilderMainTitle title={"hCard Builder"}/>

                <HCardBuilderSubTitle title={"personal details"}/>

                {Object.keys(personalDetails).map((key) =>
                    <HCardInput
                        key={key}
                        inputChange={inputChange}
                        id={key}
                        detailType="personalDetails"
                        {...personalDetails[key]}
                    />
                )}

                <HCardBuilderSubTitle title={"address"}/>

                {Object.keys(addressDetails).map((key) =>
                    <HCardInput
                        key={key}
                        inputChange={inputChange}
                        id={key}
                        detailType="addressDetails"
                        {...addressDetails[key]}
                    />
                )}

                <HCardBuilderButton label={"Create hCard"}/>
            </form>
        </div>
    )
};

HCardBuilder.proptypes = {
    personalDetails: PropTypes.object.isRequired,
    addressDetails: PropTypes.object.isRequired,
    inputChange: PropTypes.func.isRequired
};


export default HCardBuilder;
