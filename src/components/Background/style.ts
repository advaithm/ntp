import styled, { css } from 'styled-components';

export const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  transition: 0.6s opacity ease-in-out;

  ${({
    src,
    ready,
    provider
  }: {
    src: any;
    ready: boolean;
    provider: string;
  }) => css`
    opacity: ${ready ? 1 : 0};

    background-image: ${provider == 'unsplash'
        ? 'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.5) 100%), '
        : ''}${src};

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `};
`;
