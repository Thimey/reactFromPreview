import React from 'react';
import HCardInput from '../hCardInput/HCardInput';
import HCardBuilderSubTitle from '../hCardBuilderSubTitle/HCardBuilderSubTitle';
import HCardBuilderMainTitle from '../hCardBuilderMainTitle/HCardBuilderMainTitle';
import HCardBuilderButton from '../hCardBuilderButton/HCardBuilderButton';

import './hCardBuilder.css';

const HCardBuilder = ({personalDetails, addressDetails, inputChange}) => {
    return (
            <form className="hCardBuilderForm">
                <HCardBuilderMainTitle title={"hCard Builder"}/>

                <HCardBuilderSubTitle title={"personal details"}/>

                {Object.keys(personalDetails).map((key) =>
                    <HCardInput
                        key={key}
                        type="text"
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
                        type="text"
                        inputChange={inputChange}
                        id={key}
                        detailType="addressDetails"
                        {...addressDetails[key]}
                    />
                )}

                <HCardBuilderButton label={"Create hCard"}/>
            </form>
    )
};

export default HCardBuilder;
