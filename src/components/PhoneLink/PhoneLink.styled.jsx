import styled from 'styled-components';

const StyledLink = styled.a`
  cursor: pointer;
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  border-radius: 12px;
  background-color: #3470ff;
  border: 1px solid #fff;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 143%;
  &:hover,
  &:focus {
    background-color: #0b44cd;
    border-color: #0b44cd;
  }
`;

export { StyledLink };
