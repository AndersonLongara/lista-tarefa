import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    padding: 0 0vh;

    flex-direction: column;

`;

export const Head = styled.div`
    display: flex;
    align-items: center;
    padding: 8vh 20vh 5vh 20vh;

    justify-content: space-between;

    background: ${props => props.theme.colors.head};
`;

export const Titulo = styled.span`
    font-size: 1.6em;
`;

export const Content = styled.div`
    display: flex;

    padding: 5vh 30vh;

    flex-direction: column;
`;

export const Footer = styled.div`
    display: flex;

    padding: 10vh 30vh;

`;

export const ContentFooter = styled.div`
     display: flex;

     flex-direction: row;
     justify-content: center;
     align-items: center;

     margin-right: 5vh;
`;

export const CirculoTotal = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    min-width: 25px;
    min-height: 25px;
    background: ${props => props.color};
    border-radius: 50px;
    
    margin-left: 2vh;
`;

export const TextoTotal = styled.span`
    font-Size: 14px;
    font-Style:italic;
`;

export const TextoContador = styled.span`
    color: #fff;
    font-Size: 13px;
`;

export const ContentHead = styled.div`
    display: flex;
    justify-Content: center;
`;