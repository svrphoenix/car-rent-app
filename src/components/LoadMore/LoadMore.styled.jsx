import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  display: block;
  margin: 100px auto 0 auto;
  padding: 0;
  background-color: transparent;
  border-color: transparent;
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
    border-color: transparent;
  }
`;

export { StyledButton };
