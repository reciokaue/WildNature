import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiasing;
    }
    html,body, #root{
        height: 100%;
        background: #0e0e0e;
        color: #fff;
        font-family: 'Oswald', sans-serif;
    }
    *, button, input{
        border:0;
        outline:0;

        font-family: 'Oswald', sans-serif;
    }

    :root{
    --black: #000;
    --primary: #F38627;
    --secondary: #333;
 
    --white: #fff;
    --text: #979797;
    --gray: #8a8c90;
    }
`;