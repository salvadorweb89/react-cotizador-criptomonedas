import styled from "@emotion/styled";

const Label = styled.label`
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0px;
`;

const Select = styled.select`
  border-radius: 10px;
  font-size: 18px;
  padding: 14px;
  width: 100%;
`;

const useSelectMonedas = (label, opciones) => {
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select>
        <option value=''>-- Seleccione</option>
        {
          opciones.map(opcion => (
            <option 
              key={opcion.id}
              value={opcion.id}
            >{opcion.nombre}</option>
          ))
        }
      </Select>
    </>
  )

  return [SelectMonedas];
}

export default useSelectMonedas;
