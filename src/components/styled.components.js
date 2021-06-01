import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const ContainerMain = styled.main`
    width: 100%;
    background-color: yellow;
    display: grid;
    grid-template-columns: 20% 80%;
    height: calc(100vh - 36px);
    `;

export const ContainerHeader = styled.header`
    width: 100%;
    background-color: red;
`;
export const ContainerText = styled.div`
    width: 100%;
    height: 100%;
    background-color: green;
    align-self: stretch;

`;
export const ContainerImage = styled.div`
    width: 100%;
    height: 100%;
    background-color: purple;

`;
export const ContainerFooter = styled.footer`
    width: 100%;
    height: 100%;
    background-color: aqua;
`;