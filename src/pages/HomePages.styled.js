import styled from 'styled-components';

export const MainTitle = styled.h1`
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  margin-top: ${p => p.theme.spasing(6)};
  margin-bottom: ${p => p.theme.spasing(6)};
`;
