import styled from 'styled-components';
export const Btn = styled.button`
  border: 1px solid #e6dfdf;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 30px;
  cursor: pointer;
  margin: 10px;
  border-radius: 8px;

  background-color: ${props => {
    if (props.bgColor === 'good') {
      return 'green';
    }
    if (props.bgColor === 'neutral') {
      return 'yellow';
    } else return 'red';
  }};
`;
