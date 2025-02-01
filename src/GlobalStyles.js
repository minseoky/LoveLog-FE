import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2'),
    url('/fonts/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2'),
    url('/fonts/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'Pretendard', sans-serif;
  }
`;

export default GlobalStyles;
