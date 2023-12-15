import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieImage = styled.img`
  width: 260px;
  margin-bottom: ${p => p.theme.spasing(10)};
`;

export const MainDiscr = styled.div`
  display: flex;
  gap: ${p => p.theme.spasing(8)};
  margin-bottom: ${p => p.theme.spasing(6)};
  box-shadow: ${p => p.theme.shadows.headerShadow};
`;

export const MovieDetailsSection = styled.section`
  padding-left: ${p => p.theme.spasing(10)};
  padding-right: ${p => p.theme.spasing(10)};
  padding-top: ${p => p.theme.spasing(1)};
  padding-bottom: ${p => p.theme.spasing(10)};
`;

export const BackLink = styled(NavLink)`
  display: block;
  padding-bottom: ${p => p.theme.spasing(4)};
  text-decoration: none;
  color: ${p => p.theme.colors.navLinkColor};
  font-weight: 500;

  &:hover {
    color: ${p => p.theme.colors.navLinkAccentColor};
  }
`;

export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spasing(3)};
`;

export const MainTitle = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
`;

export const SubLinkMemu = styled.ul`
  display: flex;
  gap: ${p => p.theme.spasing(4)};
  margin-bottom: ${p => p.theme.spasing(6)};
`;

export const SubLink = styled.li`
  margin-bottom: ${p => p.theme.spasing(2)};
`;

export const AddLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.navLinkColor};
  font-weight: 700;

  &:hover {
    color: ${p => p.theme.colors.navLinkAccentColor};
  }

  &.active {
    color: ${p => p.theme.colors.navLinkAccentColor};
  }
`;
