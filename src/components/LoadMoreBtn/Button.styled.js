import styled from 'styled-components';

export const BtnStyled = styled.button`
  display: block;
  margin: 16px auto;
  padding: 8px 16px;
  border: 0;
  text-align: center;
  color: ${p => p.theme.colors.navLinkAccentColor};
  font-weight: 700;
  min-width: 180px;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(42, 52, 114, 0.7);
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 15px 20px rgba(42, 52, 114, 0.7);
    transform: translateY(-7px);
  }
`;
