import { useState } from 'react';
import styled from '@emotion/styled';
import ImagenCripto from './img/imagen-criptos.png';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    column-gap:  2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Heading = styled.h1`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  font-size: 34px;
  font-weight: 700;
  margin: 80px 0px 50px 0px;
  text-align: center;

  &::after {
    background-color:#66A2FE;
    content: '';
    display: block;
    height: 6px;
    margin: 10px auto 0 auto;
    width: 100px;
  }
`;

const Imagen = styled.img`
  display: block;
  margin: 100px auto 0 auto;
  max-width: 400px;
  width: 80%;
`;

function App() {
  return (
    <Contenedor>
      <Imagen 
        src={ImagenCripto}
        alt="Imagen Criptomonedas"
      />
      <div>
        <Heading>Cotizador Criptomonedas</Heading>
      </div>
    </Contenedor>
  )
}

export default App
