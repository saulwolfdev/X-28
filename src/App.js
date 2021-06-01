import React from "react";
import {
  Container,
  ContainerMain,
  ContainerHeader,
  ContainerHeaderImg,
  ContainerFooter,
  ContainerFooterText,
  ContainerFooterImage,
  ContainerText,
  ContainerTextTitle,
  ContainerTextDescription,
} from "./components/styled.components";

const App = () => {
  return (
    <Container>

      <ContainerHeader>
        <ContainerHeaderImg src="./LOGO-X28.png" />
      </ContainerHeader>

      <ContainerMain>
        <ContainerText>
      <ContainerTextTitle>
      Confirmación exitosa
      </ContainerTextTitle>
      <ContainerTextDescription>
      Ya podés comandar tu alarma a distancia y disfrutar de todos sus beneficios.
      <br/>
      ¡Gracias por elegirnos!
      </ContainerTextDescription>
        </ContainerText>
      </ContainerMain>

      <ContainerFooter>
        <ContainerFooterImage src="./vivi.png" />
        <ContainerFooterText>
          &copy; X-28 Alarmas, ©2021 All rights reserved
        </ContainerFooterText>
      </ContainerFooter>

    </Container>
  );
};

export default App;
