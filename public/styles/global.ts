import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    box-sizing:border-box;
} 
html{
    --primary: #191a1b;
    --secondary:#4b6cc1;
    --rubik:rubik;
}
body{
    margin:0;
    padding:0;
    font-family:var(--rubik);

 }

`

export {GlobalStyle}