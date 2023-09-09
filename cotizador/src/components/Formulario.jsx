import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
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

  const [criptos, setCriptos] = useState([]);
  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);
  SelectMonedas();

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;

      const response = await fetch(url);
      const result = await response.json();

      const arrayCriptos = result.Data.map(cripto => {
        return { id: cripto.CoinInfo.Name, name: cripto.CoinInfo.FullName }
      });

      setCriptos(arrayCriptos);
    }
    consultarAPI();
  }, [])

  return (
    <form>
        <SelectMonedas />
        <InputSubmit 
          type='submit' 
          value='Cotizar' 
        />
    </form>
  );
}

export default Formulario;
