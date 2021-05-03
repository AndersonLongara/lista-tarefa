import styled, {css} from 'styled-components';

import { FiTrash2 } from 'react-icons/fi';


interface propsStatus {
    status: boolean;
}

interface propsTag {
    selecionado: boolean;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-top: 0px;
    padding-bottom: 0px;
    
`;

export const Content = styled.div<propsStatus>`
    display: flex;
    width: 90%;
    padding: 8px 0; 

    align-Items: center;
    flex-Direction: row;

   
    

    ${props => props.status && 
        css`
            background: ${props => props.theme.colors.corpoCheck};
            border-top: 1px solid ${props => props.theme.colors.linhaCorpoCheck};  

            padding: 7.5px 0; 

        `
    }
`;

export const Botao = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    padding: 0;
    margin: 0;
`;

export const CirculoStatus = styled.div<propsStatus>`
    display: flex;
    width: 20px;
    height: 20px;
    border-Radius: 50px;

    justify-content: center;
    align-items: center;

    border: 1.5px solid ${props=> props.theme.colors.icones};

    ${props => !props.status && 
        css`
            :hover {
                border-color: ${props=> props.theme.colors.check};
                border-width: 2px;
            }
        `
    }
    ${props => props.status && 
        css`
             background: ${props=> props.theme.colors.check};
             border-width: 0;
        `
    }
`

export const InputText = styled.input<propsStatus>`
    width: 95%;

    font-size: 14px;

    padding-left: 15px;        
    background: transparent;
    border-Color: transparent;
    color: ${props=> props.theme.colors.texto};

    &::placeholder {
         color: ${props=> props.theme.colors.icones};
         font-style: italic;
    }

    ${props => props.status && 
        css`
             text-Decoration: line-through;
             font-style: italic;
        `
    }
`;

export const ContainerBotoes = styled.div`
    display: flex;
    
    justify-Content: space-between;
    align-Items: center;
    flex-Direction: row;
`;

export const LixeiraIcone = styled(FiTrash2)`
    color: ${props=> props.theme.colors.icones};

    :hover {
        color: #F55555;
    }
`;
 
export const LinhaSeparadora = styled.div<propsStatus>`
    width: 90%;

    margin-left: 1px;
    height: 1px;
    background:${props=> props.theme.colors.linhas};
    align-Self: center;

    ${props => props.status && 
        css`
            background: ${props => props.theme.colors.linhaCorpoCheck};  
        `
    }
`;

export const ContentPrimeiraTarefa = styled.div`
    display: flex;
    flex: 1; 
    justify-Content: center; 
    align-Items: center;

`;

export const TituloPrimeiraTarefa = styled.span`
    padding-Right: 15px; 
    font-Size: 16px;
    
    font-Style: italic;
`;

export const ContainerFiltro = styled.div`
    display: flex;
    flex-Direction: row; 
    margin-Bottom: 35px;
`;

export const ContentFiltro = styled.a`
    display: flex;
    flex-Direction: row; 
    margin-right: 10px;
    cursor: pointer;
`;

export const ContainerTag = styled.div<propsTag>`
     border: 1px solid ${props => props.theme.colors.icones};
     padding: 5px 20px;
     background: ${props => props.theme.colors.fundo};
     border-Radius: 20px;

     ${props => props.selecionado &&
        css`
            border-color: ${props => props.theme.colors.linhaCorpoCheck};
            background: ${props => props.theme.colors.corpoCheck};
        `
     }
`;

export const TituloTag = styled.span<propsTag>`
    font-Size: 13px;
    color: ${props => props.theme.colors.icones};

    ${props => props.selecionado &&
        css`
            color: ${props => props.theme.colors.texto};
        `
     }
`;

