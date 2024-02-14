import React from 'react';
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    border-style: none;
    
    font-family: Inter, sans-serif;
    font-size: 10px;
    font-weight: 600;
  }
    
`

export default GlobalStyle;