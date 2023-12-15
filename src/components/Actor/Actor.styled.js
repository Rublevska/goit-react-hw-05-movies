import styled from 'styled-components';

export const ActorImage = styled.img`
  width: 100px;
`;

export const ActorWrap = styled.div`
  display: flex;
  gap: ${p => p.theme.spasing(8)};
  margin-bottom: ${p => p.theme.spasing(4)};
`;

export const ActorDiscr = styled.div`
  display: flex;
  gap: ${p => p.theme.spasing(2)};
  flex-direction: column;
`;
