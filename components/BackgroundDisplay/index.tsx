import styled, { css } from 'styled-components';

export const BackgroundDisplay = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  transition: 0.7s transform, 0.2s filter;

  ${({ loaded, dimmed }: { loaded: boolean; dimmed: boolean }) => css`
      opacity: ${dimmed ? 0.2 : loaded ? 0.8 : 0};
      transform: scale(${dimmed ? 1.01 : 1});
  `};
`;