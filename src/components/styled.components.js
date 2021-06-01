import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;
export const ContainerHeader = styled.header`
    width: 100%;
    height: 180px;
    background-color: #034EA2;
`;
export const ContainerHeaderImg = styled.img`
    width: 10%;
    margin: 0 auto;
    display: block;
`;
export const ContainerMain = styled.section`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 260px);
    display: flex;
    align-items: center;
    `;
export const ContainerText = styled.div`
    width: 40%;
    height: 100%;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
    color: rgb(33, 43, 54);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-image: none;
    box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px;
    border-radius: 16px;
    position: relative;
    z-index: 0;
    padding: 80px;

`;
export const ContainerTextTitle = styled.h1`
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 37px;
    margin-bottom: 28px;
`;
export const ContainerTextDescription = styled.p`
    width: 100%;
    height: 100%;
    text-align: center;
    color:#8c8c8c;
`;
export const ContainerFooter = styled.footer`
    width: 100%;
    height: 60px;
    background-color: #034EA2;
    padding: 10px;
`;
export const ContainerFooterText = styled.p`
    color: #fff;
    font-size: 11px;
    text-align: center;
`;
export const ContainerFooterImage = styled.img`
    display: block;
    width: 5%;
    margin: 0 auto;
`;
