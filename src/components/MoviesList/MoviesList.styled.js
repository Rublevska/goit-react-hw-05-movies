import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  /* grid-template-rows: */
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: ${p => p.theme.colors.mainTextColor};
`;
