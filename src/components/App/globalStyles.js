//@flow
import { createGlobalStyle } from 'styled-components';
import 'assets/globalStyle.css';

const AppGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default AppGlobalStyle;
