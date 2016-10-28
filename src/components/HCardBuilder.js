import React from 'react';
import HCardInput from './HCardInput';
import HCardBuilderSubTitle from './HCardBuilderSubTitle';
import HCardBuilderMainTitle from './HCardBuilderMainTitle';

const HCardBuilder = ({personalDetails, addressDetails, inputChange}) => {
    return (
        <form>

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


        </form>
    )
};

export default HCardBuilder;
