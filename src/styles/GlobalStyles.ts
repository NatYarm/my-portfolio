import { createGlobalStyle } from 'styled-components';
import theme from './Theme';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}


html {
  font-size: 10px;
}

body {
  background:  ${theme.colors.primaryBg};
  font-family:'Roboto Mono', monospace;
  font-size: 1.8rem;
  color: ${theme.colors.fontPrimary};
  min-width: 36rem;
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}



section {
	padding-bottom: 100px;
}

a {
	text-decoration: none;
	color: ${theme.colors.fontPrimary};
	cursor: pointer;

	&:focus-visible {
    outline: 1px solid ${theme.colors.fontSecondary};
}
}

ul {
	list-style: none;
}

button {
	background-color: unset;
	border: none;
	cursor: pointer;
  }


input, textarea, button {
	&:focus {
		outline: none;
	}
}

@media screen and (max-width: 576px) {
  html {
    font-size: 8px
  }
}
`;

export default GlobalStyles;
