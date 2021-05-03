import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            fundo: string;
            head: string;
            texto: string;
            linhas:string;
            icones:string;
            check: string;
            corpoCheck: string;
            linhaCorpoCheck: string;
        },
    } 
}