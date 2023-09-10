import styled from 'styled-components';

const MainHeader = styled.h1`
  color: #3470ff;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 0.03125rem;
  line-height: 1.12;
  margin-bottom: 48px;
  text-transform: none;
`;

const MainSlogan = styled.h2`
  color: #181918;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.015625rem;
  line-height: 1.2;
  margin-bottom: 52px;
`;

const BlockWrapper = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const BlockHeader = styled.h2`
  color: #181918;
  font-size: 22px;
  font-family: Montserrat;
  font-weight: 500;
  letter-spacing: -0.015625rem;
  line-height: 1.2;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.015625rem;
  line-height: 1.33;
  margin-bottom: 20px;
`;

export { MainHeader, MainSlogan, BlockWrapper, BlockHeader, Text };
