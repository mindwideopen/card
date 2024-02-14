import React from 'react';
import styled from "styled-components";


type DescriptionPropsType = {
    description: string
}
export const Description = (props: DescriptionPropsType) => {
    return (
        <DescriptionStyled>
            {props.description}
        </DescriptionStyled>
    );
};

export default Description;

const DescriptionStyled = styled.p`
  position: relative;
  width: 260px;
  min-height: 40px;
  top: 30px;
  left: 20px;
  right: 20px;
  color: #ABB3BA;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  
  



`