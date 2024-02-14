import React from 'react';
import {Button} from "./Button";
import {FlexWrapper} from "./FlexWrapper";

type ButtonsPropsType = {
    cardTheme: string
}

const Buttons = (props: ButtonsPropsType) => {
    return (

        <FlexWrapper direction={'row'}>
            <Button  cardTheme={props.cardTheme}>See More</Button>
            <Button cardTheme={props.cardTheme+'_saveButton'}>Save</Button>
        </FlexWrapper>
    );
};

export default Buttons;