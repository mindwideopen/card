import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

type ButtonPropsType = {
    cardTheme: string,

}


export const Button = styled.button<ButtonPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  
  //style for dunesTheme

  ${props => props.cardTheme==='dunes' && css<ButtonPropsType>`
    background: ${theme.dunesTheme.seeMoreButtonBackgroundColor};
    color: ${theme.dunesTheme.seeMoreTextColor}
  `};
  
  ${props => props.cardTheme==='dunes_saveButton' && css<ButtonPropsType>`
    background: ${theme.dunesTheme.saveButtonBackgroundColor};
    border: ${theme.dunesTheme.saveButtonBorder};
    color: ${theme.dunesTheme.saveButtonTextColor}
  `};

          //style for tinkerTheme
  //
  ${props => props.cardTheme==='tinker' && css<ButtonPropsType>`
    background: ${theme.tinkerTheme.cardBackground};
    color: ${theme.tinkerTheme.seeMoreTextColor}
  `};

  ${props => props.cardTheme==='tinker_saveButton' && css<ButtonPropsType>`
    background: ${theme.tinkerTheme.saveButtonBackground};
    border: ${theme.tinkerTheme.saveButtonBorder};
    color: ${theme.tinkerTheme.saveButtonTextColor}
  `};

          //style for druidTheme

  ${props => props.cardTheme==='druid' && css<ButtonPropsType>`
    background: ${theme.druidTheme.seeMoreButtonBackgroundColor};
    color: ${theme.druidTheme.seeMoreTextColor}
  `};

  ${props => props.cardTheme==='druid_saveButton' && css<ButtonPropsType>`
    background: ${theme.druidTheme.saveButtonBackground};
    border: ${theme.druidTheme.saveButtonBorder};
    color: ${theme.druidTheme.saveButtonTextColor}
  `};
  
          //style for axeTheme

  ${props => props.cardTheme==='axe' && css<ButtonPropsType>`
    background: ${theme.axeTheme.seeMoreButtonBackgroundColor};
    color: ${theme.axeTheme.seeMoreTextColor}
    
  `};

  ${props => props.cardTheme==='axe_saveButton' && css<ButtonPropsType>`
    background: ${theme.axeTheme.saveButtonBackground};
    border: ${theme.axeTheme.saveButtonBorder};
    
  `}
  
`


// button {
//     padding: 0;
//     border: none;
//     font: inherit;
//     color: inherit;
//     background-color: transparent;
//     cursor: pointer;
// }