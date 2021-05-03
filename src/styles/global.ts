import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

        font-family: 'Roboto', sans-serif;
        font-weight: 300;

        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
        
        
    }
    html {
        overflow: scroll;
        overflow-x: hidden;
    }

    body {
        background: ${props => props.theme.colors.fundo};
        color: ${props => props.theme.colors.texto};
        -webkit-font-smoothing: antialiased;

        
    }
`;