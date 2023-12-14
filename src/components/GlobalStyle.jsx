import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
@font-face {
  font-family: 'Montserrat';
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
    url('./fonts/Montserrat-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Montserrat';
  src: local('Montserrat Semi Bold'), local('Montserrat-Semi-Bold'),
    url('./fonts/Montserrat-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: local('Manrope  Semi bold'), local('Manrope--Semi-bold'),
    url('./fonts/Manrope-Semibold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: local('Manrope  Medium'), local('Manrope--Medium'),
    url('./fonts/Manrope-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: local('Manrope  Regular'), local('Manrope--Regular'),
    url('./fonts/Manrope-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
  scrollbar-width: thin;
  scrollbar-color: auto;

   @media screen and (min-width: 768px) { 
    scrollbar-width: auto;
  } 
}

*::-webkit-scrollbar {
    width: 6px;
    height: 12px;

  @media screen and (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
}

*::-webkit-scrollbar-thumb {
  background-color: lightgray;
  border: 4px solid transparent;
  border-radius: 8px;
  background-clip: padding-box;  
}

body {
  margin: 0;
  min-width: 320px;
  font-family: Manrope;
}

ul,li,h1,h2,h3,h4,p {
  margin: 0;
}

a {
  cursor:pointer;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  
  /* &:focus{
    outline: 6px ridge #09023599;
  } */
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img{
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  display: inline-block;
  border: 1px solid transparent; 
  font-family: inherit;
  
}

.hidden{
  overflow: hidden;
}
`;

export default GlobalStyle;
