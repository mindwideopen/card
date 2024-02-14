import React from 'react';
import styled, {css} from "styled-components";
import Headline from "./Headline";
import Description from "./Description";
import {Img} from "./Img";
import {theme} from "../styles/Theme";
import {Button} from "./Button";
import {FlexWrapper} from "./FlexWrapper";
import Buttons from "./Buttons";


type CardPropsType = {
    cardTheme: string,
    picture: string,
    headline: string,
    description: string,
}




const Card = (props: CardPropsType) => {
    let onClick = () => {
        alert('Тема карточки: '+`${props.cardTheme}`)
    }

    return (
        <CardStyled cardTheme={props.cardTheme}
                    picture={props.picture}
                    headline={props.headline}
                    description={props.description}>
            <Img src={props.picture}/>
            <Headline headline={props.headline}/>
            <Description description={props.description}/>
            <Buttons cardTheme={props.cardTheme}/>
            <button onClick={onClick}>Press</button>
        </CardStyled>


    );
};

let CardStyled = styled.div<CardPropsType>`
  min-height: 350px;
  width: 300px;
  border-radius: 15px;
  box-shadow: 5px 5px 15px grey;
  
  ${props => props.cardTheme === 'dunes' && css<CardPropsType>`
    background: ${theme.dunesTheme.cardBackground};
  `   
};

  ${props => props.cardTheme === 'tinker' && css<CardPropsType>`
    background: ${theme.tinkerTheme.cardBackground};
  `
  };

  ${props => props.cardTheme === 'druid' && css<CardPropsType>`
    background: ${theme.druidTheme.cardBackground};
  `
  };

  ${props => props.cardTheme === 'axe' && css<CardPropsType>`
    background: ${theme.axeTheme.cardBackground};
  `
  };




`
export default Card;