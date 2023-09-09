import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
@font-face {
  font-family: 'Montserrat';
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
    url('/fonts/Montserrat-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Montserrat';
  src: local('Montserrat Semi Bold'), local('Montserrat-Semi-Bold'),
    url('/fonts/Montserrat-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: local('Manrope  Semi bold'), local('Manrope--Semi-bold'),
    url('/fonts/Manrope-Semibold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: local('Manrope  Medium'), local('Manrope--Medium'),
    url('/fonts/Manrope-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: local('Manrope  Regular'), local('Manrope--Regular'),
    url('/fonts/Manrope-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: local('Inter Medium'), local('Inter-Medium'),
    url('/fonts/Inter-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}

  /* color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424; */

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  min-width: 320px;
  width: 100vw;
  font-family: Manrope;
}

ul,li,h1,h2,h3,h4,p {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
} */

/* body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
} */

/* h1 {
  font-size: 3.2em;
  line-height: 1.1;
} */

img{
display: block;
  max-width: 100%;
  height: auto;
}

button {
  border: 1px solid transparent; //?????
  font-family: inherit;
  cursor: pointer;
  /* transition: border-color 0.25s; */
}


.hidden{
  overflow: hidden;
}


/* button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
} */
`;
export default GlobalStyle;
