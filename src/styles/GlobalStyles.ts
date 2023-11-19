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



:root {
  --color-brand-1: #13b0f5;
	--color-brand-1-shadow: #0999d8;
  --color-brand-2: #ca24b4;
	--color-white: #fff;
  --color-grey-100: #d9d9d9;
  --color-grey-200: #a7a7a7;
  --color-grey-800: #363636;
  --color-grey-900: #191919;
	--color-black: #000;
}

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  background: var(--color-grey-900);
  font-family:'Roboto Mono', monospace, 'Poppins', sans-serif, 'Rubik', 'Inter', sans-serif, 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.fontPrimary};


  font-size: 1.6rem;
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

`;

export default GlobalStyles;
