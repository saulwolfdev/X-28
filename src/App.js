import React from 'react'
import {Container,ContainerMain,ContainerHeader,ContainerFooter, ContainerText,ContainerImage} from './components/styled.components';

const App = () => {
  return (
    <Container>
      <ContainerHeader>
        header
      </ContainerHeader>
      <ContainerMain>
    <ContainerText>
        text
      </ContainerText>
      <ContainerImage>
          image
      </ContainerImage> 
      </ContainerMain>

      <ContainerFooter>
        footer
      </ContainerFooter>
    </Container>
  );
}
 
export default App;
