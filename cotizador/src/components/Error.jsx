import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const MsgError = styled.div`
  background-color: #B7622C;
  border-radius: 10px;
  color: #FFF;
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  font-weight: 700;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
`

const Error = ({ children }) => {
  return (
    <MsgError>
      {children}
    </MsgError>
  );
}

Error.propTypes = {
  children: PropTypes.element
}

export default Error;
