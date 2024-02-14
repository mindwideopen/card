import React from 'react';
import styled from "styled-components";


type HeadlinePropsType = {
    headline: string
}
export const Headline = (props:HeadlinePropsType) => {
    return (
        <div>
            <HeadlineStyled>
                {props.headline}
            </HeadlineStyled>
        </div>
    );
};

export default Headline;
const HeadlineStyled = styled.p`
    position: relative;
  top: 20px;
  left: 20px;
  font-weight: 700;
  font-size: 16px;
  font-family: Inter, sans-serif;
  line-height: 19.36px;
  
  

`