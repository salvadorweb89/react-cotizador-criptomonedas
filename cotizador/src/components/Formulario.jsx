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

  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);
  SelectMonedas();


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
