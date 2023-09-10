import PropTypes from 'prop-types';
import styled from "@emotion/styled";

const Result = styled.div`
  align-items: center;
  color: #FFF;
  display: flex;
  font-family: 'Lato', sans-serif;
  gap: 1rem;
  margin-top: 30px;

`;

const Imagen = styled.img`
  display: block;
  width: 120px;

`;

const Text = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span{
    font-weight: 700;
  }

`;

const Resultado = ({ resultado }) => {

  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

  return (
    <Result>
      <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt='Imagen Cripto' 
      />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Text>El precio más alto del día: <span>{HIGHDAY}</span></Text>
        <Text>El precio más bajo del día: <span>{LOWDAY}</span></Text>
        <Text>El porcentaje de variación 24 horas: <span>{CHANGEPCT24HOUR}%</span></Text>
        <Text>Última actualización: <span>{LASTUPDATE}</span></Text>
      </div>
    </Result>
  );
}

Resultado.propTypes = {
  resultado: PropTypes.object
}

export default Resultado;
