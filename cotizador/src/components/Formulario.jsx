import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  border-radius: 5px;
  color: #FFF;
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  padding: 10px;
  text-transform: uppercase;
  transition: background-color .3s ease;
  width: 100%;

  &:hover {
    background-color: #7072bc;
    cursor: pointer;
  }
`;

const Formulario = () => {

  const [ criptos, setCriptos ] = useState([]);
  const [ error, setError ] = useState(false);

  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);
  const [ criptomoneda, SelectCriptoMonedas ] = useSelectMonedas('Elige tu Criptomoneda', criptos);


  SelectMonedas();

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;

      const response = await fetch(url);
      const result = await response.json();

      const arrayCriptos = result.Data.map(cripto => {
        return { id: cripto.CoinInfo.Name, nombre: cripto.CoinInfo.FullName }
      });

      setCriptos(arrayCriptos);
    }
    consultarAPI();
  }, [])


  const handleSubmit = e => {
    e.preventDefault();
    if([moneda,criptomoneda].includes('')) {
      setError(true);
      return;
    }

  }


  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
          <SelectMonedas />
          <SelectCriptoMonedas />

          <InputSubmit 
            type='submit' 
            value='Cotizar' 
          />
      </form>
    </>
  );
}

export default Formulario;
