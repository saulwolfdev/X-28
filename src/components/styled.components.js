import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const ContainerMain = styled.main`
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content:stretch;
    height: calc(100vh - 240px);
    `;

export const ContainerHeader = styled.header`
    width: 100%;
    height: 170px;
    background-color: #034EA2;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ContainerHeaderImg = styled.img`
    width: 10%;
    margin: 0 auto;
    display: block;
`;
export const ContainerText = styled.div`
   width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const ContainerTextTitle = styled.h1`
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 37px;
    margin: 0;
    margin-bottom: 20px;
`;
export const ContainerTextDescription = styled.p`
    width: 100%;
    height: 100%;
    text-align: center;
    color:#8c8c8c;
`;
export const ContainerFooter = styled.footer`
    width: 100%;
    background-color: #034EA2;
`;
export const ContainerFooterText = styled.p`
    color: #fff;
    font-size: 11px;
    text-align: center;
    padding-bottom: 8px;
`;
export const ContainerFooterImage = styled.img`
    display: block;
    width: 4%;
    margin: auto auto;
    padding-bottom: 8px;
    padding: 8px 0;
`;
