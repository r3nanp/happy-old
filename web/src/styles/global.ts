import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: white;
    background: #ebf2f5;
  }

  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }

  :root {
    --primary: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    --bg: #0089a5;
    --link-color: #15c3d6;
    --link-color-hover: #17d6db;
    --yellow: #ffd666;
    --link-box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);;
  }
`
