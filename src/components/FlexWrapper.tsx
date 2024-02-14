import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    height?: string
    textAlign?: string,
    backgroundColor?: string,
    gap?: string,


}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  position: relative;
  top: 50px;
  left: 20px;


  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  height: ${props => props.height || 'auto'};
  text-align: ${props => props.textAlign || 'left'};
  gap: ${props => props.gap || '0'};
  
  button + button {
    margin-left: 10px;
  }




`

